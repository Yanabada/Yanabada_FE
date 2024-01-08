import * as S from "./styles";
import { IoIosSearch } from "react-icons/io";
import { RiKakaoTalkFill } from "react-icons/ri";
import { SiNaver } from "react-icons/si";

interface BaseButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  type:
    | "light"
    | "icon"
    | "default"
    | "transparent"
    | "gray"
    | "kakao"
    | "naver"
    | "disabled-light"
    | "disabled-icon"
    | "disabled-default";
  width?: string;
}

const index = ({ type, children, ...props }: BaseButtonProps) => {
  switch (type) {
    case "light":
      return (
        <S.LightColoredButton {...props}>
          <IoIosSearch size="18px" color="#0751C3" />
          {children}
        </S.LightColoredButton>
      );
    case "icon":
      return (
        <S.IconButton {...props}>
          <IoIosSearch size="18px" color="#ffffff" />
          {children}
        </S.IconButton>
      );
    case "default":
      return <S.DefaultButton {...props}>{children}</S.DefaultButton>;
    case "transparent":
      return <S.TransparentButton {...props}>{children}</S.TransparentButton>;
    case "gray":
      return <S.GrayColoredButton {...props}>{children}</S.GrayColoredButton>;
    case "kakao":
      return (
        <S.KakaoButton {...props}>
          <RiKakaoTalkFill size="18px" color="#000000" />
          {children}
        </S.KakaoButton>
      );
    case "naver":
      return (
        <S.NaverButton {...props}>
          <SiNaver size="18px" color="#ffffff" />
          {children}
        </S.NaverButton>
      );
    case "disabled-light":
      return (
        <S.DisabledLightColoredButton {...props}>
          <IoIosSearch size="18px" color="##9C9C9C" />
          {children}
        </S.DisabledLightColoredButton>
      );
    case "disabled-icon":
      return (
        <S.DisabledIconButton {...props}>
          <IoIosSearch size="18px" color="##ffffff" />
          {children}
        </S.DisabledIconButton>
      );
    case "disabled-default":
      return <S.DisabledDefaultButton {...props}>{children}</S.DisabledDefaultButton>;
    default:
      return null;
  }
};

export default index;
