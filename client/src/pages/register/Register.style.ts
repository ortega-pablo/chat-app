import styled from 'styled-components';

export const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-color: ${(props) => props.theme.colors.background[3]};
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
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 20rem;
    gap: 2rem;
    background-color: ${(props) => props.theme.colors.background[1]};
    border-radius: 2rem;
    padding: 3rem 3rem;
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
    span {
      text-align: center;
      color: ${(props) => props.theme.colors.text[2]};
      a {
        color: ${(props) => props.theme.colors.text.link};
        text-decoration: none;
        font-weight: bold;
      }
    }
  }
`;
