import React from 'react';
import { UserInterface } from '../../config/intefaces';
import Robot from '../../assets/helloRobot.gif';
import { WelcomeContainer } from './Welcome.style';

type props = {
  currentUser: UserInterface | undefined;
};

function Welcome({ currentUser }: props) {
  return (
    <WelcomeContainer>
      <img src={Robot} alt="Robot Hello" />
      <h1>
        Hola <span>{currentUser?.userName}</span> !
      </h1>
      <h3>Por favor selecciona un contacto para chatear</h3>
    </WelcomeContainer>
  );
}

export default Welcome;
