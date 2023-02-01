import React, { useState } from 'react';
import { BiDotsVerticalRounded, BiX } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import SwitchTheme from '../switch/SwitchTheme';
import {
  DropdownMenu,
  MenuButton,
  MenuContainer,
  MenuItem
} from './Menu.style';

type props = {
  changeTheme(): void;
};

function Menu({ changeTheme }: props) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleChangeMenuOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleClickLogout = async () => {
    localStorage.clear();
    navigate('/login');
  };

  const hadleClickProfile = async () => {
    navigate('/profile');
  };

  return (
    <MenuContainer>
      <MenuButton onClick={handleChangeMenuOpen}>
        {isOpen ? <BiX /> : <BiDotsVerticalRounded />}
      </MenuButton>
      {isOpen && (
        <DropdownMenu>
          <MenuItem onClick={hadleClickProfile}>Perfil</MenuItem>
          <MenuItem onClick={handleClickLogout}>Logout</MenuItem>
          <MenuItem>
            <SwitchTheme changeTheme={changeTheme} />
          </MenuItem>
        </DropdownMenu>
      )}
    </MenuContainer>
  );
}

export default Menu;
