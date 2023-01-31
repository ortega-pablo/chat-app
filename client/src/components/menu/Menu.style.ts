import styled from 'styled-components';

export const MenuContainer = styled.button`
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
