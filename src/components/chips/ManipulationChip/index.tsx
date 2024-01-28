import * as S from "./styles";
import { IoIosSearch } from "react-icons/io";

interface ManipulationChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  buttonType: "abledDefault" | "abledIcon" | "disabledDefault" | "disabledIcon";
}

const ManipulationChip = ({ buttonType, children, ...props }: ManipulationChipProps) => {
  switch (buttonType) {
    case "abledDefault":
      return (
        <S.AbledDefaultChipWrapper {...props}>
          <S.AbledChipText>{children}</S.AbledChipText>
        </S.AbledDefaultChipWrapper>
      );
    case "disabledDefault":
      return (
        <S.DisabledDefaultChipWrapper {...props}>
          <S.DisabledChipText>{children}</S.DisabledChipText>
        </S.DisabledDefaultChipWrapper>
      );
    case "abledIcon":
      return (
        <S.AbledIconChipWrapper>
          <IoIosSearch size="18px" color="#0751C3" />
          <S.AbledChipText>{children}</S.AbledChipText>
        </S.AbledIconChipWrapper>
      );
    case "disabledIcon":
      return (
        <S.DisabledDefaultChipWrapper>
          <IoIosSearch size="18px" color="#616161" />
          <S.DisabledChipText>{children}</S.DisabledChipText>
        </S.DisabledDefaultChipWrapper>
      );
    default:
      return null;
  }
};

export default ManipulationChip;
