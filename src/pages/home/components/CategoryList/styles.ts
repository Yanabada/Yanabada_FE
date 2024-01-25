import styled from "@emotion/styled";
import { NoScrollBar } from "@styles/base";

export const Container = styled.div`
  padding: 2rem 1rem;
  background-color: ${({ theme }) => theme.colors.gray[100]};
`;

export const Title = styled.h2`
  ${({ theme }) => theme.text.subtitle2};
  color: #1a1a1a;

  margin-bottom: 1rem;
`;

export const CategoryWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  overflow-x: scroll;
  ${NoScrollBar};

  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;

    span {
      ${({ theme }) => theme.text.caption1};
      color: #616161;
      white-space: nowrap;
    }
  }

  @media (min-width: 400px) {
    justify-content: space-around;
  }
`;

export const CategoryIconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 53px;
  height: 53px;
  aspect-ratio: 1;

  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.blue[200]};
`;
