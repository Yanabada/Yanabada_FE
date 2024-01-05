import * as S from "./styles";
import { IoIosSearch } from "react-icons/io";
import { RiKakaoTalkFill } from "react-icons/ri";
import { SiNaver } from "react-icons/si";

const index = () => {
  return (
    <>
      <S.LightColoredButton>
        <IoIosSearch size="18px" color="#0751C3" />
        연한 채색버튼
      </S.LightColoredButton>
      <S.IconButton>
        <IoIosSearch size="18px" color="#ffffff" />
        아이콘 버튼
      </S.IconButton>
      <S.DefaultButton>기본 버튼</S.DefaultButton>
      <S.TransparentButton>투명 빈버튼</S.TransparentButton>
      <S.GrayColoredButton>회색 채색버튼</S.GrayColoredButton>
      <S.KakaoButton>
        <RiKakaoTalkFill size="18px" color="#000000" />
        카카오로 시작하기
      </S.KakaoButton>
      <S.NaverButton>
        <SiNaver size="18px" color="#ffffff" />
        네이버로 시작하기
      </S.NaverButton>
      <S.DisabledLightColoredButton>
        <IoIosSearch size="18px" color="##9C9C9C" />
        연한 채색버튼(비활성)
      </S.DisabledLightColoredButton>
      <S.DisabledIconButton>
        <IoIosSearch size="18px" color="##ffffff" />
        아이콘 버튼(비활성)
      </S.DisabledIconButton>
      <S.DisabledDefaultButton>기본 버튼(비활성)</S.DisabledDefaultButton>
    </>
  );
};

export default index;
