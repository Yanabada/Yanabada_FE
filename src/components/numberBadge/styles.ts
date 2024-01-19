import styled from "@emotion/styled";

interface BadgeCircleProp {
  isChatPage?: boolean;
}

export const BadgeCircle = styled.span<BadgeCircleProp>`
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
  ${({ isChatPage }) =>
    isChatPage &&
    `
    bottom:0;
    right:0;
    transform: translate(0);
    text-align:center;
  `}
`;
