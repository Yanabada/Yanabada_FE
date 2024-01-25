import styled from "@emotion/styled";
import { NoScrollBar } from "@styles/base";

export const Container = styled.div`
  position: relative;
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: #e6eef9;
  width: 100%;
  height: 200px;
`;

export const TitleWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  height: 112px;

  .logo {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  .title {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  h2 {
    color: #0751c3;
    font-family: Roboto;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 0.25rem;
  }

  h3 {
    color: #38a3eb;
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
