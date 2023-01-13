import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Contacts from '../../components/contacts/Contacts';
import CurrentChat from '../../components/currentChat/CurrentChat';
import Welcome from '../../components/welcome/Welcome';
import {
  currentUserRoute,
  decryptTokenRoute,
  getAllUsersRoute,
  host
} from '../../utils/APIRoutes';
import { UserInterface } from '../../utils/intefaces';
import { ChatContainer } from './Chat.style';
import io from 'socket.io-client';

function Chat() {
  const navigate = useNavigate();
  const socketClient = useRef<SocketIOClient.Socket>();
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

  const handleSocketSend = (
    from: string | undefined,
    to: string | undefined,
    msg: string | undefined
  ) => {
    socketClient.current &&
      socketClient.current.emit('send-msg', {
        from: from,
        to: to,
        message: msg
      });
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
      socketClient.current = io(host);
      socketClient.current.emit('add-user', currentUser._id);
    }
  });
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
        {currentChat === undefined ? (
          <Welcome currentUser={currentUser} />
        ) : (
          <CurrentChat
            currentChat={currentChat}
            currentUser={currentUser}
            handleSocketSend={handleSocketSend}
          ></CurrentChat>
        )}
      </div>
    </ChatContainer>
  );
}

export default Chat;
