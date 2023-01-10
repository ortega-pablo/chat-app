import React from 'react';
import { UserInterface } from '../../utils/intefaces';
import Logout from '../logout/Logout';
import { Container } from './CurrentChat.style';

type props = {
  currentChat: UserInterface | undefined;
};

function CurrentChat({ currentChat }: props) {
  return (
    <Container>
      <div className="chat-header">
        <div className="user-details">
          <div className="avatar">
            <img
              src={`data:image/svg+xml;base64,${currentChat?.avatarImage}`}
              alt="avatar"
            />
          </div>
          <div className="user-name">
            <h3>{currentChat?.userName}</h3>
          </div>
        </div>
        <Logout />
      </div>
      <div className="chat-messages"></div>
      <div className="chat-input"></div>
    </Container>
  );
}

export default CurrentChat;
