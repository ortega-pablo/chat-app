import React, { useState } from 'react';
import Picker, { EmojiClickData } from 'emoji-picker-react';
import { IoMdSend } from 'react-icons/io';
import { BsEmojiSmileFill } from 'react-icons/bs';
import { InputContainer } from './ChatInput.style';

type props = {
  handleSendMessage: (message: string) => Promise<void>;
};

function ChatInput({ handleSendMessage }: props) {
  const [showEmojiPicker, setShowEmojiPicker] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  const handleEmojiPickerHideShow = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleEmojiClick = (emojiObject: EmojiClickData, event: MouseEvent) => {
    let msg = message;
    msg += emojiObject.emoji;
    setMessage(msg);
  };

  const sendChat = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (message.length > 0) {
      handleSendMessage(message);
      setMessage('');
    }
  };
  return (
    <InputContainer>
      <div className="button-container">
        <div className="emoji">
          <BsEmojiSmileFill onClick={handleEmojiPickerHideShow} />
          {showEmojiPicker && <Picker onEmojiClick={handleEmojiClick} />}
        </div>
      </div>
      <form className="input-container" onSubmit={(event) => sendChat(event)}>
        <input
          type="text"
          placeholder="Escribe tu mensaje aquí"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <button className="submit">
          <IoMdSend />
        </button>
      </form>
    </InputContainer>
  );
}

export default ChatInput;
