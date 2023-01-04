import styled from 'styled-components';

export const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-color: #131324;
  .brand {
    display: flex;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    img {
      height: 5rem;
    }
    h1 {
      color: #d3d0d0;
      text-transform: uppercase;
      font-size: xx-large;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    width: 20rem;
    gap: 2rem;
    background-color: #eeeeee10;
    border-radius: 2rem;
    padding: 3rem 3rem;
    input {
      background-color: transparent;
      padding: 1rem;
      border: 0.2rem solid #0a516d;
      border-radius: 0.4rem;
      color: white;
      font-size: 1rem;
      &:focus {
        border: 0.2rem solid #1caee7;
        outline: none;
      }
    }
    button {
      background-color: #8d6a9f;
      color: #d3d0d0;
      padding: 1rem 2rem;
      border: none;
      font-weight: bold;
      cursor: pointer;
      border-radius: 0.4rem;
      font-size: 1rem;
      text-transform: uppercase;
      &:hover {
        background-color: #a663cc;
      }
    }
    span {
      color: #d3d0d0;
      a {
        color: #105de2;
        text-decoration: none;
        font-weight: bold;
      }
    }
    @media only screen and (max-width: 768px) {
      max-width: 70vw;
    }
  }
`;
