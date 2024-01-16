import styled from "@emotion/styled";

export const ChatContainer = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.gray[200]};
  > div:first-of-type {
    border-top: 2px solid ${({ theme }) => theme.colors.gray[100]};
  }
`;
