import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-rows: 5rem auto 4rem;
  gap: 0.1rem;
  overflow: hidden;
  .chat-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    background-color: ${(props) => props.theme.colors.background[1]};
    @media screen and (max-width: 720px) {
      width: 95vw;
    }
    .user-details {
      display: flex;
      align-items: center;
      .avatar {
        img {
          height: 2.5rem;
          margin-right: 0.3rem;
        }
      }
      .user-name {
        h3 {
          color: ${(props) => props.theme.colors.text[1]};
        }
      }
    }
  }
  .chat-messages {
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow: auto;
    background-color: ${(props) => props.theme.colors.background[2]};
    &::-webkit-scrollbar {
      width: 0.2rem;
      &-thumb {
        background-color: ${(props) => props.theme.colors.text[3]};
        width: 0.1rem;
        border-radius: 1rem;
      }
    }
    .message {
      display: flex;
      align-items: center;
      .content {
        max-width: 70%;
        overflow-wrap: break-word;
        padding: 1rem;
        font-size: 1.1rem;
        border-radius: 1rem;
        color: ${(props) => props.theme.colors.text[1]};
      }
    }
    .sended {
      justify-content: flex-end;
      .content {
        padding: 0.5rem 0.8rem;
        background-color: ${(props) => props.theme.colors.secondary40};
        font-size: medium;
        border-radius: 0.8rem;
        border-bottom-right-radius: 0;
        min-height: 2rem;
      }
    }
    .received {
      justify-content: flex-start;
      .content {
        padding: 0.5rem 0.8rem;
        background-color: ${(props) => props.theme.colors.secondary80};
        font-size: medium;
        border-radius: 0.8rem;
        border-top-left-radius: 0;
      }
    }
  }
  @media (max-width: 720px) {
    grid-template-rows: 3rem calc(100vh - 15rem) 3rem;
  }
`;
