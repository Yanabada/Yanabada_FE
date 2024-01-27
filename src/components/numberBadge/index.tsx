import * as S from "./styles";

interface NumberBadgeProps {
  number?: number;
  isChatPage?: boolean;
  hasMore?: boolean;
}

const NumberBadge = ({ number, isChatPage = false, hasMore = false }: NumberBadgeProps) => {
  if (!number) {
    return;
  }
  return (
    <S.BadgeCircle
      className={`${(number as number) < 10 ? "small" : "big"}`}
      isChatPage={isChatPage}
    >
      {number}
      {hasMore && "+"}
    </S.BadgeCircle>
  );
};

export default NumberBadge;
