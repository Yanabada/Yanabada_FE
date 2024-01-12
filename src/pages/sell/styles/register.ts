import styled from "@emotion/styled";

export const RegisterWrap = styled.div`
  background-color: ${({ theme }) => theme.colors.gray[200]};
`;

export const RegisterInner = styled.div`
  padding: 14px;
  background-color: #fff;
`;

export const RegisterTitle = styled.p`
  ${({ theme }) => theme.text.subtitle3};
`;

export const RegisterSubTitle = styled.p`
  ${({ theme }) => theme.text.subtitle5};
  span {
    color: ${(props) => props.theme.colors.pink[200]};
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
