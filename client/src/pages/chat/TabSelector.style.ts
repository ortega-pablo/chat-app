import styled from 'styled-components';

export const TabContainer = styled.div`
  .inactive {
    align-items: center;
    padding: 0.5rem 2rem;
    color: ${(props) => props.theme.colors.text[3]};
    border: none;
    background-color: transparent;
    cursor: pointer;
    :hover {
      color: ${(props) => props.theme.colors.text[1]};
    }
  }
  .active {
    align-items: center;
    padding: 0.5rem 2rem;
    border: none;
    border-bottom: 0.2rem solid ${(props) => props.theme.colors.primary100};
    color: ${(props) => props.theme.colors.primary100};
    background-color: ${(props) => props.theme.colors.background[2]};
    cursor: pointer;
  }
`;
