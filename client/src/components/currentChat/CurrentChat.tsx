import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { getMessagesRoute, sendMessageRoute } from '../../utils/APIRoutes';
import { MessagesInterface, UserInterface } from '../../utils/intefaces';
import ChatInput from '../chatInput/ChatInput';
import Logout from '../logout/Logout';
import { Container } from './CurrentChat.style';

type props = {
  currentChat: UserInterface | undefined;
  currentUser: UserInterface | undefined;
  handleSocketSend: (
    from: string | undefined,
    to: string | undefined,
    msg: string
  ) => void;
};

function CurrentChat({ currentChat, currentUser, handleSocketSend }: props) {
  const [messages, setMessages] = useState<MessagesInterface[]>([]);

  const handleSendMessage = async (msg: string) => {
    handleSocketSend(currentUser?._id, currentChat?._id, msg);

    await axios.post(sendMessageRoute, {
      from: currentUser?._id,
      to: currentChat?._id,
      message: msg
    });

    const msgs = [...messages];
    msgs.push({ fromSelf: true, message: msg });
    setMessages(msgs);
  };

  useEffect(() => {
    const getMessages = async () => {
      const response = await axios.post(getMessagesRoute, {
        from: currentUser?._id,
        to: currentChat?._id
      });
      return setMessages(response.data.projectMessages);
    };
    getMessages();
  }, [currentChat]);
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
        <div className="chat-messages">
          {messages.map((message, index: number) => {
            return (
              <div key={index}>
                <div
                  className={`message ${
                    message.fromSelf ? 'sended' : 'recieved'
                  }`}
                >
                  <div className="content">
                    <p>{message.message}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <ChatInput handleSendMessage={handleSendMessage} />
    </Container>
  );
}

export default CurrentChat;
