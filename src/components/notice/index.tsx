import * as S from "./styles";
import YanoljaIcon from "@assets/icons/yanolja_Icon.svg?react";
import CautionIcon from "@assets/icons/CautionIcon.svg?react";
import QuestionIcon from "@assets/icons/QuestionIcon.svg?react";

interface YanoljaProps {
  type: "yanolja";
  content: string;
  shape?: "lineFill";
}

interface QuestionProps {
  type: "question";
  title: string;
  content: string;
  shape?: "line";
}

interface DefaultProps {
  type: "default";
  title: string;
  content?: string;
  shape?: "line" | "fill" | "lineFill";
}

type NoticeProps = YanoljaProps | DefaultProps | QuestionProps;

const Notice = (props: NoticeProps) => {
  switch (props.type) {
    case "yanolja":
      return (
        <S.NoticeWrapper className={props.shape ? `${props.shape} yanolja` : "yanolja"}>
          <YanoljaIcon />
          <S.TextWrapper>{props.content}</S.TextWrapper>
        </S.NoticeWrapper>
      );
    case "question":
      return (
        <S.NoticeWrapper className={props.shape ? `${props.shape} question` : "question"}>
          <QuestionIcon />
          <S.TextWrapper>
            <S.NoticeTitle className={props.type}>{props.title}</S.NoticeTitle>
            <S.TextWrapper>{props.content}</S.TextWrapper>
          </S.TextWrapper>
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
