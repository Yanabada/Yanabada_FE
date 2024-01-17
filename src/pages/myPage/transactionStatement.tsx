import UpperNavBar from "@components/navBar/upperNavBar";
import * as S from "./styles/transactionStatement.styles";
import Info from "./components/Info";
import BaseButton from "@components/buttons/BaseButton";
import TransactionStatementNotice from "./components/TransactionStatementNotice";

interface TransactionStatementProps {
  width?: string;
  from: "sale" | "purchase" | "cancel";
}

const TransactionStatement = ({ width, from }: TransactionStatementProps) => {
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
              yanoljaPurchasePrice="1,200,000"
              yanabadaPurchasePrice="600,000"
              discountRate={50}
              discountPrice="600,000"
              from="sale"
              payMethod="야놀자페이"
            />
            <Info
              divType="transactionInfo"
              width={width}
              imageURL="https://s3-alpha-sig.figma.com/img/36c2/822d/857605b4a76677c08f70ec465ea3025b?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TnWMooKbyWdNbRJ2LqPUd2wwxWSoyaeca-ZOnAQvkWzxGDGf8XmHfm8kXvpCIkuKwQszL6M58aoRVsHIiTA-Rdj5SkGexDQk6UtpqUMHr-Lj9UfZ~4PqUrVthW5DSVksw~oG465CJJMmTHFKDIsI~kj~uMwLWWS8MKkuqCDzgfZFBHjcRxcj57rO8uGvqQ526PqhKgwqkQlf2Fubf4b2qWOG75VV9M1xbd4fje4e2yiEKkwwTcPXQ3PCKR--M55PrB2b0ysG-QLjE-fY5SsH-pFgpoEXLXZFQKl65hSAlAsrcglFhJmK-8m-bltje-4aQSR1FkseHjsPl49KtCkfjw__"
              accommodationName="파라스파라 서울 더 그레이트 현대..."
              roomName="Forest Tower Deluxe King"
              orderNumber="00000000"
              buyer="USER12345"
              orderDate="2024.01.06(토) 00:00"
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
              yanoljaPurchasePrice="1,200,000"
              yanabadaPurchasePrice="600,000"
              discountRate={50}
              discountPrice="600,000"
              from="purchase"
              payMethod="야놀자페이"
              charge="0"
            />
            <Info
              divType="transactionInfo"
              width={width}
              imageURL="https://s3-alpha-sig.figma.com/img/36c2/822d/857605b4a76677c08f70ec465ea3025b?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TnWMooKbyWdNbRJ2LqPUd2wwxWSoyaeca-ZOnAQvkWzxGDGf8XmHfm8kXvpCIkuKwQszL6M58aoRVsHIiTA-Rdj5SkGexDQk6UtpqUMHr-Lj9UfZ~4PqUrVthW5DSVksw~oG465CJJMmTHFKDIsI~kj~uMwLWWS8MKkuqCDzgfZFBHjcRxcj57rO8uGvqQ526PqhKgwqkQlf2Fubf4b2qWOG75VV9M1xbd4fje4e2yiEKkwwTcPXQ3PCKR--M55PrB2b0ysG-QLjE-fY5SsH-pFgpoEXLXZFQKl65hSAlAsrcglFhJmK-8m-bltje-4aQSR1FkseHjsPl49KtCkfjw__"
              accommodationName="파라스파라 서울 더 그레이트 현대..."
              roomName="Forest Tower Deluxe King"
              orderNumber="00000000"
              buyer="USER12345"
              orderDate="2024.01.06(토) 00:00"
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
              yanoljaPurchasePrice="1,200,000"
              yanabadaPurchasePrice="600,000"
              discountRate={50}
              discountPrice="600,000"
              from="purchase"
              payMethod="야놀자페이"
              charge="0"
            />
            <Info
              divType="transactionInfo"
              width={width}
              imageURL="https://s3-alpha-sig.figma.com/img/36c2/822d/857605b4a76677c08f70ec465ea3025b?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TnWMooKbyWdNbRJ2LqPUd2wwxWSoyaeca-ZOnAQvkWzxGDGf8XmHfm8kXvpCIkuKwQszL6M58aoRVsHIiTA-Rdj5SkGexDQk6UtpqUMHr-Lj9UfZ~4PqUrVthW5DSVksw~oG465CJJMmTHFKDIsI~kj~uMwLWWS8MKkuqCDzgfZFBHjcRxcj57rO8uGvqQ526PqhKgwqkQlf2Fubf4b2qWOG75VV9M1xbd4fje4e2yiEKkwwTcPXQ3PCKR--M55PrB2b0ysG-QLjE-fY5SsH-pFgpoEXLXZFQKl65hSAlAsrcglFhJmK-8m-bltje-4aQSR1FkseHjsPl49KtCkfjw__"
              accommodationName="파라스파라 서울 더 그레이트 현대..."
              roomName="Forest Tower Deluxe King"
              orderNumber="00000000"
              buyer="USER12345"
              orderDate="2024.01.06(토) 00:00"
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
