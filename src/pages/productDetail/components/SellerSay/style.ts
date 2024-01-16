import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1.25rem 0.875rem;
  background-color: ${({ theme }) => theme.colors.gray[100]};
`;

export const NickNameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Text = styled.p`
  ${({ theme }) => theme.text.subtitle3}
`;

export const NickName = styled.p`
  color: ${({ theme }) => theme.colors.gray[700]};
  ${({ theme }) => theme.text.body2}
`;

export const SayContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const UserImage = styled.img`
  width: 2.1875rem;
  height: 2.1875rem;
  border-radius: 50%;
`;

export const SayInnerContainer = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
  flex: 1 0 0;
  border-radius: 0px 20px 20px 20px;
  background: #fff;

  /* 은은한쉐도우 */
  box-shadow: ${({ theme }) => theme.shadows[3]};
`;

export const SellerText = styled.p`
  color: ${({ theme }) => theme.colors.gray[700]};
  ${({ theme }) => theme.text.body2}
`;
