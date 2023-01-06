import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastOptions } from 'react-toastify/dist/types';
import axios from 'axios';
import { setAvatarRoute } from '../../utils/APIRoutes';
import { Container } from './SetAvatar.style';
import { Buffer } from 'buffer';
import Spinner from '../../components/spinner/Spinner';

function SetAvatar() {
  const navigate = useNavigate();
  const [avatars, setAvatars] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState<number>();

  const api = `https://api.multiavatar.com/${
    import.meta.env.VITE_MULTIAVATAR_KEY
  }`;

  const toastOptions: ToastOptions = {
    position: 'bottom-right',
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: 'dark'
  };

  const setProfilePicture = async () => {
    if (selectedAvatar === undefined) {
      toast.error('Selecciona un avatar', toastOptions);
    } else {
        const token = await (localStorage.getitem('token') && JSON.parse(localStorage.getItem('token')))
    }
  };

  useEffect(() => {
    console.log('entro en el useEffect');
    const getAvatars = async () => {
      console.log('entro en el async');
      const data: string[] = [];
      console.log(data);
      for (let i = 0; i < 4; i++) {
        const image = await axios.get(
          `${api}/${Math.round(Math.random() * 1000)}`
        );
        console.log('Esto es image', image);
        const buffer = new Buffer(image.data);
        data.push(buffer.toString('base64'));
      }
      setAvatars(data);
    };
    if (avatars.length < 4) {
      getAvatars().then(() => setIsLoading(true));
    }
  }, []);

  return (
    <>
      <Container>
        <div className="tittle-container">
          <h1>Selecciona un avatar para tu perfil</h1>
        </div>
        <div className="avatars">
          {isLoading ? (
            avatars.map((avatar, index) => {
              return (
                <div
                  className={`avatar ${
                    selectedAvatar === index ? 'selected' : ''
                  }`}
                >
                  <img
                    src={`data:image/svg+xml;base64,${avatar}`}
                    alt="avatar"
                    key={avatar}
                    onClick={() => setSelectedAvatar(index)}
                  />
                </div>
              );
            })
          ) : (
            <Spinner />
          )}
        </div>
        <button className="submit-btn" onClick={() => setProfilePicture()}>
          Guardar Avatar
        </button>
        <ToastContainer />
      </Container>
      )
    </>
  );
}

export default SetAvatar;
