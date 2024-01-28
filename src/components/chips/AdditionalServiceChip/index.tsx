import * as S from "./styles";

interface AdditionalServiceChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  buttonType: "abled" | "disabled";
}

const AdditionalServiceChip = ({ buttonType, children }: AdditionalServiceChipProps) => {
  switch (buttonType) {
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
