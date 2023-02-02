import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  form {
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
    input {
      background-color: transparent;
      padding: 1rem;
      border: 0.2rem solid ${(props) => props.theme.colors.primary40};
      border-radius: 0.4rem;
      color: ${(props) => props.theme.colors.text[1]};
      font-size: 1rem;
      &:focus {
        border: 0.2rem solid ${(props) => props.theme.colors.primary100};
        outline: none;
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
  }
`;
