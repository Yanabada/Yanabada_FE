import styled from "@emotion/styled";
import { NoScrollBar } from "@styles/base";

export const Container = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 1rem;

  overflow-x: scroll;
  ${NoScrollBar};
`;

export const CategoryWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 53px;
  height: 53px;
  aspect-ratio: 1;

  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.blue[200]};
`;
