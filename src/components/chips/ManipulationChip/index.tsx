import * as S from "./styles";
import { IoIosSearch } from "react-icons/io";

interface ManipulationChipProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  type: "abledDefault" | "abledIcon" | "disabledDefault" | "disabledIcon";
}

const ManipulationChip = ({ type, children }: ManipulationChipProps) => {
  switch (type) {
    case "abledDefault":
      return (
        <S.AbledDefaultChipWrapper>
          <S.AbledChipText>{children}</S.AbledChipText>
        </S.AbledDefaultChipWrapper>
      );
    case "disabledDefault":
      return (
        <S.DisabledDefaultChipWrapper>
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
