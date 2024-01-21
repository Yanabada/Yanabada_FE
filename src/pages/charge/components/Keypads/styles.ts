import styled from "@emotion/styled";

export const KeyPadWrapper = styled.div`
  width: 100%;

  position: absolute;
  bottom: 0;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
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
