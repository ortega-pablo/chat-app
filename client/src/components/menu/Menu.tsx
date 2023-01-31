import React, { useState } from 'react';
import { BiDotsVerticalRounded, BiX } from 'react-icons/bi';
import { MenuContainer } from './Menu.style';

function Menu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleChangeMenuOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <MenuContainer onClick={handleChangeMenuOpen}>
      {isOpen === true ? <BiX /> : <BiDotsVerticalRounded />}
    </MenuContainer>
  );
}

export default Menu;
