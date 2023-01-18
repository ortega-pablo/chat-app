import axios from 'axios';
import React, { SetStateAction, useEffect, useRef, useState } from 'react';
import { getMessagesRoute, sendMessageRoute } from '../../config/APIRoutes';
import EVENTS from '../../config/events';
import { MessagesInterface, UserInterface } from '../../config/intefaces';
import ChatInput from '../chatInput/ChatInput';
import Logout from '../logout/Logout';
import { Container } from './CurrentChat.style';
import { v4 as uuidv4 } from 'uuid';

type props = {
  currentChat: UserInterface | undefined;
  currentUser: UserInterface | undefined;
  socketClient: React.MutableRefObject<SocketIOClient.Socket | undefined>;
};

function CurrentChat({ currentChat, currentUser, socketClient }: props) {
  const [messages, setMessages] = useState<
    {
      fromSelf: boolean;
      message: string;
    }[]
  >([]);
  const scrollRef = useRef<HTMLInputElement | null>(null);
  const [arrivalMessage, setArrivalMessage] = useState<{
    fromSelf: boolean;
    message: string;
  }>();

  const getMessages = async () => {
    const response = await axios.post(getMessagesRoute, {
      from: currentUser?._id,
      to: currentChat?._id
    });
    return setMessages(response.data.projectMessages);
  };

  const handleSendMessage = async (msg: string) => {
    //handleSocketSend(currentUser?._id, currentChat?._id, msg);

    socketClient?.current?.emit(EVENTS.SEND, {
      to: currentChat?._id,
      from: currentUser?._id,
      message: msg
    });

    await axios.post(sendMessageRoute, {
      from: currentUser?._id,
      to: currentChat?._id,
      message: msg
    });

    const msgs = [...messages];
    msgs.push({
      fromSelf: true,
      message: msg
    });
    setMessages(msgs);
  };

  useEffect(() => {
    if (currentChat) {
      getMessages();
    }
  }, [currentChat]);

  useEffect(() => {
    if (socketClient.current) {
      socketClient.current.on(EVENTS.RECEIVE, (msg: string) => {
        const arrival = {
          fromSelf: false,
          message: msg
        };
        console.log('El tipo de arrivalMessage es : ', typeof arrival);
        setArrivalMessage(arrival);
      });
    }
  }, []);

  useEffect(() => {
    arrivalMessage && setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

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
              <div ref={scrollRef} key={uuidv4()}>
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
