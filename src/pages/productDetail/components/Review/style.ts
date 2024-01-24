import styled from "@emotion/styled";
import { NoScrollBar } from "@styles/base";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;
  padding: 1rem 0 1rem 1rem;
  background-color: #fff;
`;

export const Text = styled.p`
  ${({ theme }) => theme.text.subtitle3}
`;

export const ReviewContainer = styled.div`
  display: flex;
  gap: 1rem;
  overflow-x: scroll;
  ${NoScrollBar};
`;

export const ReviewItemContainer = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  width: 15rem;
  height: 9.375rem;
  padding: 0.75rem;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  background: #fff;
  box-shadow: ${({ theme }) => theme.shadows[3]};
`;

export const NickNameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

export const NickName = styled.p`
  color: ${({ theme }) => theme.colors.gray[700]};
  ${({ theme }) => theme.text.button1};
`;

export const StarContainer = styled.div``;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.gray[600]};
  ${({ theme }) => theme.text.body2};
`;
