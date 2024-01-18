import styled from "@emotion/styled";

export const SuccessWrap = styled.div`
  position: relative;
  height: calc(100vh - 56px);

  padding: 14px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding-bottom: 10rem;

  &.gray-bg {
    background-color: #f8f8f8;
  }
`;

export const SuccessSpace = styled.div`
  height: 34px;
`;

export const ButtonWrap = styled.div`
  width: 100%;

  padding: 0 14px;

  position: absolute;
  left: 50%;
  transform: translate(-50%);
  bottom: 14px;
`;

export const SuccessBox = styled.div`
  text-align: center;

  .tit {
    margin-top: 20px;
    margin-bottom: 16px;
    line-height: 1.3;
  }

  .des {
    ${({ theme }) => theme.text.button2};
    color: ${({ theme }) => theme.colors.gray[600]};
  }
`;
