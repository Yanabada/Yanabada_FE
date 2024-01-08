import * as S from "./styles";
import { IoIosArrowForward } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

const index = () => {
  return (
    <S.ListButtonWrapper>
      <S.LeftSection>
        <CgProfile />
        <S.Text>판매내역</S.Text>
      </S.LeftSection>
      <IoIosArrowForward size="18px" color="#616161" />
    </S.ListButtonWrapper>
  );
};

export default index;
