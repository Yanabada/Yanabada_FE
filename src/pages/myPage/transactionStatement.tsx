import UpperNavBar from "@components/navBar/upperNavBar";
import Info from "./components/Info";
import BaseButton from "@components/buttons/BaseButton";
import TransactionStatementNotice from "./components/TransactionStatementNotice";
import useSellTransactionHistory from "./hooks/useSellTransactionHistory";
import { useSearchParams } from "react-router-dom";
import calculateDiscountRate from "./utils/calculateDiscountRate";
import formatDate from "./utils/formatDate";
import formatNumberWithCommas from "./utils/formatNumberWithCommas";
import usePurchaseTransactionHistory from "./hooks/usePurchaseTransactionHistory";
import useTradeHistory from "./hooks/useTradeHistory";
import * as CS from "@pages/myPage/styles/history.styles";

interface TransactionStatementProps {
  width?: string;
  from: "sale" | "purchase" | "cancel";
}

const getPaymentMethodText = (method: string): string => {
  switch (method) {
    case "YANOLJA_PAY":
      return "야놀자 페이";
    case "TOSS_PAY":
      return "토스 페이";
    case "BANK_TRANSFER":
      return "무통장 입금";
    case "CREDIT":
      return "카드";
    default:
      return "";
  }
};

const TransactionStatement = ({ width, from }: TransactionStatementProps) => {
  const [searchParams] = useSearchParams();
  const tradeId = searchParams.get("tradeId");

  const { data: sellTransactionHistoryData, error: sellTransactionHistoryError } =
    useSellTransactionHistory(Number(tradeId));

  const { data: purchaseTransactionHistoryData, error: purchaseTransactionHistoryError } =
    usePurchaseTransactionHistory(Number(tradeId));

  const { mutate } = useTradeHistory();

  const purchasePayInfoProps = {
    divType: "payInfo-tall",
    width,
    yanoljaPurchasePrice: formatNumberWithCommas(purchaseTransactionHistoryData.price),
    yanabadaPurchasePrice: formatNumberWithCommas(
      purchaseTransactionHistoryData.sellingPrice + purchaseTransactionHistoryData.fee
    )?.toString(),
    discountRate: calculateDiscountRate(
      purchaseTransactionHistoryData.price,
      purchaseTransactionHistoryData.sellingPrice
    ),
    discountPrice: formatNumberWithCommas(
      purchaseTransactionHistoryData.price - purchaseTransactionHistoryData.sellingPrice
    )?.toString(),
    from,
    payMethod: getPaymentMethodText(purchaseTransactionHistoryData.paymentType),
    charge: purchaseTransactionHistoryData.fee
  };

  const purchaseTransactionInfoProps = {
    divType: "transactionInfo",
    width,
    imageURL: purchaseTransactionHistoryData.product.image,
    accommodationName: purchaseTransactionHistoryData.product.accommodationName,
    roomName: purchaseTransactionHistoryData.product.roomName,
    orderNumber: purchaseTransactionHistoryData.tradeCode,
    seller: purchaseTransactionHistoryData.sellerName,
    orderDate: formatDate(purchaseTransactionHistoryData.registeredDate),
    from
  };

  if (sellTransactionHistoryError) {
    console.log(sellTransactionHistoryError);
  }

  if (purchaseTransactionHistoryError) {
    console.log(purchaseTransactionHistoryError);
  }

  switch (from) {
    case "sale":
      return (
        <>
          <UpperNavBar title="거래내역서" type="back" />
          <CS.ListCardWrapper width={width}>
            <TransactionStatementNotice from="sale" />
            <Info
              divType="payInfo"
              width={width}
              yanoljaPurchasePrice={formatNumberWithCommas(sellTransactionHistoryData.price)}
              yanabadaPurchasePrice={formatNumberWithCommas(
                sellTransactionHistoryData.price - sellTransactionHistoryData.sellingPrice
              )?.toString()}
              discountRate={calculateDiscountRate(
                sellTransactionHistoryData.price,
                sellTransactionHistoryData.sellingPrice
              )}
              discountPrice={formatNumberWithCommas(sellTransactionHistoryData.sellingPrice)}
              from={from}
              payMethod="야놀자페이" // FIXME: 결제 수단 받아오기
            />
            <Info
              divType="transactionInfo"
              width={width}
              imageURL={sellTransactionHistoryData.accommodationImage}
              accommodationName={sellTransactionHistoryData.accommodationName}
              roomName={sellTransactionHistoryData.roomName}
              orderNumber={sellTransactionHistoryData.tradeCode}
              buyer={sellTransactionHistoryData.buyerName}
              orderDate={formatDate(sellTransactionHistoryData.registeredDate)}
              from={from}
            />
            <BaseButton
              buttonType="transparent-red"
              width={width}
              onClick={() => mutate(Number(tradeId))}
            >
              거래내역 삭제
            </BaseButton>
          </CS.ListCardWrapper>
        </>
      );
    case "purchase":
      return (
        <>
          <UpperNavBar title="거래내역서" type="back" />
          <CS.ListCardWrapper width={width}>
            <TransactionStatementNotice from="purchase" />
            <Info {...purchasePayInfoProps} />
            <Info {...purchaseTransactionInfoProps} />
            <BaseButton
              buttonType="transparent-red"
              width={width}
              onClick={() => mutate(Number(tradeId))}
            >
              거래내역 삭제
            </BaseButton>
          </CS.ListCardWrapper>
        </>
      );
    case "cancel":
      return (
        <>
          <UpperNavBar title="거래내역서" type="back" />
          <CS.ListCardWrapper width={width}>
            <TransactionStatementNotice from="cancel" />
            <Info {...purchasePayInfoProps} />
            <Info {...purchaseTransactionInfoProps} />
            <BaseButton
              buttonType="transparent-red"
              width={width}
              onClick={() => mutate(Number(tradeId))}
            >
              거래내역 삭제
            </BaseButton>
          </CS.ListCardWrapper>
        </>
      );
  }
};

export default TransactionStatement;
