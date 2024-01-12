import styled from "@emotion/styled";

export const Container = styled.div`
  div:first-of-type {
    display: flex;
    align-items: center;
    padding: 0;
  }

  div {
    color: ${({ theme }) => theme.colors.gray[600]};
  }

  svg > rect {
    fill: ${({ theme }) => theme.colors.gray[600]};
  }
`;
