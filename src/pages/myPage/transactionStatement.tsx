import UpperNavBar from "@components/navBar/upperNavBar";
import * as S from "./styles/transactionStatement.styles";
import Notice from "@components/notice";
import Info from "./components/Info";

interface TransactionStatementProps {
  width?: string;
}

const TransactionStatement = ({ width }: TransactionStatementProps) => {
  return (
    <>
      <UpperNavBar title="거래내역서" type="back" />
      <S.ListCardWrapper width={width}>
        <Notice type="info" content="정상적으로 판매 완료된 주문입니다" shape="lineFill" />
        <Info divType="payInfo" width={width} />
        <Info
          divType="transactionInfo"
          width={width}
          imageURL="https://s3-alpha-sig.figma.com/img/36c2/822d/857605b4a76677c08f70ec465ea3025b?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TnWMooKbyWdNbRJ2LqPUd2wwxWSoyaeca-ZOnAQvkWzxGDGf8XmHfm8kXvpCIkuKwQszL6M58aoRVsHIiTA-Rdj5SkGexDQk6UtpqUMHr-Lj9UfZ~4PqUrVthW5DSVksw~oG465CJJMmTHFKDIsI~kj~uMwLWWS8MKkuqCDzgfZFBHjcRxcj57rO8uGvqQ526PqhKgwqkQlf2Fubf4b2qWOG75VV9M1xbd4fje4e2yiEKkwwTcPXQ3PCKR--M55PrB2b0ysG-QLjE-fY5SsH-pFgpoEXLXZFQKl65hSAlAsrcglFhJmK-8m-bltje-4aQSR1FkseHjsPl49KtCkfjw__"
        />
      </S.ListCardWrapper>
    </>
  );
};

export default TransactionStatement;
