import styled from "@emotion/styled";

export const ResetButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 18px;
    height: 18px;
  }

  span {
    ${({ theme }) => theme.text.button1}
    text-decoration: underline;
    text-underline-offset: 3px;

    color: ${({ theme }) => theme.colors.blue[400]};
  }
`;
