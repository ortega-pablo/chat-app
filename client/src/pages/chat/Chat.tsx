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
} from '../../config/APIRoutes';
import { UserInterface } from '../../config/intefaces';
import { ChatContainer } from './Chat.style';
import io from 'socket.io-client';
import EVENTS from '../../config/events';

//const socket = io(host);
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
  };

  const getContacts = async (id: string) => {
    const { data } = await axios.get(`${getAllUsersRoute}/${id}`);
    setContacts(data.users);
  };

  const handleChatChange = (chat: UserInterface) => {
    setCurrentChat(chat);
  };

  useEffect(() => {
    if (currentUser) {
      socketClient.current = io(host);
      socketClient.current.emit(EVENTS.ADD_USER, currentUser._id);
    }
  }, [currentUser]);

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
      }
    }
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
            socketClient={socketClient}
          ></CurrentChat>
        )}
      </div>
    </ChatContainer>
  );
}

export default Chat;
