import styled from "@emotion/styled";

interface DateChangeButtonProps {
  width?: string;
}

export const DateChangeButton = styled.button<DateChangeButtonProps>`
  display: flex;
  width: ${({ width }) => width || "332px"};
  padding: 12px 8px;
  justify-content: space-between;
  align-items: center;

  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  background-color: ${({ theme }) => theme.colors.gray[200]};
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  flex: 1 0;
`;

export const Label = styled.p`
  ${({ theme }) => theme.text.button2};
  color: ${({ theme }) => theme.colors.gray[900]};
  text-align: center;
`;

export const DescriptionLabel = styled.p`
  ${({ theme }) => theme.text.button2};
`;

export const RightButton = styled.button`
  color: #0751c3;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;

  border-radius: 5px;
`;
