import styled from 'styled-components';

export const InputContainer = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 10% 90%;
  background-color: ${(props) => props.theme.colors.background[1]};
  padding: 0 2rem;
  .button-container {
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.colors.text[1]};
    gap: 1rem;
    .emoji {
      position: relative;
      svg {
        font-size: 1.5rem;
        color: ${(props) => props.theme.colors.smile};
        cursor: pointer;
      }
      .EmojiPickerReact {
        position: absolute;
        top: -30rem;
        background-color: ${(props) => props.theme.colors.background[1]};
        box-shadow: 0 5px 10px ${(props) => props.theme.colors.primary80};
        border-color: ${(props) => props.theme.colors.primary80};
        .epr-body::-webkit-scrollbar {
          background-color: ${(props) => props.theme.colors.background[1]};
          width: 5px;
          &-thumb {
            background-color: ${(props) => props.theme.colors.primary100};
          }
        }
        .epr-category-nav {
        }
        .epr-emoji-category-label {
          background-color: ${(props) => props.theme.colors.background[1]};
          border-bottom: 2px solid white;
        }
        .epr-search {
          background-color: transparent;
          border-color: ${(props) => props.theme.colors.primary80};
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
    background-color: ${(props) => props.theme.colors.background[3]};
    input {
      width: 90%;
      height: 60%;
      background-color: transparent;
      color: ${(props) => props.theme.colors.text[1]};
      border: none;
      padding-left: 1rem;
      font-size: 1.2rem;
      &::selection {
        background-color: ${(props) => props.theme.colors.primary80};
      }
      &:focus {
        outline: none;
      }
    }
    button {
      padding: 0.1rem 1rem;
      border-radius: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${(props) => props.theme.colors.primary100};
      border: none;
      cursor: pointer;
      svg {
        font-size: 2rem;
        color: ${(props) => props.theme.colors.text[1]};
      }
    }
  }
`;
