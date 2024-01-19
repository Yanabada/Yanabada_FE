import * as S from "./styles";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  badgeType?: "sale" | "approval" | "completed" | "reserved" | "canceled";
}

const Badges = ({ badgeType, children }: BadgeProps) => {
  switch (badgeType) {
    case "sale":
      return (
        <S.BadgeWrapper badgeType="sale">
          <S.BadgeText badgeType="sale">{children}</S.BadgeText>
        </S.BadgeWrapper>
      );
    case "approval":
      return (
        <S.BadgeWrapper badgeType="approval">
          <S.BadgeText badgeType="approval">{children}</S.BadgeText>
        </S.BadgeWrapper>
      );
    case "completed":
      return (
        <S.BadgeWrapper badgeType="completed">
          <S.BadgeText badgeType="completed">{children}</S.BadgeText>
        </S.BadgeWrapper>
      );
    case "reserved":
      return (
        <S.BadgeWrapper badgeType="reserved">
          <S.BadgeText badgeType="reserved">{children}</S.BadgeText>
        </S.BadgeWrapper>
      );
    case "canceled":
      return (
        <S.BadgeWrapper badgeType="canceled">
          <S.BadgeText badgeType="canceled">{children}</S.BadgeText>
        </S.BadgeWrapper>
      );
  }
};

export default Badges;
