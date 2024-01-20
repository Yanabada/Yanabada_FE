import styled from "@emotion/styled";

export const MyPageContainer = styled.div`
  width: 100%;
  padding: 0 14px;
`;

export const LoginButtonWrapper = styled.div`
  display: inline-flex;
  padding: 9px 0px;
  align-items: center;
  gap: 4px;
`;

export const LoginButton = styled.button`
  color: #000;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.333px;

  > svg {
    width: 6px;
    height: 12px;
    flex-shrink: 0;

    stroke-width: 2px;
    stroke: #000;
  }
`;

export const BellContainer = styled.div`
  width: 1.375rem;
  height: 1.375rem;
  color: #000;
  cursor: pointer;
`;
