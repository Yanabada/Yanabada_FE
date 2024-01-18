import styled from "@emotion/styled";

export const ChatListContainer = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.gray[200]};
`;

export const ChatContainer = styled.div`
  background-color: #fff;
  padding: 6px 10px 0;
  height: 100%;
  z-index: 1;
`;
