import styled from "@emotion/styled";

export const ConfirmBlank = styled.div`
  height: 16px;
`;

export const InnerBlank = styled.div`
  height: 46px;
`;

export const ConfirmBox = styled.div`
  .inner {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 10px;

    .name {
      ${({ theme }) => theme.text.body2};
      color: ${({ theme }) => theme.colors.gray[600]};

      span {
        color: ${({ theme }) => theme.colors.pink[100]};
      }
    }
    .value {
      ${({ theme }) => theme.text.subtitle4};
      color: ${({ theme }) => theme.colors.gray[600]};
      font-weight: bold;

      .text-black {
        color: ${({ theme }) => theme.colors.gray[900]};
      }

      .text-blue {
        color: ${({ theme }) => theme.colors.blue[200]};
      }
    }
  }
  .stripe {
    width: 100%;

    margin-bottom: 10px;

    border-style: dashed;
    border-width: 1px;
    border-color: #ddd;
  }
`;

export const ConfirmWrapper = styled.div`
  display: flex;

  margin-left: -4px;
  margin-right: -4px;

  > div {
    flex: 1 0 50%;
    padding: 0 4px;
  }
`;

export const SelectButton = styled.p`
  color: ${({ theme }) => theme.colors.gray[600]};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  height: 28px;
  background: ${({ theme }) => theme.colors.gray[100]};

  border: 1px solid ${({ theme }) => theme.colors.gray[500]};
  border-radius: 5px;

  &.selected {
    color: white;

    background: ${({ theme }) => theme.colors.blue[200]};

    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.colors.blue[200]};
  }
`;

export const ConfirmInner = styled.div`
  padding-top: 8px;
  margin-left: -4px;
  margin-right: -4px;

  display: flex;

  .inner {
    flex: 1 0 50%;

    padding: 0 4px;
  }

  .calc-box {
    width: 100%;

    padding: 10px 20px;
    box-shadow: ${({ theme }) => theme.shadows[3]};

    border: 1px solid ${(props) => props.theme.colors.gray[100]};
  }

  .tit {
    ${({ theme }) => theme.text.body2};

    &.no-text {
      color: ${(props) => props.theme.colors.gray[600]};
      text-align: center;

      width: 100%;
      height: 100%;

      display: inline-flex;
      justify-content: center;
      align-items: center;
    }
  }

  .discount {
    ${({ theme }) => theme.text.body2};
    color: ${(props) => props.theme.colors.gray[600]};

    span {
      text-decoration: line-through;
    }
  }

  .inner {
    ${({ theme }) => theme.text.subtitle4};

    display: flex;
    gap: 5px;

    .percentage {
      &.text-blue {
        color: ${(props) => props.theme.colors.blue[200]};
      }
      &.text-orange {
        color: ${(props) => props.theme.colors.orange[200]};
      }
    }
  }
`;
