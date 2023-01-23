import React, { useContext } from 'react';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { SwitchContainer } from './switchTheme.style';

type props = {
  changeTheme(): void;
};
function SwitchTheme({ changeTheme }: props) {
  const { colors, title } = useContext(ThemeContext);
  return (
    <SwitchContainer>
      <BsFillSunFill />
      <Switch
        onChange={changeTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={4}
        width={30}
        handleDiameter={12}
        onColor={colors.secondary100}
        offColor={colors.primary100}
      />
      <BsFillMoonFill />
    </SwitchContainer>
  );
}

export default SwitchTheme;
