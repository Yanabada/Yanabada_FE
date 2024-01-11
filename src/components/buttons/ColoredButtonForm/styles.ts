import styled from "@emotion/styled";

interface ColoredButtonFormProps {
  width?: string;
}

export const ColoredButtonWrapper = styled.div<ColoredButtonFormProps>`
  display: flex;
  width: ${({ width }) => width || "332px"};
  padding: 16px 14px;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  border-top: 1px solid ${({ theme }) => theme.colors.gray[300]};

  /* 위로올라가는쉐도우 */
  box-shadow: 0px 1px 7px 0px rgba(0, 0, 0, 0.25);
`;

export const ColoredButton = styled.button<ColoredButtonFormProps>`
  display: flex;
  width: 100%;
  height: 40px;
  justify-content: center;
  align-items: center;
  gap: 8px;

  border-radius: 5px;
  background: ${({ theme }) => theme.colors.gray[500]};
  color: #fff;
`;

export const ColoredText = styled.span`
  color: ${({ theme }) => theme.colors.blue[400]};
  text-align: center;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 18.2px */
  text-decoration-line: underline;
`;

export const NormalText = styled.p`
  color: ${({ theme }) => theme.colors.gray[700]};
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
`;
