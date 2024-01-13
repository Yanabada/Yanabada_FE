import styled from "@emotion/styled";

interface BadgeProps {
  badgeType: "sale" | "approval" | "completed" | "reserved" | "canceled";
}

export const BadgeWrapper = styled.div<BadgeProps>`
  display: flex;
  padding: 1px 8px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 14px;
  background: ${({ badgeType }) =>
    (badgeType === "sale" && "#E6EEF9") ||
    (badgeType === "approval" && "#FDF4F4") ||
    (badgeType === "completed" && "#EEFBEF") ||
    (badgeType === "reserved" && "#FDF4F4") ||
    (badgeType === "canceled" && "#F8F8F8")};
`;

export const BadgeText = styled.p<BadgeProps>`
  color: ${({ badgeType }) =>
    (badgeType === "sale" && "#0751C3") ||
    (badgeType === "approval" && "#E01F3E") ||
    (badgeType === "completed" && "#028161") ||
    (badgeType === "reserved" && "#FF7456") ||
    (badgeType === "canceled" && "#9C9C9C")};
  /* [body3]숙박기간 */
  ${({ theme }) => theme.text.body3}
`;
