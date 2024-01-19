import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Flex = styled.div`
  display: flex;
  gap: 1rem;
`;

export const FlexCenter = styled(Flex)`
  justify-content: center;
  align-items: center;
`;

export const NoScrollBar = css`
  ::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;
