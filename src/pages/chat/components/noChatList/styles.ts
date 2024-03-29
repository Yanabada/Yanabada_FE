import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 35vh 0 60vh;
  svg {
    width: 61px;
    height: 61px;
    fill: ${({ theme }) => theme.colors.gray[600]};
  }
`;

export const Title = styled.span`
  margin: 10px 0 4px;

  color: ${({ theme }) => theme.colors.gray[700]};
  ${({ theme }) => theme.text.subtitle5};
`;

export const HightLight = styled.span`
  color: ${({ theme }) => theme.colors.blue[400]};
  text-decoration: underline;
  ${({ theme }) => theme.text.body2};
  cursor: pointer;
`;

export const Content = styled.span`
  color: ${({ theme }) => theme.colors.gray[600]};
  ${({ theme }) => theme.text.body2};
`;
