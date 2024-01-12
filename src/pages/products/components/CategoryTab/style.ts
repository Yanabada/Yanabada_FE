import styled from "@emotion/styled";

export const CategoryContainer = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 100%;
  gap: 1rem;
  padding: 0rem 1rem 0.75rem 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[300]};

  .selected_category {
    color: ${({ theme }) => theme.colors.gray[900]};
    ${({ theme }) => theme.text.button1};
  }
`;

export const CategoryList = styled.li`
  color: ${({ theme }) => theme.colors.gray[600]};
  ${({ theme }) => theme.text.button2};
  white-space: nowrap;
  cursor: pointer;
`;
