import * as S from "./styles";
import { IoIosArrowForward } from "react-icons/io";
import ProfileIcon from "@assets/icons/profileIcon.svg?react";

interface ListButtonProps {
  children: React.ReactNode;
  width?: string;
  alertCount?: number;
}

const ListButton = ({ width, alertCount, children }: ListButtonProps) => {
  return (
    <S.ListButtonWrapper width={width}>
      <S.LeftSection>
        <ProfileIcon />
        <S.Text>{children}</S.Text>
        {alertCount && alertCount > 0 ? (
          <S.Badge>
            <S.BadgeText>{alertCount}</S.BadgeText>
          </S.Badge>
        ) : null}
      </S.LeftSection>
      <IoIosArrowForward size="18px" color="#616161" />
    </S.ListButtonWrapper>
  );
};

export default ListButton;
