import styled from "@emotion/styled";

export const RegisterWrap = styled.div`
  background-color: ${({ theme }) => theme.colors.gray[200]};

  padding-bottom: 56px;
`;

export const RegisterInner = styled.div`
  padding: 32px 14px;
  background-color: #fff;
`;

export const RegisterTitle = styled.p`
  ${({ theme }) => theme.text.subtitle3};

  margin-bottom: 14px;
`;

export const RegisterSubTitle = styled.p`
  ${({ theme }) => theme.text.subtitle5};

  margin-bottom: 11px;
  span {
    color: ${(props) => props.theme.colors.pink[200]};
  }
`;

export const RegisterDes = styled.p`
  ${({ theme }) => theme.text.body2};
  color: ${(props) => props.theme.colors.gray[700]};

  margin-bottom: 12px;
`;

export const SelectWrap = styled.div`
  display: flex;
  margin-left: -4px;
  margin-right: -4px;
  > div {
    flex: 1 0 50%;
    padding: 0 4px;
  }
`;

export const RefundText = styled.div`
  color: ${(props) => props.theme.colors.gray[700]};
  text-align: right;

  margin-top: 12px;
  .text {
    ${({ theme }) => theme.text.body2};

    display: inline-flex;
    align-items: center;
    gap: 5px;

    > svg {
      margin-bottom: 2px;
    }
  }
  .price {
    ${({ theme }) => theme.text.button2};
    span {
      font-weight: bold;
    }
  }
`;

export const RegisterComment = styled.textarea`
  width: 100%;
  min-height: 112px;

  padding: 8px;

  background-color: ${(props) => props.theme.colors.gray[200]};
  color: ${(props) => props.theme.colors.gray[600]};

  border: 1px solid #ddd;
  border-radius: 5px;
`;

export const CalendarInner = styled.div`
  padding: 14px;
`;

export const CalcInner = styled.div`
  border-top: 1px solid #ddd;

  padding-top: 8px;

  display: flex;
  .calc-box {
    flex: 1 0 50%;
    padding: 10px 20px;

    &__left {
      background-color: #e6eef9;
      border-radius: 70px 0px 0px 70px;
    }
    &__right {
      background-color: #f2f2f2;
      border-radius: 0px 70px 70px 0px;
    }
  }

  .tit {
    ${({ theme }) => theme.text.body2};

    &.no-text {
      color: ${(props) => props.theme.colors.gray[600]};

      width: 100%;
      height: 100%;

      display: inline-flex;
      justify-content: center;
      align-items: center;
      text-align: center;
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
    .price {
    }
  }
`;

export const PriceTable = styled.div`
  display: flex;
  gap: 7px;
`;

export const PriceTableData = styled.div`
  text-align: center;

  width: 100%;
  background-color: white;

  border: 5px;
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};

  .tit {
    background-color: ${({ theme }) => theme.colors.gray[300]};
  }
  .price {
    ${({ theme }) => theme.text.button1};
  }
`;

export const CalcButton = styled.button`
  color: ${({ theme }) => theme.colors.gray[700]};
  background-color: ${({ theme }) => theme.colors.gray[100]};

  border-radius: 30px;
  padding: 7px 12px;

  display: inline-flex;
  align-items: center;
  gap: 4px;
`;

export const ButtonWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  margin-top: 12px;
`;

export const PriceInput = styled.input`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.gray[900]};

  width: 100%;

  border: none;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray[100]};
  outline: none;

  padding-block: 0.5rem;

  background-color: transparent;
`;

export const ErrorMessage = styled.p`
  ${({ theme }) => theme.text.body2};
  color: ${(props) => props.theme.colors.pink[200]};
`;

export const AlertMessage = styled.p`
  ${({ theme }) => theme.text.body2};
  color: ${(props) => props.theme.colors.orange[200]};
`;

export const ConfirmWrap = styled.div`
  border-top: 1px solid #ddd;
  padding: 16px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px -1px 2px 0px;

  text-align: center;
  .des {
    color: ${(props) => props.theme.colors.gray[700]};
    margin-bottom: 12px;
    a {
      color: #0751c3;
      text-decoration: underline;
    }
  }
`;

export const SmallSpace = styled.div`
  height: 16px;
`;
