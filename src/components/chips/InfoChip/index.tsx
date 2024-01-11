import * as S from "./styles";

interface InfoChipProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  type: "gray" | "outline" | "footer";
}

const InfoChip = ({ type, children }: InfoChipProps) => {
  switch (type) {
    case "gray":
      return (
        <S.GrayInfoChipWrapper>
          <S.GrayInfoChipText>{children}</S.GrayInfoChipText>
        </S.GrayInfoChipWrapper>
      );
    case "outline":
      return (
        <S.OutlineInfoChipWrapper>
          <S.OutlineInfoChipText>{children}</S.OutlineInfoChipText>
        </S.OutlineInfoChipWrapper>
      );
    case "footer":
      return (
        <S.FooterInfoChipWrapper>
          <S.FooterInfoChipText>{children}</S.FooterInfoChipText>
        </S.FooterInfoChipWrapper>
      );
    default:
      return null;
  }
};

export default InfoChip;
