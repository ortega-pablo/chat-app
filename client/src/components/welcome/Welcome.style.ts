import styled from 'styled-components';

export const WelcomeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.background[2]};
  color: ${(props) => props.theme.colors.text[1]};
  flex-direction: column;
  font-size: 1rem;
  text-align: center;
  img {
    height: 60vh;
    @media (max-width: 720px) {
      height: 30vh;
    }
  }
  span {
    color: ${(props) => props.theme.colors.primary100};
  }
`;
