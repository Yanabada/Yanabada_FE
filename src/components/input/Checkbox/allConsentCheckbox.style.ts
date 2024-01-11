import styled from "@emotion/styled";

export const Wrapper = styled.div<{ transparent?: boolean }>`
  display: flex;
  align-items: center;

  padding: 12px 8px;

  border-radius: 5px;
  background-color: ${({ theme, transparent }) =>
    transparent ? "transparent" : theme.colors.gray[100]};

  span {
    font-size: 14px;
    font-weight: 400;

    margin-left: 5px;

    color: ${({ theme }) => theme.colors.gray[600]};
  }
`;

export const Icon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  pointer-events: none;
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.text.button1.fontSize};
  font-weight: ${({ theme }) => theme.text.button1.fontWeight};

  cursor: pointer;
`;

export const IconWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  margin-right: 8px;

  cursor: pointer;
`;

export const Input = styled.input`
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 3px;

  background-color: ${({ theme }) => theme.colors.gray[500]};

  &:checked {
    background-color: ${({ theme }) => theme.colors.blue[400]};
  }
`;
