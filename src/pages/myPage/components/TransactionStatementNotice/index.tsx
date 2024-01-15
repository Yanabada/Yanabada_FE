import * as S from "./styles";
import * as CS from "@components/notice/styles";
import { RiErrorWarningFill } from "react-icons/ri";

interface NoticeProps {
  from: "sale" | "purchase" | "cancel";
}

const TransactionStatementNotice = ({ from }: NoticeProps) => {
  switch (from) {
    case "sale":
      return (
        <CS.NoticeWrapper className="lineFill yanolja">
          <RiErrorWarningFill color="#028161" />
          <S.SaleText>정상적으로 판매 완료된 주문입니다</S.SaleText>
        </CS.NoticeWrapper>
      );
    case "purchase":
      return (
        <CS.NoticeWrapper className="lineFill yanolja">
          <RiErrorWarningFill color="#028161" />
          <S.TextWrapper>
            <S.SaleText>정상적으로 구매 완료된 주문입니다</S.SaleText>
            <S.DetailText>숙소정보는 야놀자 예약내역에서 확인해주세요</S.DetailText>
          </S.TextWrapper>
        </CS.NoticeWrapper>
      );
    case "cancel":
      return (
        <CS.NoticeWrapper className="lineFill yanolja">
          <RiErrorWarningFill color="#9C9C9C" />
          <S.TextWrapper>
            <S.CancelText>구매 취소된 주문입니다.</S.CancelText>
            <S.DetailText>
              구매를 취소하셨거나 판매자가 승인을 거절하여 구매취소되었습니다.
            </S.DetailText>
          </S.TextWrapper>
        </CS.NoticeWrapper>
      );
    default:
      return null;
  }
};

export default TransactionStatementNotice;
