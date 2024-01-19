import styled from "@emotion/styled";
import { NoScrollBar } from "@styles/base";

export const Container = styled.div`
  position: relative;

  /* TODO: z-index 조정 어떻게? */
  /* ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 200px;
    background-color: #f0dcc4;
    z-index: 1;
  } */
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;

  z-index: 2;

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
  z-index: 2;
`;
