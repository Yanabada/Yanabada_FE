import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const ProductListWrap = styled.div`
  position: relative;

  height: calc(100vh - 112px);
  padding: 17px 14px;
  padding-bottom: 40px;

  overflow-y: scroll;

  background-color: ${({ theme }) => theme.colors.gray[200]};
`;

export const NoticeTitle = styled.p`
  ${({ theme }) => theme.text.subtitle5};

  margin-bottom: 8px;

  span {
    ${({ theme }) => theme.text.body2};
    color: ${({ theme }) => theme.colors.pink[200]};
  }
`;

export const NoListWrap = styled.div`
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: calc(100% - 56px);

  .no-list {
    &__tit {
      ${({ theme }) => theme.text.subtitle5};
      color: ${({ theme }) => theme.colors.gray[700]};

      margin-top: 10px;
    }
    &__desc {
      ${({ theme }) => theme.text.body2};
      color: ${({ theme }) => theme.colors.gray[600]};

      margin-top: 4px;
    }
  }
`;

export const ListWrap = styled.div`
  height: 100%;
  padding: 11px 0;
`;

export const ListCard = styled(motion.div)`
  position: relative;

  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  box-shadow: ${({ theme }) => theme.shadows[3]};

  margin-bottom: 16px;

  .list-card {
    &__title {
      ${({ theme }) => theme.text.subtitle5};

      position: relative;
      padding: 16px;

      border-bottom: 1px solid ${({ theme }) => theme.colors.gray[300]};

      [type="radio"] {
        position: absolute;
        right: 14px;
        appearance: none;

        border: 1px solid ${({ theme }) => theme.colors.blue[200]};
        border-radius: 50%;

        width: 24px;
        height: 24px;
        transition: border 0.5s ease-in-out;
      }

      [type="radio"]:checked {
        &:after {
          content: "";

          width: 18px;
          height: 18px;

          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);

          background: ${({ theme }) => theme.colors.blue[200]};
          border-radius: 100%;
          box-sizing: border-box;
        }
      }
    }
    &__body {
      padding: 16px;

      .title {
        ${({ theme }) => theme.text.overline};
        color: ${({ theme }) => theme.colors.gray[600]};

        margin-bottom: 10px;
      }
      .inner {
        display: flex;
        align-items: flex-start;
        gap: 12px;

        margin-bottom: 18px;
      }
      .img-bx {
        width: 64px;

        display: block;
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
          padding-bottom: 100%;
        }
      }

      .txt-bx {
        .tit {
          ${({ theme }) => theme.text.body1};
          color: ${({ theme }) => theme.colors.gray[900]};

          margin-bottom: 2px;
        }

        .date {
          ${({ theme }) => theme.text.body3};
          color: ${({ theme }) => theme.colors.gray[700]};
        }

        .time {
          ${({ theme }) => theme.text.body2};
          color: ${({ theme }) => theme.colors.gray[600]};
        }
      }
    }
  }
`;

export const ListButton = styled.button`
  ${({ theme }) => theme.text.button1};
  color: white;

  width: 100%;
  height: 48px;
  line-height: 48px;

  background-color: ${({ theme }) => theme.colors.blue[200]};

  a {
    display: block;
    width: 100%;
  }

  svg {
    padding-top: 3px;
  }
`;
