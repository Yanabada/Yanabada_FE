import styled from "@emotion/styled";

export const DetailInfoWrap = styled.div`
  background-color: ${({ theme }) => theme.colors.gray[200]};

  height: calc(100vh - 112px);
`;

export const DetailBox = styled.div`
  background-color: white;

  padding: 32px 14px;

  .title {
    ${({ theme }) => theme.text.subtitle5};

    margin-bottom: 16px;
  }

  .info-box {
    &__detail {
      display: flex;
      gap: 16px;

      .img-bx {
        display: block;
        position: relative;
        overflow: hidden;
        border-radius: 5px;
        width: 80px;

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
          padding-bottom: 128%;
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
        }

        .date {
          ${({ theme }) => theme.text.body3};
          color: ${({ theme }) => theme.colors.gray[700]};
        }

        .time {
          ${({ theme }) => theme.text.body2};
          color: ${({ theme }) => theme.colors.gray[600]};

          margin-top: -3px;
        }
      }
    }

    &__personal {
      border-bottom: 1px solid #ddd;

      padding-bottom: 34px;
      margin-bottom: 34px;

      &:last-of-type {
        border-bottom: none;
      }

      .inner {
        display: flex;
        justify-content: space-between;
        align-items: center;

        margin-bottom: 16px;

        &:last-child {
          margin-bottom: 0;
        }

        .name {
          color: #a7a7a7;
        }

        .value {
          color: ${({ theme }) => theme.colors.gray[700]};

          span {
            ${({ theme }) => theme.text.subtitle4};
            color: ${({ theme }) => theme.colors.gray[900]};
          }
        }
      }
    }
    &__right {
      text-align: right;

      margin-top: 16px;

      .option {
        ${({ theme }) => theme.text.caption1};
        color: ${({ theme }) => theme.colors.gray[700]};

        > svg {
          color: ${({ theme }) => theme.colors.gray[600]};
        }
      }
      .price {
        ${({ theme }) => theme.text.subtitle4};

        margin-top: 5px;

        span {
          ${({ theme }) => theme.text.caption1};
          color: ${({ theme }) => theme.colors.gray[600]};
        }
      }
      .fee {
        ${({ theme }) => theme.text.caption2};
        color: ${({ theme }) => theme.colors.orange[200]};

        margin-top: 5px;
        line-height: 1.2;
      }
    }
  }
`;

export const DetailBlank = styled.div`
  height: 20px;
`;
