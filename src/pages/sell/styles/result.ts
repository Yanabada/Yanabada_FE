import styled from "@emotion/styled";

export const ResultWrap = styled.div`
  position: relative;
  padding: 14px;

  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme.colors.gray[200]};

  height: calc(100vh - 112px);

  .title {
    ${({ theme }) => theme.text.subtitle5};
  }
`;

export const BaseButtonWrap = styled.div`
  width: 100%;

  padding: 0 14px;

  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 24px;
`;
