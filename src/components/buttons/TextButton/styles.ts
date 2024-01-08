import styled from "@emotion/styled";

export const TextButton = styled.button`
  display: inline-flex;
  height: 26px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.blue[400]};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 18.2px */
  white-space: nowrap;
  padding: 0px 10px;

  &:hover {
    background: ${({ theme }) => theme.colors.blue[50]};
    color: ${({ theme }) => theme.colors.blue[400]};
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
  }
`;
