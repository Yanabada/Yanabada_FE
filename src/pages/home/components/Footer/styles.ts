import styled from "@emotion/styled";

export const Container = styled.div`
  display: grid;
  gap: 24px;

  padding: 1.5rem 1rem;

  background-color: ${({ theme }) => theme.colors.gray[100]};
`;

export const Text = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;

  color: ${({ theme }) => theme.colors.gray[600]};
`;

export const TagWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  column-gap: 6px;
  row-gap: 10px;
`;

export const Tag = styled.button`
  padding: 3px 5px;

  border: 1px solid ${({ theme }) => theme.colors.gray[300]};

  font-size: 12px;
  font-weight: 400;
  line-height: 130%;

  color: ${({ theme }) => theme.colors.gray[600]};

  white-space: nowrap;
`;
