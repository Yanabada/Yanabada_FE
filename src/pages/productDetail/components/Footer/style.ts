import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem 0 5.625rem 0;
  background-color: #fff;
`;

export const PhoneContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1rem 0 1rem;
`;

export const Text = styled.p`
  ${({ theme }) => theme.text.subtitle3}
`;

export const PhoneNumber = styled.p`
  color: ${({ theme }) => theme.colors.blue[400]};
  ${({ theme }) => theme.text.body1};
  cursor: pointer;
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: ${({ theme }) => theme.colors.gray[100]};
  padding: 1.5rem 1rem;
`;

export const YanabadaText = styled.p`
  color: ${({ theme }) => theme.colors.gray[600]};
  ${({ theme }) => theme.text.body2};
`;
