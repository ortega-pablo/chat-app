import React, { useState } from 'react';
import { BiDotsVerticalRounded, BiX } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
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
    await Swal.fire({
      title: '¿Seguro que quieres salir?',
      showCancelButton: true,
      confirmButtonText: 'Salir'
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        localStorage.clear();
        navigate('/login');
      }
    });
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
