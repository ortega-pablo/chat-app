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
import ChatAppLogo from '../../assets/ChatAppLogo.png';
import { TabPanel, useTabs } from 'react-headless-tabs';
import { TabSelector } from './TabSelector';
import Logout from '../../components/logout/Logout';
import SwitchTheme from '../../components/switch/SwitchTheme';

type props = {
  changeTheme(): void;
};
//const socket = io(host);
function Chat({ changeTheme }: props) {
  const navigate = useNavigate();
  const socketClient = useRef<SocketIOClient.Socket>();
  const [contacts, setContacts] = useState<UserInterface[]>([]);
  const [currentUser, setCurrentUser] = useState<UserInterface>();
  const [currentChat, setCurrentChat] = useState<UserInterface | undefined>(
    undefined
  );

  const [selectedTab, setSelectedTab] = useTabs(['chat', 'contacts']);

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

  const getContacts = async (id: string) => {
    const { data } = await axios.get(`${getAllUsersRoute}/${id}`);
    setContacts(data.users);
  };

  const handleChatChange = (chat: UserInterface) => {
    setCurrentChat(chat);
    setSelectedTab('chat');
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
          changeTheme={changeTheme}
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
      <div className="container-mobile">
        <div className="brand">
          <div>
            <img src={ChatAppLogo} alt="Logo Chat App" />
            <h3>Chat App</h3>
          </div>
          <div className="switch">
            <SwitchTheme changeTheme={changeTheme} />
          </div>
          <Logout />
        </div>
        <div className="tab-headers">
          <TabSelector
            isActive={selectedTab === 'contacts'}
            onClick={() => setSelectedTab('contacts')}
          >
            Contactos
          </TabSelector>
          <TabSelector
            isActive={selectedTab === 'chat'}
            onClick={() => setSelectedTab('chat')}
          >
            Chat
          </TabSelector>
        </div>
        <div className="tab-content">
          <TabPanel hidden={selectedTab !== 'contacts'}>
            <Contacts
              contacts={contacts}
              currentUser={currentUser}
              changeChat={handleChatChange}
              changeTheme={changeTheme}
            />
          </TabPanel>
          <TabPanel hidden={selectedTab !== 'chat'}>
            {currentChat === undefined ? (
              <Welcome currentUser={currentUser} />
            ) : (
              <CurrentChat
                currentChat={currentChat}
                currentUser={currentUser}
                socketClient={socketClient}
              ></CurrentChat>
            )}
          </TabPanel>
        </div>
      </div>
    </ChatContainer>
  );
}

export default Chat;
