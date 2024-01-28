import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  max-width: 780px;
  display: block;
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
  height: 3.5rem;
  background: linear-gradient(266deg, rgb(88, 145, 230), rgb(94 205 253));

  &.isHeaderActive {
    .bell {
      color: black;
    }
    .gotoText {
      color: ${({ theme }) => theme.colors.gray[700]};
    }
    .logoContainer {
      > svg {
        fill: url(#paint0_linear_2987_31414);
      }
    }
  }
`;

export const HeaderContainer = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3.5rem;
  padding: 0 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[300]};
  background: rgba(0, 0, 0, 0.05);
`;

export const BellContainer = styled.div`
  width: 33%;
  .bell {
    width: 1.375rem;
    height: 1.375rem;
    color: #fff;
    cursor: pointer;
  }
`;

export const LogoContainer = styled.div`
  width: 33%;
  display: flex;
  justify-content: center;

  > svg {
    fill: #fff;
  }
`;

export const Wrapper = styled.div`
  width: 33%;
`;
