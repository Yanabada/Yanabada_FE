import * as S from "./styles/history.styles";
import UpperNavBar from "@components/navBar/upperNavBar";
import ListCard from "@components/card/ListCard";
import useSalesHistory from "./hooks/useSalesHistory";
import formatNumberWithCommas from "@pages/myPage/utils/formatNumberWithCommas";
import formatTimeUntilSaleEnd from "./utils/formatTimeUntilSaleEnd";
import { Suspense, useEffect, useState } from "react";

// FIXME: 모듈화
interface SalesHistoryProps {
  width?: string;
}

interface SaleProduct {
  accommodationName: string;
  image: string;
  productId: number;
  roomName: string;
  saleEnd: string;
  sellingPrice: number;
  status: "ON_SALE" | "SOLD_OUT" | "BOOKING" | "TIMEOUT";
  tradeId: number;
}

const SalesHistory = ({ width }: SalesHistoryProps) => {
  const { data, error, refetch } = useSalesHistory();

  if (error) {
    console.log(error);
  }

  const determineCardType = (status: string) => {
    switch (status) {
      case "ON_SALE":
        return "sale";
      case "SOLD_OUT":
        return "saleEnd";
      case "BOOKING":
        return "approval_sale";
      case "TIMEOUT":
        return "saleCanceled";
    }
  };

  const determineBadgeText = (status: string | undefined) => {
    switch (status) {
      case "sale":
        return "판매중";
      case "saleEnd":
        return "판매완료";
      case "approval_sale":
        return "판매대기";
      case "saleCanceled":
        return "판매취소";
    }
  };

  const [currentTab, setCurrentTab] = useState("all");
  const [filteredData, setFilteredData] = useState<SaleProduct[]>();

  useEffect(() => {
    switch (currentTab) {
      case "all":
        setFilteredData(data);
        break;
      case "waitSale":
        setFilteredData(data.filter((product) => product.status === "BOOKING"));
        break;
      case "onSale":
        setFilteredData(data.filter((product) => product.status === "ON_SALE"));
        break;
      case "saleEnd":
        setFilteredData(data.filter((product) => product.status === "SOLD_OUT"));
        break;
      case "saleCanceled":
        setFilteredData(data.filter((product) => product.status === "TIMEOUT"));
        break;
    }
  }, [data, currentTab]);

  return (
    <Suspense>
      <UpperNavBar title="판매내역" type="back" />
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
          <S.MiddleTextWrapper onClick={() => setCurrentTab("waitSale")}>
            {currentTab === "waitSale" ? (
              <S.MiddleLeftText>판매대기</S.MiddleLeftText>
            ) : (
              <S.MiddleRightText>판매대기</S.MiddleRightText>
            )}

            {currentTab === "waitSale" && <S.UnderLine />}
          </S.MiddleTextWrapper>
        </S.MiddleWrapper>
        <S.MiddleWrapper>
          <S.MiddleTextWrapper onClick={() => setCurrentTab("onSale")}>
            {currentTab === "onSale" ? (
              <S.MiddleLeftText>판매중</S.MiddleLeftText>
            ) : (
              <S.MiddleRightText>판매중</S.MiddleRightText>
            )}

            {currentTab === "onSale" && <S.UnderLine />}
          </S.MiddleTextWrapper>
        </S.MiddleWrapper>
        <S.MiddleWrapper>
          <S.MiddleTextWrapper onClick={() => setCurrentTab("saleEnd")}>
            {currentTab === "saleEnd" ? (
              <S.MiddleLeftText>판매완료</S.MiddleLeftText>
            ) : (
              <S.MiddleRightText>판매완료</S.MiddleRightText>
            )}

            {currentTab === "saleEnd" && <S.UnderLine />}
          </S.MiddleTextWrapper>
        </S.MiddleWrapper>
        <S.MiddleWrapper>
          <S.MiddleTextWrapper onClick={() => setCurrentTab("saleCanceled")}>
            {currentTab === "saleCanceled" ? (
              <S.MiddleLeftText>판매취소</S.MiddleLeftText>
            ) : (
              <S.MiddleRightText>판매취소</S.MiddleRightText>
            )}

            {currentTab === "saleCanceled" && <S.UnderLine />}
          </S.MiddleTextWrapper>
        </S.MiddleWrapper>
      </S.PointsMiddleContainer>

      <S.ListCardWrapper width={width}>
        {filteredData?.map((product) => (
          <div key={product.productId}>
            <ListCard
              cardType={determineCardType(product.status)}
              width={width}
              imageURL={product.image}
              accommodationName={product.accommodationName}
              timerText={formatTimeUntilSaleEnd(product.saleEnd)}
              roomName={product.roomName}
              price={formatNumberWithCommas(product.sellingPrice)}
              badgeText={determineBadgeText(determineCardType(product.status))}
              productId={product.productId}
              tradeId={product.tradeId}
              statusText="판매 완료되었어요."
              refetch={refetch}
            />
          </div>
        ))}
      </S.ListCardWrapper>
    </Suspense>
  );
};

export default SalesHistory;
