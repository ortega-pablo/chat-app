import styled from 'styled-components';

export const SwitchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.colors.text[2]};
  width: 80px;
`;
