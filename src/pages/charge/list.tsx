import * as S from "./styles/list";

import { useState } from "react";

import UpperNavBar from "@components/navBar/upperNavBar";
import CardSectionButton from "@components/buttons/CardSectionButton";
import NoPointIcon from "@assets/icons/noPointIcon.svg?react";
import { numberFormat } from "@utils/numberFormat";

import translateType from "./utils/translateType";
import transContentType from "./utils/transContentType";
import formatDateTime from "./utils/transDateTime";
import { usePaymentList } from "./hooks/usePaymentList";

interface PaymentItem {
  amount: number;
  contents: string;
  contentsType: string;
  historyId: number;
  transactionTime: string;
  type: string;
}

const PointsMiddleTabList = () => {
  const [selectedTab, setSelectedTab] = useState("all");
  const { data: paymentList, isLoading, isError, error } = usePaymentList(selectedTab);
  const payData = paymentList?.histories ?? [];

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <>
      <UpperNavBar title={"야놀자 페이 이용내역"} type="back" />
      <S.CardWrapper>
        <CardSectionButton buttonType="abledPay" width={"100%"} />
      </S.CardWrapper>
      <S.PointsMiddleContainer>
        <S.MiddleWrapper onClick={() => handleTabChange("all")}>
          <S.MiddleLeftText>전체내역</S.MiddleLeftText>
          <S.UnderLine />
        </S.MiddleWrapper>
        <S.MiddleWrapper>
          <S.MiddleTextWrapper onClick={() => handleTabChange("transactions")}>
            <S.MiddleRightText>거래내역</S.MiddleRightText>
          </S.MiddleTextWrapper>
        </S.MiddleWrapper>
        <S.MiddleWrapper>
          <S.MiddleTextWrapper onClick={() => handleTabChange("charges")}>
            <S.MiddleRightText>충전/인출내역</S.MiddleRightText>
          </S.MiddleTextWrapper>
        </S.MiddleWrapper>
      </S.PointsMiddleContainer>
      {payData.length > 0 ? (
        <S.PointsBottomContainer>
          {payData.map((item: PaymentItem, index: number) => (
            <S.PointList key={`list-${index}`}>
              <S.PointListRow>
                <S.PlusReason>
                  {item.contents} {transContentType(item.contentsType)}
                </S.PlusReason>
                <S.PlusPoint
                  className={
                    item.contentsType === "PURCHASE" || item.contentsType === "DISBURSEMENT"
                      ? "minus"
                      : ""
                  }
                >
                  {item.contentsType === "PURCHASE" || item.contentsType === "DISBURSEMENT"
                    ? "-"
                    : "+"}
                  {numberFormat(item.amount)}
                </S.PlusPoint>
              </S.PointListRow>
              <S.PointListRow>
                <S.EventName>{translateType(item.type)}</S.EventName>
                <S.DueDate>{formatDateTime(item.transactionTime)}</S.DueDate>
              </S.PointListRow>
            </S.PointList>
          ))}
        </S.PointsBottomContainer>
      ) : (
        <S.PointsBottomContainer>
          <S.NoItemWrapper>
            <NoPointIcon />
            <S.NoItemText>최근 1년간 기록된 포인트 내역이 없습니다.</S.NoItemText>
          </S.NoItemWrapper>
        </S.PointsBottomContainer>
      )}
    </>
  );
};

export default PointsMiddleTabList;
