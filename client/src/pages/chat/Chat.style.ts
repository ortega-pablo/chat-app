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
      display: none;
    }
  }
  .logout {
    position: fixed;
    left: calc(92.5vw - 4rem);
    top: calc(7.5vh + 1.25rem);
  }
  .container-mobile {
    display: none;
    @media (max-width: 720px) {
      display: grid;
      grid-template-rows: 3rem 3rem auto;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 95vw;
      height: 95vh;
      .brand {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 95vw;
        background-color: ${(props) => props.theme.colors.background[2]};
        div {
          display: flex;
          align-items: center;
        }
        img {
          height: 2.5rem;
          margin-right: 0.3rem;
        }
        h3 {
          color: ${(props) => props.theme.colors.text[1]};
          text-transform: uppercase;
        }
      }
      .tab-headers {
        width: 100%;
        display: flex;
        border-bottom: 2px solid ${(props) => props.theme.colors.text[3]};
        justify-content: space-around;
      }
      .tab-content {
        display: flex;
        width: 100%;
        height: 100%;
        min-height: 10%;
        padding: 0.2rem;
        align-items: flex-start;
        justify-content: center;
      }
    }
  }
`;
