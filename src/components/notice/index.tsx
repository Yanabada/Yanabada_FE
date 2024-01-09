import * as S from "./styles";
import YanoljaIcon from "@assets/icons/yanolja_Icon.svg?react";
import CautionIcon from "@assets/icons/CautionIcon.svg?react";

interface YanoljaProps {
  type: "yanolja";
  content: string;
  shape?: "lineFill";
}

interface DefaultProps {
  type: "default";
  title: string;
  content?: string;
  shape?: "line" | "fill" | "lineFill";
}

type NoticeProps = YanoljaProps | DefaultProps;

const Notice = (props: NoticeProps) => {
  switch (props.type) {
    case "yanolja":
      return (
        <S.NoticeWrapper className={props.shape ? `${props.shape} yanolja` : "yanolja"}>
          <YanoljaIcon />
          <S.TextWrapper>{props.content}</S.TextWrapper>
        </S.NoticeWrapper>
      );
    default:
      return (
        <S.NoticeWrapper className={props.shape ? props.shape : ""}>
          <S.IconBox>
            <CautionIcon />
          </S.IconBox>
          <S.TextWrapper>
            <S.NoticeTitle>{props.title}</S.NoticeTitle>
            <S.TextWrapper>{props.content}</S.TextWrapper>
          </S.TextWrapper>
        </S.NoticeWrapper>
      );
  }
};

export default Notice;
