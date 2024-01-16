import styled from "@emotion/styled";

export const ChargeBox = styled.div`
  width: 100%;
  padding: 14px;
  background-color: white;
  box-shadow: ${({ theme }) => theme.shadows[3]};

  .tit {
    ${({ theme }) => theme.text.subtitle3};

    margin-bottom: 16px;
  }

  .inner {
    display: flex;
    justify-content: space-between;

    margin-top: 16px;
    .name {
      ${({ theme }) => theme.text.subtitle3};
      color: #a7a7a7;
    }
    .price {
      ${({ theme }) => theme.text.subtitle4};
      font-weight: bold;
      .red-text {
        color: #de2e5f;
      }
    }
    .bank {
      ${({ theme }) => theme.text.body1};
    }
  }

  .bank-number {
    text-align: right;
  }

  .stripe {
    border-top: 1px solid #ddd;
    margin-top: 16px;
  }
`;

export const ButtonWrap = styled.div`
  position: absolute;
  bottom: 14px;
  width: 100%;
  padding: 0 14px;
`;
