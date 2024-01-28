import styled from "@emotion/styled";

interface ContainerProp {
  status: string;
}

export const ChatListContainer = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.gray[200]};
  margin-bottom: 56px;
`;

export const ChatContainer = styled.div<ContainerProp>`
  background-color: #fff;
  padding: 6px 10px 0;
  z-index: 1;
  padding-bottom: 65px;

  padding-top: ${({ status }) => (status === "ON_SALE" ? "123px" : "83px")};
`;
