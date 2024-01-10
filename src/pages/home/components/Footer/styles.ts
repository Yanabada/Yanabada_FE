import styled from "@emotion/styled";

export const Container = styled.div`
  display: grid;
  gap: 24px;

  padding: 1.5rem 1rem;

  background-color: ${({ theme }) => theme.colors.gray[100]};
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.text.body2.fontSize};
  font-weight: ${({ theme }) => theme.text.body2.fontWeight};
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

  font-size: ${({ theme }) => theme.text.caption1.fontSize};
  font-weight: ${({ theme }) => theme.text.caption1.fontSize};
  line-height: 130%;

  color: ${({ theme }) => theme.colors.gray[600]};

  white-space: nowrap;
`;
