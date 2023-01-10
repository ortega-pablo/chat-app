import styled from 'styled-components';

export const InputContainer = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 5% 95%;
  background-color: #080420;
  padding: 0 2rem;
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    padding: 0 1rem;
    gap: 1rem;
  }
  .button-container {
    display: flex;
    align-items: center;
    color: white;
    gap: 1rem;
    .emoji {
      position: relative;
      svg {
        font-size: 1.5rem;
        color: #ffc228;
        cursor: pointer;
      }
      .EmojiPickerReact {
        position: absolute;
        top: -30rem;
        background-color: #131324;
        box-shadow: 0 5px 10px #1caee780;
        border-color: #1caee780;
        .epr-body::-webkit-scrollbar {
          background-color: #131324;
          width: 5px;
          &-thumb {
            background-color: #1caee7;
          }
        }
        .epr-category-nav {
        }
        .epr-emoji-category-label {
          background-color: #131324;
          border-bottom: 2px solid white;
        }
        .epr-search {
          background-color: transparent;
          border-color: #1caee780;
        }
      }
    }
  }
  .input-container {
    width: 100%;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    gap: 2rem;
    background-color: #ffffff40;
    input {
      width: 90%;
      height: 60%;
      background-color: transparent;
      color: #d1d1d1;
      border: none;
      padding-left: 1rem;
      font-size: 1.2rem;
      &::selection {
        background-color: #9a86f3;
      }
      &:focus {
        outline: none;
      }
    }
    button {
      padding: 0.3rem 2rem;
      border-radius: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #1caee7;
      border: none;
      @media screen and (min-width: 720px) and (max-width: 1080px) {
        padding: 0.3rem 1rem;
        svg {
          font-size: 1rem;
        }
      }
      svg {
        font-size: 2rem;
        color: #d1d1d1;
      }
    }
  }
`;
