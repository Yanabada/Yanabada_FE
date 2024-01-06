import styled from "@emotion/styled";

export const BadgeCircle = styled.div`
  background-color: ${({ theme }) => theme.colors.orange[200]};
  color: #fff;
  font-size: 12px;
  padding: 2px 4px;
  position: absolute;
  transform: translate(60%, -40%);
  &.small {
    border-radius: 50%;
  }
  &.big {
    border-radius: 16px;
  }
`;
