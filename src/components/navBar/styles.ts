import styled from "@emotion/styled";

export const BottomNavWrapper = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 56px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  user-select: none;
  color: ${({ theme }) => theme.colors.gray[600]};
  & .active {
    color: ${({ theme }) => theme.colors.blue[200]};
    > svg {
      fill: ${({ theme }) => theme.colors.blue[200]};
    }
  }
`;

export const BottomNavButton = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  gap: 5px;
`;
