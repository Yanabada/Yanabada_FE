import styled from "@emotion/styled";
import { css } from "@emotion/react";

const WrapperLayout = css`
  display: inline-flex;
  padding: 7px 12px;
  justify-content: center;
  align-items: center;
  gap: 4px;

  border-radius: 30px;
`;

export const AbledDefaultChipWrapper = styled.button`
  ${WrapperLayout}

  background: ${({ theme }) => theme.colors.blue[50]};
`;

export const AbledChipText = styled.p`
  color: ${({ theme }) => theme.colors.blue[400]};
  white-space: nowrap;

  /* [Button2] 칩 버튼 */
  ${({ theme }) => theme.text.button2}
`;

export const DisabledDefaultChipWrapper = styled.button`
  ${WrapperLayout}

  background: ${({ theme }) => theme.colors.gray[100]};

  cursor: not-allowed;
`;

export const DisabledChipText = styled.p`
  color: ${({ theme }) => theme.colors.gray[700]};

  /* [Button2] 칩 버튼 */
  ${({ theme }) => theme.text.button2}
  white-space: nowrap;
`;

export const AbledIconChipWrapper = styled(AbledDefaultChipWrapper)`
  > svg {
    width: 18px;
    height: 18px;
  }
`;
