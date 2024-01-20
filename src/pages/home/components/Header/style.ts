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
  background: linear-gradient(231deg, #5d99f2 35.76%, #5ed8ff 83.56%);

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
  width: 100%;
  height: 3.5rem;
  padding: 0 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[300]};
  background: rgba(0, 0, 0, 0.05);
`;

export const BellContainer = styled.div`
  .bell {
    width: 1.375rem;
    height: 1.375rem;
    color: #fff;
    cursor: pointer;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 1.5rem;

  > svg {
    fill: #fff;
  }
`;

export const GotoContainer = styled.a`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 7rem;
  height: 0.9375rem;
  gap: 0.125rem;
  padding: 0.7rem 0.5rem;
  border-radius: 3px;
  background: rgba(242, 242, 242, 0.3);
  cursor: pointer;
`;

export const GotoText = styled.p`
  color: #fff;
  ${({ theme }) => theme.text.overline};
`;
