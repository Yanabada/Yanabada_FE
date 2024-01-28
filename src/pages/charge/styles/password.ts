import styled from "@emotion/styled";

export const ConfirmWrapper = styled.div`
  padding: 14px;
  padding-top: 38px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.gray[200]};
  height: 100%;
`;

export const ConfirmTit = styled.p`
  ${({ theme }) => theme.text.subtitle3};

  margin-top: 8px;
  margin-bottom: 18px;
`;

export const KeyWrapper = styled.div`
  position: relative;

  display: flex;
  gap: 8px;
`;

export const KeyInput = styled.p`
  width: 40px;
  height: 54px;
  padding: 17px 12px 8px 12px;

  color: white;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  background-color: white;

  box-shadow: ${({ theme }) => theme.shadows[3]};

  &.active {
    background: ${({ theme }) => theme.colors.blue[200]};
  }
`;

export const AlertMessage = styled.p`
  color: ${({ theme }) => theme.colors.pink[200]};
  text-align: center;
  line-height: 23px;

  width: 100%;

  position: absolute;
  bottom: -65px;
  left: 50%;
  transform: translateX(-50%);
`;
