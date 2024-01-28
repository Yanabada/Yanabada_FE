import styled from "@emotion/styled";

interface SayProps {
  borderRadius?: string;
}

export const SayContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const UserImage = styled.img`
  width: 2.1875rem;
  height: 2.1875rem;
  border-radius: 50%;
`;

export const SayInnerContainer = styled.div<SayProps>`
  display: flex;
  padding: 1rem;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
  flex: 1 0 0;
  border-radius: ${({ borderRadius }) => borderRadius || "0px 20px 20px 20px"};
  background: #fff;
  box-shadow: ${({ theme }) => theme.shadows[3]};
`;

export const SellerText = styled.p`
  color: ${({ theme }) => theme.colors.gray[700]};
  ${({ theme }) => theme.text.body2}
`;
