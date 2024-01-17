import styled from "@emotion/styled";

export const ChargeBox = styled.div`
  width: 100%;

  padding: 20px 14px;

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

      .text-black {
        color: #000;
      }
    }

    .price {
      ${({ theme }) => theme.text.subtitle4};
      font-weight: bold;

      .text-red {
        color: ${({ theme }) => theme.colors.pink[100]};
      }
    }

    .bank {
      ${({ theme }) => theme.text.body1};
    }
  }

  .bank-number {
    text-align: right;
    color: ${({ theme }) => theme.colors.gray[600]};
  }

  .stripe {
    margin-top: 20px;

    border-style: dashed;
    border-width: 1px;
    border-color: #ddd;
  }
`;

export const ButtonWrap = styled.div`
  width: 100%;

  position: absolute;
  bottom: 14px;

  padding: 0 14px;
`;
