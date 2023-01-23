import React, { useEffect, useState } from 'react';
import { ContactsContainer } from './Contacts.style';
import { UserInterface } from '../../config/intefaces';
import ChatAppLogo from '../../assets/ChatAppLogo.png';
import { FaUserCircle } from 'react-icons/fa';
import SwitchTheme from '../switch/SwitchTheme';

type props = {
  contacts: UserInterface[];
  currentUser: UserInterface | undefined;
  changeChat: (chat: UserInterface) => void;
  changeTheme(): void;
};

function Contacts({ contacts, currentUser, changeChat, changeTheme }: props) {
  const [userName, setUserName] = useState<string>();
  const [userImage, setUserImage] = useState<string>();
  const [Selected, setSelected] = useState<number | undefined>(undefined);

  const handleClickCurrentChat = (index: number, contact: UserInterface) => {
    setSelected(index);
    changeChat(contact);
  };
  useEffect(() => {
    if (currentUser) {
      setUserName(currentUser.userName);
      setUserImage(currentUser.avatarImage);
    }
  }, [currentUser]);

  return (
    <>
      {userImage && userName && (
        <ContactsContainer>
          <div className="brand">
            <img src={ChatAppLogo} alt="Logo Chat App" />
            <h3>Chat App</h3>
          </div>
          <div className="contacts">
            <div className="switch">
              <SwitchTheme changeTheme={changeTheme} />
            </div>
            {contacts.map((contact, index) => {
              return (
                <div
                  className={`contact ${index === Selected ? 'selected' : ''}`}
                  key={contact._id}
                  onClick={() => handleClickCurrentChat(index, contact)}
                >
                  {contact.avatarImage ? (
                    <div className="avatar">
                      <img
                        src={`data:image/svg+xml;base64,${contact.avatarImage}`}
                        alt="avatar"
                      />
                    </div>
                  ) : (
                    <div className="avatar">
                      <FaUserCircle size={'2.5rem'} color={'grey'} />
                    </div>
                  )}
                  <div className="user-name">
                    <h3>{contact.userName}</h3>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="current-user">
            <div className="avatar">
              <img
                src={`data:image/svg+xml;base64,${userImage}`}
                alt="avatar"
              />
            </div>
            <div className="user-name">
              <h2>{userName}</h2>
            </div>
          </div>
        </ContactsContainer>
      )}
    </>
  );
}

export default Contacts;
