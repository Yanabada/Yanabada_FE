import styled from "@emotion/styled";

export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  gap: 8px;
  padding: 12px 8px;

  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[300]};

  cursor: pointer;

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 20px;
    height: 20px;

    svg > path {
      stroke: ${({ theme }) => theme.colors.gray[600]};
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const IconWrapper = styled.div``;

export const Input = styled.input`
  appearance: none;

  &:checked {
    + div > svg > path {
      stroke: ${({ theme }) => theme.colors.blue[400]};
    }
  }
`;

export const ContnetWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.p`
  font-size: ${({ theme }) => theme.text.button2.fontSize};
  font-weight: ${({ theme }) => theme.text.button2.fontWeight};
  line-height: ${({ theme }) => theme.text.button2.lineHeight};
`;

export const Content = styled.p`
  font-size: ${({ theme }) => theme.text.body2.fontSize};
  font-weight: ${({ theme }) => theme.text.body2.fontWeight};
  line-height: ${({ theme }) => theme.text.body2.lineHeight};

  color: ${({ theme }) => theme.colors.gray[600]};
`;
