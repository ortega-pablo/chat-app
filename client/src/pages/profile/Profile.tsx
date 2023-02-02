import React, { useState, useEffect } from 'react';
import { Container, ProfileBox } from './Profile.style';
import ChatAppLogo from '../../assets/ChatAppLogo.png';
import { UserInterface } from '../../config/intefaces';
import { currentUserRoute, decryptTokenRoute } from '../../config/APIRoutes';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { BiX } from 'react-icons/bi';
import ChangePass from '../../components/changePass/ChangePass';

function Profile() {
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState<UserInterface>();
  const [changePass, setChangePass] = useState<boolean>(false);

  const token = localStorage.getItem('token');

  const getCurrentUser = async (token: string) => {
    const config = {
      headers: {
        Authorization: 'Bearer ' + token
      }
    };
    await axios
      .post(decryptTokenRoute, {}, config)
      .then(async (response) => {
        const { data } = await axios.get(
          `${currentUserRoute}/${response.data.user.id}`
        );
        setCurrentUser(data.user);
      })
      .catch((error) => {
        console.log(error);
        localStorage.removeItem('token');
        navigate('/login');
      });
  };

  const handleClickAvatar = () => {
    navigate('/setAvatar');
  };
  const handleCloseProfile = () => {
    navigate('/');
  };
  const handleClickPass = () => {
    setChangePass(!changePass);
  };

  useEffect(() => {
    if (!token) {
      navigate('/login');
    } else {
      getCurrentUser(token);
    }
  }, []);

  return (
    <Container>
      <ProfileBox>
        <div className="skip" onClick={handleCloseProfile}>
          <BiX />
        </div>
        <div className="brand">
          <img src={ChatAppLogo} alt="Logo Chat App" />
          <h1>Chat App</h1>
        </div>
        <div className="tittle">
          <h4>Usuario: </h4>
          <span>{currentUser?.userName}</span>
          <h4>Email: </h4>
          <span>{currentUser?.email}</span>
        </div>
        <div className="avatar">
          <img
            src={`data:image/svg+xml;base64,${currentUser?.avatarImage}`}
            alt="avatar"
          />
        </div>
        <button onClick={handleClickAvatar}>Cambiar avatar</button>
        <button onClick={handleClickPass}>Cambiar contraseña</button>
      </ProfileBox>
      {changePass && (
        <ChangePass
          handleClickPass={handleClickPass}
          userId={currentUser?._id}
        />
      )}
    </Container>
  );
}

export default Profile;
