import styled from 'styled-components';

export const ChatContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-color: ${(props) => props.theme.colors.background[3]};
  .container {
    height: 85vh;
    width: 85vw;
    display: grid;
    grid-template-columns: 30% 70%;

    @media (max-width: 720px) {
      grid-template-columns: 100%;
    }
  }
`;
