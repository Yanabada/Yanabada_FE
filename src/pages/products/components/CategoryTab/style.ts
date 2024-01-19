import styled from "@emotion/styled";

export const CategoryContainer = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 100%;
  gap: 1rem;
  padding: 0rem 1rem 0.75rem 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[300]};
`;

export const CategoryList = styled.li`
  position: relative;
  color: ${({ theme }) => theme.colors.gray[600]};
  ${({ theme }) => theme.text.button2};
  white-space: nowrap;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    bottom: -65%;
    width: 100%;
    height: 0.1875rem;
    transition: background 0.3s ease;
  }

  &.selected_category {
    color: ${({ theme }) => theme.colors.gray[900]};
    ${({ theme }) => theme.text.button1};
    &::before {
      background: ${({ theme }) => theme.colors.gray[900]};
    }
  }
`;
