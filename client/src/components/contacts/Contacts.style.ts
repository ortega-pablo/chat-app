import styled from 'styled-components';

export const ContactsContainer = styled.div`
  display: grid;
  grid-template-rows: 9% 82% 9%;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.background[1]};
  .brand {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.colors.background[2]};
    img {
      height: 2.5rem;
      margin-right: 0.3rem;
    }
    h3 {
      color: ${(props) => props.theme.colors.text[1]};
      text-transform: uppercase;
    }
  }
  .contacts {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    gap: 0.8rem;
    padding-top: 0.2rem;
    &::-webkit-scrollbar {
      width: 0.2rem;
      &-thumb {
        background-color: ${(props) => props.theme.colors.background[1]};
        width: 0.1rem;
        border-radius: 1rem;
      }
    }
    .contact {
      background-color: ${(props) => props.theme.colors.background[1]};
      max-height: 3rem;
      cursor: pointer;
      width: 90%;
      border-radius: 0.2rem;
      border-bottom: 0.15rem solid
        ${(props) => props.theme.colors.background[2]};
      padding: 0.4rem;
      display: flex;
      gap: 1rem;
      align-items: center;
      transition: 0.5s ease-in-out;
      .avatar {
        img {
          height: 2.5rem;
        }
      }
      .user-name {
        h3 {
          color: ${(props) => props.theme.colors.text[2]};
          font-size: 1rem;
        }
      }
    }
    .selected {
      background-color: ${(props) => props.theme.colors.primary40};
    }
  }
  .current-user {
    background-color: ${(props) => props.theme.colors.primary80};
    display: flex;
    justify-content: center;
    align-items: center;
    .avatar {
      img {
        height: 2.5rem;
        max-inline-size: 100%;
        margin-right: 0.3rem;
      }
    }
    .user-name {
      gap: 0.5rem;
      h2 {
        color: ${(props) => props.theme.colors.text[1]};
        font-size: 1rem;
      }
    }
  }
`;
