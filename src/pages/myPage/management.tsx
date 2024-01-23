import * as S from "./styles/history.styles";
import UpperNavBar from "@components/navBar/upperNavBar";
import ListCard from "@components/card/ListCard";
import { useEffect, useState } from "react";
import formatTimeUntilSaleEnd from "./utils/formatTimeUntilSaleEnd";
import useManagement from "./hooks/useManagement";
import formatNumberWithCommas from "@pages/myPage/utils/formatNumberWithCommas";

// FIXME: 모듈화
interface ManagementProps {
  width?: string;
}

interface TradeData {
  tradeId: number;
  accommodationName: string;
  accommodationImage: string;
  buyerNickname: string;
  tradeRegisteredTime: string;
  roomName: string;
  sellingPrice: number;
  status: "WAITING" | "COMPLETED" | "REJECTED" | "CANCELED";
}

const Management = ({ width }: ManagementProps) => {
  const determineCardType = (status: string) => {
    switch (status) {
      case "WAITING":
        return "approval_request";
      case "COMPLETED":
        return "approved";
      case "REJECTED":
        return "purchasedCanceled";
      case "CANCELED":
        return "purchasedCanceled";
    }
  };

  const determineBadgeText = (status: string | undefined) => {
    switch (status) {
      case "approval_request":
        return "승인요청";
      case "approved":
        return "승인완료";
      case "purchasedCanceled":
        return "승인취소";
    }
  };

  const { data, error } = useManagement();

  if (error) {
    console.log(error);
  }

  const [currentTab, setCurrentTab] = useState("all");
  const [filteredData, setFilteredData] = useState<TradeData[]>();

  useEffect(() => {
    switch (currentTab) {
      case "all":
        setFilteredData(data);
        break;
      case "approval_request":
        setFilteredData(data.filter((product) => product.status === "WAITING"));
        break;
      case "purchasedCanceled":
        setFilteredData(
          data.filter((product) => product.status === "REJECTED" || product.status === "CANCELED")
        );
        break;
      case "approved":
        setFilteredData(data.filter((product) => product.status === "COMPLETED"));
        break;
    }
  }, [data, currentTab]);

  return (
    <>
      <UpperNavBar title="승인요청관리" type="back" />
      <S.PointsMiddleContainer width={width}>
        <S.MiddleWrapper onClick={() => setCurrentTab("all")}>
          {currentTab === "all" ? (
            <S.MiddleLeftText>전체</S.MiddleLeftText>
          ) : (
            <S.MiddleRightText>전체</S.MiddleRightText>
          )}

          {currentTab === "all" && <S.UnderLine />}
        </S.MiddleWrapper>
        <S.MiddleWrapper>
          <S.MiddleTextWrapper onClick={() => setCurrentTab("approval_request")}>
            {currentTab === "approval_request" ? (
              <S.MiddleLeftText>승인요청</S.MiddleLeftText>
            ) : (
              <S.MiddleRightText>승인요청</S.MiddleRightText>
            )}

            {currentTab === "approval_request" && <S.UnderLine />}
          </S.MiddleTextWrapper>
        </S.MiddleWrapper>
        <S.MiddleWrapper>
          <S.MiddleTextWrapper onClick={() => setCurrentTab("purchasedCanceled")}>
            {currentTab === "purchasedCanceled" ? (
              <S.MiddleLeftText>승인취소</S.MiddleLeftText>
            ) : (
              <S.MiddleRightText>승인취소</S.MiddleRightText>
            )}

            {currentTab === "purchasedCanceled" && <S.UnderLine />}
          </S.MiddleTextWrapper>
        </S.MiddleWrapper>
        <S.MiddleWrapper>
          <S.MiddleTextWrapper onClick={() => setCurrentTab("approved")}>
            {currentTab === "approved" ? (
              <S.MiddleLeftText>승인완료</S.MiddleLeftText>
            ) : (
              <S.MiddleRightText>승인완료</S.MiddleRightText>
            )}

            {currentTab === "approved" && <S.UnderLine />}
          </S.MiddleTextWrapper>
        </S.MiddleWrapper>
      </S.PointsMiddleContainer>
      <S.ListCardWrapper width={width}>
        {filteredData?.map((product) => (
          <div key={product.tradeId}>
            <ListCard
              cardType={determineCardType(product.status)}
              width={width}
              imageURL={product.accommodationImage}
              accommodationName={product.accommodationName}
              buyerInfo={`구매자 : ${product.buyerNickname}`}
              saleDate={product.tradeRegisteredTime}
              timerText={formatTimeUntilSaleEnd(product.tradeRegisteredTime)}
              roomName={product.roomName}
              price={formatNumberWithCommas(product.sellingPrice.toString())}
              badgeText={determineBadgeText(determineCardType(product.status))}
              productId={product.tradeId}
            />
          </div>
        ))}
      </S.ListCardWrapper>
    </>
  );
};

export default Management;
