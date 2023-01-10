import React from 'react';
import { UserInterface } from '../../utils/intefaces';
import ChatInput from '../chatInput/ChatInput';
import Logout from '../logout/Logout';
import Messages from '../messages/Messages';
import { Container } from './CurrentChat.style';

type props = {
  currentChat: UserInterface | undefined;
};

function CurrentChat({ currentChat }: props) {
  const handleSendMessage = async (message: string) => {
    alert(message);
  };
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
      <div className="chat-messages">
        <Messages />
      </div>
      <ChatInput handleSendMessage={handleSendMessage} />
    </Container>
  );
}

export default CurrentChat;
