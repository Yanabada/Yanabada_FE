import styled from "@emotion/styled";

export const NoticeWrapper = styled.div`
  padding: 8px 10px;
  border-radius: 5px;

  display: flex;
  flex-shrink: 0;
  flex-direction: row;
  gap: 8px;

  > svg {
    width: 16px;
  }

  color: ${({ theme }) => theme.colors.gray[700]};

  &.fill {
    background-color: ${({ theme }) => theme.colors.gray[100]};
  }
  &.lineFill {
    background-color: ${({ theme }) => theme.colors.gray[200]};
    border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  }
  &.line {
    border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  }
  &.yanolja {
    align-items: center;
  }
`;

export const NoticeTitle = styled.div`
  color: ${({ theme }) => theme.colors.blue[200]};
  ${({ theme }) => theme.text.body2}
  &.question {
    color: ${({ theme }) => theme.colors.orange[200]};
  }
`;
export const TextWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.text.body2}
`;

export const IconBox = styled.div`
  padding: 2px 0 0 0;
`;
