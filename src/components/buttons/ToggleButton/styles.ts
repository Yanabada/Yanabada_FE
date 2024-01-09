import styled from "@emotion/styled";

export const ToggleButton = styled.button`
  display: flex;
  width: 158px;
  height: 40px;
  padding-right: 9px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;

  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.gray[500]};

  ${({ theme }) => theme.text.button2};
  text-align: center;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.blue[200]};
    background: ${({ theme }) => theme.colors.gray[200]};

    ${({ theme }) => theme.text.button1};
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: -2px;

  &:hover {
    > p {
      color: ${({ theme }) => theme.colors.blue[200]};
    }
  }
`;

export const ToggleButtonText = styled.p`
  color: ${({ theme }) => theme.colors.gray[700]};
`;

export const ToggleButtonSubText = styled.p`
  color: ${({ theme }) => theme.colors.gray[600]};
`;
