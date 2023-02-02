import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-color: ${(props) => props.theme.colors.background[3]};
`;

export const ProfileBox = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20rem;
  gap: 2rem;
  background-color: ${(props) => props.theme.colors.background[1]};
  border-radius: 2rem;
  padding: 3rem 3rem;
  .skip {
    cursor: pointer;
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors.text[3]};
    :hover {
      color: ${(props) => props.theme.colors.text[1]};
      scale: 1.25;
    }
  }
  .brand {
    display: flex;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    img {
      height: 5rem;
    }
    h1 {
      color: ${(props) => props.theme.colors.text[1]};
      text-transform: uppercase;
      font-size: xx-large;
    }
  }

  .tittle {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-size: 1rem;
    h4 {
      padding-top: 0.5rem;
      color: ${(props) => props.theme.colors.text[1]};
    }
    span {
      color: ${(props) => props.theme.colors.text[3]};
    }
  }

  .avatar {
    img {
      height: 6rem;
      margin-right: 0.3rem;
    }
  }

  button {
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
