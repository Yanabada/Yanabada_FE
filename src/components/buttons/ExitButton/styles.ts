import styled from "@emotion/styled";

interface ExitButtonProps {
  width?: string;
}

export const ExitButtonWrapper = styled.div<ExitButtonProps>`
  display: flex;
  width: ${({ width }) => width || "360px"};
  padding: 16px 0px;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  border-top: 1px solid ${({ theme }) => theme.colors.gray[300]};

  /* 위로올라가는쉐도우 */
  box-shadow: ${({ theme }) => theme.shadows[1]};
`;

export const DetailText = styled.p`
  color: ${({ theme }) => theme.colors.gray[700]};
  text-align: center;

  font-family: Roboto;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 18.2px */
`;

export const ExitButton = styled.button<ExitButtonProps>`
  display: flex;
  width: 92%;
  height: 40px;
  padding-right: 9px;
  justify-content: center;
  align-items: center;
  gap: 8px;

  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.pink[200]};
  background: ${({ theme }) => theme.colors.orange[100]};

  > svg {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
  }
`;

export const ExitButtonText = styled.p`
  ${({ theme }) => theme.text.button1};

  color: ${({ theme }) => theme.colors.pink[200]};
  text-align: center;
`;
