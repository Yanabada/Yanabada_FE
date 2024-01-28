import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem 0 1rem 1rem;
  background-color: #fff;
  ${({ theme }) => theme.text.subtitle2}
`;

export const CardContainer = styled.div`
  display: flex;
  overflow-x: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`;
