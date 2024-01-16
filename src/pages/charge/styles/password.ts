import styled from "@emotion/styled";

export const ConfirmWrapper = styled.div`
  padding: 14px;
  padding-top: 38px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #f8f8f8;
  height: 100%;
`;

export const ConfirmTit = styled.p`
  ${({ theme }) => theme.text.subtitle3};

  margin-top: 8px;
  margin-bottom: 18px;
`;

export const KeyWrapper = styled.div`
  background: var(--Background_Gray, #f8f8f8);
  display: flex;
  gap: 8px;
`;

export const KeyInput = styled.p`
  color: white;

  display: flex;
  width: 40px;
  height: 54px;
  padding: 17px 12px 8px 12px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 5px;
  border: 1px solid var(--Stroke_Gray, #e6e6e6);
  background-color: white;

  /* 은은한쉐도우 */
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.03);
  &.active {
    background: var(--Yanabada-Blue, #38a3eb);
  }
`;

export const KeyPadWrapper = styled.div`
  background-color: white;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(4, 1fr);
  gap: 2px;
`;

export const KeyPad = styled.div`
  background: var(--Yanabada-Blue, #38a3eb);
  color: white;
  /* 은은한쉐도우 */
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.03);
  display: flex;
  min-height: 54px;
  padding: 8px 12px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
`;
