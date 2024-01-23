import UpperNavBar from "@components/navBar/upperNavBar";
import * as S from "./styles/transactionStatement.styles";
import Info from "./components/Info";
import BaseButton from "@components/buttons/BaseButton";
import TransactionStatementNotice from "./components/TransactionStatementNotice";
import useSellTransactionHistory from "./hooks/useSellTransactionHistory";
import { useSearchParams } from "react-router-dom";
import calculateDiscountRate from "./utils/calculateDiscountRate";
import formatDate from "./utils/formatDate";
import formatNumberWithCommas from "./utils/formatNumberWithCommas";

interface TransactionStatementProps {
  width?: string;
  from: "sale" | "purchase" | "cancel";
}

const TransactionStatement = ({ width, from }: TransactionStatementProps) => {
  const [searchParams] = useSearchParams();
  const tradeId = searchParams.get("tradeId");

  const { data, error } = useSellTransactionHistory(Number(tradeId));

  if (error) {
    console.log(error);
  }

  switch (from) {
    case "sale":
      return (
        <>
          <UpperNavBar title="거래내역서" type="back" />
          <S.ListCardWrapper width={width}>
            <TransactionStatementNotice from="sale" />
            <Info
              divType="payInfo"
              width={width}
              yanoljaPurchasePrice={formatNumberWithCommas(data.price)}
              yanabadaPurchasePrice={formatNumberWithCommas(
                data.price - data.sellingPrice
              ).toString()}
              discountRate={calculateDiscountRate(data.price, data.sellingPrice)}
              discountPrice={formatNumberWithCommas(data.sellingPrice)}
              from="sale"
              payMethod="야놀자페이" // FIXME: 결제 수단 받아오기
            />
            <Info
              divType="transactionInfo"
              width={width}
              imageURL={data.accommodationImage}
              accommodationName={data.accommodationName}
              roomName={data.roomName}
              orderNumber={data.tradeCode}
              buyer={data.buyerName}
              orderDate={formatDate(data.registeredDate)}
            />
            <BaseButton buttonType="transparent-red" width={width}>
              거래내역 삭제
            </BaseButton>
          </S.ListCardWrapper>
        </>
      );
    case "purchase":
      return (
        <>
          <UpperNavBar title="거래내역서" type="back" />
          <S.ListCardWrapper width={width}>
            <TransactionStatementNotice from="purchase" />
            <Info
              divType="payInfo-tall"
              width={width}
              yanoljaPurchasePrice={formatNumberWithCommas(data.price)}
              yanabadaPurchasePrice={formatNumberWithCommas(
                data.price - data.sellingPrice
              ).toString()}
              discountRate={calculateDiscountRate(data.price, data.sellingPrice)}
              discountPrice={formatNumberWithCommas(data.sellingPrice)}
              from="purchase"
              payMethod="야놀자페이" // FIXME: 결제 수단 받아오기
              charge="0"
            />
            <Info
              divType="transactionInfo"
              width={width}
              imageURL={data.accommodationImage}
              accommodationName={data.accommodationName}
              roomName={data.roomName}
              orderNumber={data.tradeCode}
              buyer={data.buyerName}
              orderDate={formatDate(data.registeredDate)}
              from="purchase"
            />
            <BaseButton buttonType="transparent-red" width={width}>
              거래내역 삭제
            </BaseButton>
          </S.ListCardWrapper>
        </>
      );
    case "cancel":
      return (
        <>
          <UpperNavBar title="거래내역서" type="back" />
          <S.ListCardWrapper width={width}>
            <TransactionStatementNotice from="cancel" />
            <Info
              divType="payInfo-tall"
              width={width}
              yanoljaPurchasePrice={formatNumberWithCommas(data.price)}
              yanabadaPurchasePrice={formatNumberWithCommas(
                data.price - data.sellingPrice
              ).toString()}
              discountRate={calculateDiscountRate(data.price, data.sellingPrice)}
              discountPrice={formatNumberWithCommas(data.sellingPrice)}
              from="purchase"
              payMethod="야놀자페이" // FIXME: 결제 수단 받아오기
              charge="0"
            />
            <Info
              divType="transactionInfo"
              width={width}
              imageURL={data.accommodationImage}
              accommodationName={data.accommodationName}
              roomName={data.roomName}
              orderNumber={data.tradeCode}
              buyer={data.buyerName}
              orderDate={formatDate(data.registeredDate)}
              from="purchase"
            />
            <BaseButton buttonType="transparent-red" width={width}>
              거래내역 삭제
            </BaseButton>
          </S.ListCardWrapper>
        </>
      );
  }
};

export default TransactionStatement;
