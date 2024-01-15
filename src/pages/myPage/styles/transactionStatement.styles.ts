import styled from "@emotion/styled";

// FIXME: 모듈화
interface TransactionStatementProps {
  width?: string;
  color?: string;
}

export const ListCardWrapper = styled.div<TransactionStatementProps>`
  width: ${({ width }) => width || "100%"};
  height: 850px;
  display: flex;
  padding: 20px 14px;
  gap: 20px;
  flex-direction: column;

  background: ${({ theme }) => theme.colors.gray[200]};
`;
