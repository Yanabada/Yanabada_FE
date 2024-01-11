import * as S from "./styles";

interface AdditionalServiceChipProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  type: "abled" | "disabled";
}

const AdditionalServiceChip = ({ type, children }: AdditionalServiceChipProps) => {
  switch (type) {
    case "abled":
      return (
        <S.AbledChipWrapper>
          <S.AbledChipText>{children}</S.AbledChipText>
        </S.AbledChipWrapper>
      );
    case "disabled":
      return (
        <S.DisabledChipWrapper>
          <S.DisabledChipText>{children}</S.DisabledChipText>
        </S.DisabledChipWrapper>
      );
    default:
      return null;
  }
};

export default AdditionalServiceChip;
