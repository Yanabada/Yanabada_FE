import styled from "@emotion/styled";
import { NoScrollBar } from "@styles/base";

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.75rem;

  margin-block: 1rem;
  padding-inline: 1rem;

  .title {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  h2 {
    color: #ae8a5f;
    font-family: Roboto;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 0.25rem;
  }

  h3 {
    color: #ba9b77;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  gap: 1rem;

  padding-left: 1rem;

  overflow-x: scroll;

  ${NoScrollBar};
`;
