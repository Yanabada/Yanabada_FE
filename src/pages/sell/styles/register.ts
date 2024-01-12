import styled from "@emotion/styled";

export const RegisterWrap = styled.div`
  background-color: ${({ theme }) => theme.colors.gray[200]};

  padding-bottom: 56px;
`;

export const RegisterInner = styled.div`
  padding: 14px;
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
  }
  .price {
    ${({ theme }) => theme.text.button2};
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
