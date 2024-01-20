import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Container = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.gray[200]};

  overflow: hidden;
`;

export const NoticeContainer = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 14px;

  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};
  background-color: #fff;

  &:last-of-type {
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.03);
  }
`;

export const ImageContainer = styled.div`
  width: 40px;
  height: 40px;
  aspect-ratio: 1;
  border-radius: 50%;
  background-color: #f2f2f2;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  .title {
    ${({ theme }) => theme.text.button2};

    .name {
      font-family: "Pretendard";
      ${({ theme }) => theme.text.button1};
    }
  }

  .description {
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${({ theme }) => theme.text.body3};
    color: ${({ theme }) => theme.colors.gray[600]};

    .date {
      ${({ theme }) => theme.text.caption1};
      color: ${({ theme }) => theme.colors.gray[700]};
    }
  }
`;

export const EditButton = styled.label`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: -46px;
  width: 46px;
  height: 100%;

  background-color: ${({ theme }) => theme.colors.gray[100]};
`;

export const BottomWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 72px;

  padding: 1rem;
  gap: 1rem;

  border-top: 1px solid ${({ theme }) => theme.colors.gray[300]};
  background: #fff;
  box-shadow: 0px 1px 7px 0px rgba(0, 0, 0, 0.25);

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    ${({ theme }) => theme.text.button1};
    border-radius: 5px;
    color: #fff;

    &.disabled {
      background-color: ${({ theme }) => theme.colors.gray[500]};
      cursor: not-allowed;
    }

    &.active {
      background-color: ${({ theme }) => theme.colors.blue[200]};
    }
  }
`;
