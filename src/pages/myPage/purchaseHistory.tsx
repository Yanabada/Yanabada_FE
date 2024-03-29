import * as S from "./styles/history.styles";
import UpperNavBar from "@components/navBar/upperNavBar";
import ListCard from "@components/card/ListCard";
import { useEffect, useState } from "react";
import formatNumberWithCommas from "@pages/myPage/utils/formatNumberWithCommas";
import formatTimeUntilSaleEnd from "./utils/formatTimeUntilSaleEnd";
import usePurchaseHistory from "./hooks/usePurchaseHistory";
import useIntersect from "@pages/products/hooks/useIntersect";
import { useNavigate } from "react-router";

interface TradeData {
  tradeId: number;
  productId: number;
  accommodationName: string;
  accommodationImage: string;
  sellerNickname: string;
  tradeRegisteredTime: string;
  saleEndDate: string;
  roomName: string;
  price: number;
  status: "WAITING" | "COMPLETED" | "CANCELED" | "REJECTED";
}

const PurchaseHistory = ({ width }: S.HistoryProps) => {
  const determineCardType = (status: string) => {
    switch (status) {
      case "WAITING":
        return "approval_wait";
      case "COMPLETED":
        return "purchased";
      case "CANCELED":
      case "REJECTED":
        return "purchasedCanceled";
    }
  };

  const determineBadgeText = (status: string | undefined) => {
    switch (status) {
      case "approval_wait":
        return "승인대기";
      case "purchased":
        return "구매완료";
      case "purchasedCanceled":
        return "구매취소";
    }
  };

  const { data, error, refetch, hasNextPage, isFetching, fetchNextPage } = usePurchaseHistory();
  const ref = useIntersect<HTMLDivElement>(async (entry, observer) => {
    observer.unobserve(entry.target);
    if (hasNextPage && !isFetching && data.length > 0) {
      fetchNextPage();
    }
  });

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
      case "approval_wait":
        setFilteredData(data.filter((product) => product.status === "WAITING"));
        break;
      case "purchased":
        setFilteredData(data.filter((product) => product.status === "COMPLETED"));
        break;
      case "purchasedCanceled":
        setFilteredData(
          data.filter((product) => product.status === "CANCELED" || product.status === "REJECTED")
        );
        break;
    }
  }, [data, currentTab]);

  const navigate = useNavigate();

  return (
    <>
      <UpperNavBar title="구매내역" type="back" isCustom customBack={() => navigate("/mypage")} />
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
          <S.MiddleTextWrapper onClick={() => setCurrentTab("approval_wait")}>
            {currentTab === "approval_wait" ? (
              <S.MiddleLeftText>승인대기</S.MiddleLeftText>
            ) : (
              <S.MiddleRightText>승인대기</S.MiddleRightText>
            )}

            {currentTab === "approval_wait" && <S.UnderLine />}
          </S.MiddleTextWrapper>
        </S.MiddleWrapper>
        <S.MiddleWrapper>
          <S.MiddleTextWrapper onClick={() => setCurrentTab("purchased")}>
            {currentTab === "purchased" ? (
              <S.MiddleLeftText>구매완료</S.MiddleLeftText>
            ) : (
              <S.MiddleRightText>구매완료</S.MiddleRightText>
            )}

            {currentTab === "purchased" && <S.UnderLine />}
          </S.MiddleTextWrapper>
        </S.MiddleWrapper>
        <S.MiddleWrapper>
          <S.MiddleTextWrapper onClick={() => setCurrentTab("purchasedCanceled")}>
            {currentTab === "purchasedCanceled" ? (
              <S.MiddleLeftText>구매취소</S.MiddleLeftText>
            ) : (
              <S.MiddleRightText>구매취소</S.MiddleRightText>
            )}

            {currentTab === "purchasedCanceled" && <S.UnderLine />}
          </S.MiddleTextWrapper>
        </S.MiddleWrapper>
      </S.PointsMiddleContainer>
      <S.ListCardWrapper width={width}>
        {filteredData?.map((product, index) => (
          <div key={product.productId}>
            <ListCard
              cardType={determineCardType(product.status)}
              width={width}
              imageURL={product.accommodationImage}
              accommodationName={product.accommodationName}
              buyerInfo={`판매자 : ${product.sellerNickname}`}
              saleDate={product.tradeRegisteredTime}
              timerText={formatTimeUntilSaleEnd(product.tradeRegisteredTime)}
              roomName={product.roomName}
              price={formatNumberWithCommas(product.price)}
              badgeText={determineBadgeText(determineCardType(product.status))}
              productId={product.productId}
              tradeId={product.tradeId}
              statusText={
                product.status === "CANCELED"
                  ? "구매를 취소했어요"
                  : product.status === "REJECTED"
                    ? "판매자가 승인을 거절했어요"
                    : ""
              }
              refetch={refetch}
              ref={(index + 1) % 10 === 0 ? ref : null}
            />
          </div>
        ))}
      </S.ListCardWrapper>
    </>
  );
};

export default PurchaseHistory;
