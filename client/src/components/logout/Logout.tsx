import React from 'react';
import { LogoutButton } from './Logout.style';
import { BiPowerOff } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();
  const handleClick = async () => {
    localStorage.clear();
    navigate('/login');
  };
  return (
    <LogoutButton onClick={handleClick}>
      <BiPowerOff />
    </LogoutButton>
  );
}

export default Logout;
