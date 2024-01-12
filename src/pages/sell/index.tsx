import UpperNavBar from "@components/navBar/upperNavBar";
import * as S from "./styles/styles";

const Sell = () => {
  return (
    <>
      <UpperNavBar title="양도하기" type="back" />
      <S.ProductListWrap>
        <S.NoticeTitle>
          판매할 숙소의 예약 내역을 선택하세요 <span>(필수)*</span>
        </S.NoticeTitle>
        <S.ListWrap>
          <S.ListCard>카드</S.ListCard>
          <button>상품 등록하기</button>
        </S.ListWrap>
        {/* 상품이 없는 경우 */}
        {/* <S.NoListWrap>
          <img src="/src/assets/noitems-logo.png" />
          <p className="tit">양도 가능한 상품이 없어요.</p>
          <p className="desc">
            야나바다에서는 야놀자에서 구매하신 숙소 중<br />
            무료 취소가 불가능한 상품만
            <br />
            양도 거래가 가능합니다.
          </p>
        </S.NoListWrap> */}
      </S.ProductListWrap>
    </>
  );
};

export default Sell;
