import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  background-color: #fff;
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.p`
  ${({ theme }) => theme.text.subtitle2}
`;

export const AllTitle = styled.p`
  color: ${({ theme }) => theme.colors.blue[400]};
  ${({ theme }) => theme.text.body1};
`;

export const CardContainer = styled.div`
  display: flex;
  overflow-x: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`;
