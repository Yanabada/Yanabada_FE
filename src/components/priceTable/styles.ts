import styled from "@emotion/styled";

export const PriceTitle = styled.p`
  ${({ theme }) => theme.text.subtitle5};
  color: ${({ theme }) => theme.colors.gray[900]};

  margin-bottom: 16px;

  span {
    color: ${({ theme }) => theme.colors.pink[200]};
  }
`;

export const PriceInner = styled.div`
  background-color: #fff;
  margin-bottom: 16px;
`;

export const PriceInfoBox = styled.div`
  background-color: white;
  .info-box {
    &__detail {
      display: flex;
      gap: 16px;
      .img-bx {
        display: block;
        width: 80px;

        position: relative;
        overflow: hidden;
        border-radius: 5px;
        img {
          display: block;
          position: absolute;
          top: 50%;
          left: 50%;
          width: auto;
          height: auto;
          min-width: 1000%;
          min-height: 1000%;
          max-width: none;
          max-height: none;
          transform: translate(-50%, -50%) scale(0.1);
        }
        &:after {
          content: "";
          display: block;
          padding-bottom: 105%;
        }
      }
      .txt-bx {
        .number {
          ${({ theme }) => theme.text.overline};
          color: ${({ theme }) => theme.colors.gray[600]};

          margin-bottom: 6px;
        }
        .tit {
          ${({ theme }) => theme.text.button1};
          color: ${({ theme }) => theme.colors.gray[900]};
        }
        .room {
          ${({ theme }) => theme.text.caption1};
          color: ${({ theme }) => theme.colors.gray[700]};

          margin-bottom: 6px;
        }
        .date {
          ${({ theme }) => theme.text.body3};
          color: ${({ theme }) => theme.colors.gray[700]};
        }
      }
    }
  }
`;

export const PriceTable = styled.div`
  display: flex;
  gap: 7px;
`;

export const PriceTableData = styled.div`
  width: 100%;
  overflow: hidden;

  text-align: center;

  background-color: white;

  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: 5px;
  .tit {
    ${({ theme }) => theme.text.caption1};
    width: 100%;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.colors.gray[100]};
    padding: 6px;
    button {
      padding: 0 2px;
    }
    > svg {
      font-size: 18px;
      margin-bottom: 3px;
    }
  }
  .price {
    ${({ theme }) => theme.text.button2};
    padding: 6px;
    span {
      ${({ theme }) => theme.text.button1};
    }
  }
  &.highlight {
    .tit {
      background-color: #fdf4f4;
      color: ${(props) => props.theme.colors.orange[200]};
    }
    .price {
      color: ${(props) => props.theme.colors.orange[200]};
    }
    button > svg {
      color: ${(props) => props.theme.colors.orange[200]};
    }
  }
`;

export const PolicyInner = styled.div`
  text-align: left;
  padding: 16px;
`;

export const PriceSpace = styled.div`
  height: 16px;
`;
