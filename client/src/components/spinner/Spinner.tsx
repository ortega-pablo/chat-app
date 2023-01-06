import React from 'react';
import { SpinnerContainer } from './Spinner.style';

function Spinner() {
  return (
    <SpinnerContainer>
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </SpinnerContainer>
  );
}

export default Spinner;
