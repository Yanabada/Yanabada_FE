import * as S from "./styles";

interface NumberBadgeProps {
  number: number;
}

const NumberBadge = ({ number }: NumberBadgeProps) => {
  return <S.BadgeCircle className={`${number < 10 ? "small" : "big"}`}>{number}</S.BadgeCircle>;
};

export default NumberBadge;
