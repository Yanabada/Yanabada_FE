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

  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.03);

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

export const KeyPadWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 2px;

  background: rgb(58, 200, 244);
  background: linear-gradient(90deg, rgba(58, 200, 244, 1) 0%, rgba(94, 155, 243, 1) 100%);

  > div {
    width: 100%;

    display: flex;
    gap: 2px;
  }
`;

export const KeyPad = styled.div`
  color: white;
  background: ${({ theme }) => theme.colors.blue[200]};
  box-shadow: ${({ theme }) => theme.shadows[3]};

  display: flex;
  flex: 1 0 0;
  align-self: stretch;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-height: 54px;
  padding: 8px 12px;
`;
