import styled from "@emotion/styled";

export const ChatNotice = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.gray[600]};
  ${({ theme }) => theme.text.body3};

  margin: 10px 0;
  border-radius: 38px;
  background-color: ${({ theme }) => theme.colors.gray[200]};
`;
export const HightLight = styled.span`
  color: ${({ theme }) => theme.colors.gray[900]};
`;

export const Chat = styled.div`
  display: flex;
  gap: 9px;
  align-items: flex-end;
  margin: 10px 0 20px;

  &.right {
    justify-content: flex-end;
  }
`;

export const Content = styled.div`
  background-color: ${({ theme }) => theme.colors.gray[200]};
  padding: 7px 8px;
  border-radius: 0px 10px 10px 10px;
  color: ${({ theme }) => theme.colors.gray[900]};
  max-width: 80%;

  ${({ theme }) => theme.text.button2};

  &.right {
    border-radius: 10px 0px 10px 10px;
    background-color: ${({ theme }) => theme.colors.blue[200]};
    color: #fff;
  }
`;

export const Time = styled.span`
  color: ${({ theme }) => theme.colors.gray[600]};
  ${({ theme }) => theme.text.caption1};
`;
