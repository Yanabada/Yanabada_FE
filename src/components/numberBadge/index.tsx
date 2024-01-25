import * as S from "./styles";

interface NumberBadgeProps {
  number?: number;
  isChatPage?: boolean;
}

const NumberBadge = ({ number, isChatPage = false }: NumberBadgeProps) => {
  return (
    <S.BadgeCircle
      className={`${(number as number) < 10 ? "small" : "big"}`}
      isChatPage={isChatPage}
    >
      {number}
    </S.BadgeCircle>
  );
};

export default NumberBadge;
