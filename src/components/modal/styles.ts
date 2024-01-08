import styled from "@emotion/styled";

export const ModalBg = styled.div`
  position: absolute;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`;
export const ModalWrapper = styled.div`
  position: absolute;
  z-index: 1001;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  min-width: 250px;
  max-width: 500px;
  background-color: #fff;
  border-radius: 20px;
  padding: 24px;
  text-align: center;
  text-wrap: balance;
  box-shadow: ${({ theme }) => theme.shadows[1]};

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  > button {
    flex: 1;
  }
`;

export const TitleText = styled.div`
  font-size: 17px;
  font-weight: 600;
  line-height: 25px;
`;

export const ContentText = styled.div`
  color: ${({ theme }) => theme.colors.gray[600]};
  font-size: 15px;
  font-weight: 400;
  line-height: 21px;
`;
