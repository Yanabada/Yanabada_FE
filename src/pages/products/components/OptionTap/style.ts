import styled from "@emotion/styled";

export const OptionContainer = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 0.5rem;
  height: 3rem;
  padding: 0 0.5rem;
  margin-bottom: 0.3rem;
  overflow-x: auto;

  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 780px) {
    justify-content: space-between;
  }
`;

export const OptionList = styled.li`
  padding: 0.4375rem 0.75rem;
  color: ${({ theme }) => theme.colors.gray[700]};
  ${({ theme }) => theme.text.button2};
  border-radius: 1.875rem;
  background: ${({ theme }) => theme.colors.gray[100]};
  white-space: nowrap;
  cursor: pointer;
`;
