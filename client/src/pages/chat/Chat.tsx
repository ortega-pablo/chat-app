import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Contacts from '../../components/contacts/Contacts';
import Welcome from '../../components/welcome/Welcome';
import {
  currentUserRoute,
  decryptTokenRoute,
  getAllUsersRoute
} from '../../utils/APIRoutes';
import { UserInterface } from '../../utils/intefaces';
import { ChatContainer } from './Chat.style';

function Chat() {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState<UserInterface[]>([]);
  const [currentUser, setCurrentUser] = useState<UserInterface>();
  const [currentChat, setCurrentChat] = useState<UserInterface | undefined>(
    undefined
  );
  const token = localStorage.getItem('token');

  const getCurrentUser = async (token: string) => {
    console.log('entro al get current');
    const config = {
      headers: {
        Authorization: 'Bearer ' + token
      }
    };
    const user = await axios.post(decryptTokenRoute, {}, config);
    const { data } = await axios.get(
      `${currentUserRoute}/${user.data.user.id}`
    );
    setCurrentUser(data.user);
    console.log('Este es el current seteado: ', currentUser);
  };

  const getContacts = async (id: string) => {
    console.log('entro al get contacts');
    const { data } = await axios.get(`${getAllUsersRoute}/${id}`);
    setContacts(data.users);
  };

  const handleChatChange = (chat: UserInterface) => {
    console.log('Entro al handle de chat change');
    setCurrentChat(chat);
    console.log(currentChat);
  };

  useEffect(() => {
    if (!token) {
      navigate('/login');
    } else {
      getCurrentUser(token);
    }
  }, []);
  useEffect(() => {
    if (currentUser) {
      if (currentUser.avatarImage === '') {
        navigate('/setAvatar');
      } else {
        getContacts(currentUser._id);
        console.log('Este es el contacts', contacts);
      }
    }
    console.log('No tengo current');
  }, [currentUser]);
  return (
    <ChatContainer>
      <div className="container">
        <Contacts
          contacts={contacts}
          currentUser={currentUser}
          changeChat={handleChatChange}
        />
        <Welcome currentUser={currentUser} />
      </div>
    </ChatContainer>
  );
}

export default Chat;
