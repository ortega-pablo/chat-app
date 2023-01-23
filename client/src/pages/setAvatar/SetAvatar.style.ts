import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  gap: 3rem;
  background-color: ${(props) => props.theme.colors.background[3]};
  height: 100vh;
  width: 100vw;
  .loader {
    max-inline-size: 100%;
  }
  .tittle-container {
    h1 {
      color: ${(props) => props.theme.colors.text[2]};
    }
  }
  .avatars {
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    .avatar {
      border: 0.4rem solid transparent;
      padding: 0.4rem;
      border-radius: 5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.5s ease-in-out;
      img {
        height: 6rem;
        transition: 0.5s ease-in-out;
      }
    }
    .selected {
      border: 0.4rem solid ${(props) => props.theme.colors.primary100};
    }
  }
  .submit-btn {
    background-color: ${(props) => props.theme.colors.secondary80};
    color: ${(props) => props.theme.colors.text[1]};
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    text-transform: uppercase;
    &:hover {
      background-color: ${(props) => props.theme.colors.secondary100};
    }
  }
`;
