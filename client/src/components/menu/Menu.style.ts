import styled from 'styled-components';

export const MenuContainer = styled.div`
  position: relative;
  display: inline-block;
  :hover {
    display: block;
  }
`;

export const MenuButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.colors.primary100};
  border: none;
  cursor: pointer;
  svg {
    font-size: 1.3rem;
    color: ${(props) => props.theme.colors.text[1]};
  }
`;

export const DropdownMenu = styled.ul`
  position: absolute;
  display: flex;
  align-items: left;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem 2rem;
  top: 2.5rem;
  right: 1rem;
  z-index: 1;
  border-radius: 1rem;
  border-top-right-radius: 0;
  background-color: ${(props) => props.theme.colors.background[1]};
`;

export const MenuItem = styled.li`
  cursor: pointer;
  list-style-type: none;
  padding: 0rem 1rem;
  font-size: 1.5rem;
  :hover {
    color: ${(props) => props.theme.colors.primary100};
  }
`;
