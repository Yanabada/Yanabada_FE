import styled from "@emotion/styled";
import { css } from "@emotion/react";

interface CertificationProps {
  width?: string;
  gap?: string;
}

const TextLayout = css`
  font-size: 12px;
  font-style: normal;
  line-height: 17px; /* 141.667% */
`;

export const CertificationContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`;

export const CertificationWrapper = styled.div<CertificationProps>`
  width: ${({ width }) => width || "360px"};
  display: flex;
  flex-direction: column;
  gap: ${({ gap }) => gap || "0px"};
  background-color: #fff;
`;

export const CertificationText = styled.span`
  ${TextLayout}

  color: ${({ theme }) => theme.colors.gray[700]};
  font-weight: 400;
`;

export const CertificationTextBold = styled.span`
  ${TextLayout}

  color: ${({ theme }) => theme.colors.gray[700]};
  font-weight: 700;
`;

export const ButtonWrapper = styled.div`
  display: inline-flex;
  padding: 16px 0;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  bottom: 0;

  border-top: 1px solid ${({ theme }) => theme.colors.gray[300]};
`;

export const InputContainer = styled.div`
  margin: 32px 0 16px;
`;
