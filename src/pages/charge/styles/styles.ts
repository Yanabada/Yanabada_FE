import styled from "@emotion/styled";

export const ChargeWrapper = styled.div`
  padding: 22px 14px;
`;

export const PaySpace = styled.div`
  height: 20px;
`;

export const PayBalance = styled.div`
  padding: 20px;

  box-shadow: ${({ theme }) => theme.shadows[3]};

  display: flex;
  justify-content: space-between;

  border-radius: 120px;
  border: 1px solid ${({ theme }) => theme.colors.gray[100]};

  .text {
    ${({ theme }) => theme.text.subtitle3};

    padding-left: 8px;
  }

  .price {
    ${({ theme }) => theme.text.subtitle4};
  }

  &.product-balance {
    margin-bottom: 16px;
  }
`;

export const PayTitle = styled.p`
  ${({ theme }) => theme.text.subtitle3};

  margin-bottom: 16px;
`;

export const InputWrapper = styled.div`
  position: relative;

  .select {
    height: 40px;
    line-height: 40px;

    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.colors.gray[500]};
    border-radius: 5px;

    background: #fff;
    padding: 10px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    cursor: pointer;

    span {
      color: ${({ theme }) => theme.colors.gray[900]};
    }
  }

  .option {
    position: absolute;
    top: 38px;
    width: 100%;

    height: 40px;
    line-height: 40px;

    background-color: white;
    border: 1px solid ${({ theme }) => theme.colors.gray[500]};
    border-radius: 0 0 5px 5px;

    padding: 0 20px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    cursor: pointer;

    .inner {
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .bank {
      ${({ theme }) => theme.text.subtitle3};
      color: ${({ theme }) => theme.colors.gray[700]};
    }

    .number {
      ${({ theme }) => theme.text.caption1};
      color: ${({ theme }) => theme.colors.gray[500]};
    }
  }
`;

export const BottomInner = styled.div`
  padding: 14px;

  .tit {
    ${({ theme }) => theme.text.subtitle5};

    padding: 6px 0;
  }

  .des {
    ${({ theme }) => theme.text.body2};

    padding: 8px 0;
    padding-bottom: 20px;
  }
`;

export const ButtonInner = styled.div`
  padding-top: 16px;
  ${({ theme }) => theme.shadows[1]};
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  padding: 0 14px;

  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
`;

export const AlertBanner = styled.div`
  color: #fff;
  text-align: center;

  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 100px;
  width: 100%;

  padding: 0 20px;

  .text {
    ${({ theme }) => theme.text.subtitle6};

    background-color: #000000b2;
    border-radius: 5px;

    padding: 20px;
  }
`;
