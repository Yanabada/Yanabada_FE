import * as S from "./styles";
import YanoljaIcon from "@assets/icons/YanoljaIcon.svg?react";
import CautionIcon from "@assets/icons/CautionIcon.svg?react";
import QuestionIcon from "@assets/icons/QuestionIcon.svg?react";
import InfoIcon from "@assets/icons/infoIcon.svg?react";

interface YanoljaProps {
  type: "yanolja";
  content: string;
  shape?: "lineFill";
}

interface InfoProps {
  type: "info";
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
  color?: "blue" | "orange";
  shape?: "line" | "fill" | "lineFill";
}

type NoticeProps = YanoljaProps | DefaultProps | QuestionProps | InfoProps;

const Notice = (props: NoticeProps) => {
  let icon;
  switch (props.type) {
    case "yanolja":
      return (
        <S.NoticeWrapper className={props.shape ? `${props.shape} yanolja` : "yanolja"}>
          <YanoljaIcon />
          <S.TextWrapper>{props.content}</S.TextWrapper>
        </S.NoticeWrapper>
      );
    case "info":
      return (
        <S.NoticeWrapper className={props.shape ? `${props.shape} yanolja` : "yanolja"}>
          <InfoIcon />
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
      if (props.color === "blue") {
        icon = <QuestionIcon />;
      } else if (props.color === "orange") {
        icon = <CautionIcon />;
      }
      return (
        <S.NoticeWrapper className={props.shape ? props.shape : ""}>
          <S.IconBox>{icon}</S.IconBox>
          <S.TextWrapper>
            <S.NoticeTitle className={props.color ? props.color : ""}>{props.title}</S.NoticeTitle>
            <S.TextWrapper>{props.content}</S.TextWrapper>
          </S.TextWrapper>
        </S.NoticeWrapper>
      );
  }
};

export default Notice;
