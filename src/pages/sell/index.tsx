import UpperNavBar from "@components/navBar/upperNavBar";
import * as S from "./styles/styles";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa6";
import Notice from "@components/notice";
import AuthenticationButton from "@components/buttons/AuthenticationButton";

const Sell = () => {
  return (
    <>
      <UpperNavBar title="양도하기" type="back" />
      <S.ProductListWrap>
        <S.NoticeTitle>
          판매할 숙소의 예약 내역을 선택하세요 <span>(필수)*</span>
        </S.NoticeTitle>
        <Notice
          type="yanolja"
          content="야나바다에서는 야놀자에서 인증된 숙소 매물만을 거래할 수 있습니다."
          shape="lineDark"
        />
        <S.ListWrap>
          <S.ListCard>
            <label htmlFor="radioButton">
              <div className="list-card">
                <p className="list-card__title">
                  파라스파라 서울 더 그레이트 현대 런던
                  <input type="radio" id="radioButton" name="ProductList" />
                </p>
                <div className="list-card__body">
                  <p className="title">숙소 예약 번호 20231219186542325</p>
                  <div className="inner">
                    <div className="img-bx">
                      <img src="https://via.placeholder.com/100x100" alt="썸네일" />
                    </div>
                    <div className="txt-bx">
                      <p className="tit">Forest Tower Deluxe King</p>
                      <p className="date">2024.01.08 (화) - 2023.01.11 (목)</p>
                      <p className="time">체크인 14:00 | 체크아웃 11:00</p>
                    </div>
                  </div>
                  <Link to="/sell/detail">
                    <AuthenticationButton type="disabled" width="100%">
                      상세보기
                    </AuthenticationButton>
                  </Link>
                </div>
              </div>
            </label>
          </S.ListCard>
          <S.ListCard>
            <label htmlFor="radioButton">
              <div className="list-card">
                <p className="list-card__title">
                  파라스파라 서울 더 그레이트 현대 런던
                  <input type="radio" id="radioButton" name="ProductList" />
                </p>
                <div className="list-card__body">
                  <p className="title">숙소 예약 번호 20231219186542325</p>
                  <div className="inner">
                    <div className="img-bx">
                      <img src="https://via.placeholder.com/100x100" alt="썸네일" />
                    </div>
                    <div className="txt-bx">
                      <p className="tit">Forest Tower Deluxe King</p>
                      <p className="date">2024.01.08 (화) - 2023.01.11 (목)</p>
                      <p className="time">체크인 14:00 | 체크아웃 11:00</p>
                    </div>
                  </div>
                  <AuthenticationButton type="disabled" width="100%">
                    상세보기
                  </AuthenticationButton>
                </div>
              </div>
            </label>
          </S.ListCard>
        </S.ListWrap>
        {/* 상품이 없는 경우 */}
        {/* <S.NoListWrap>
          <div className="no-list">
            <img src="/src/assets/noitems-logo.png" />
            <p className="no-list__tit">양도 가능한 상품이 없어요.</p>
            <p className="no-list__desc">
              야나바다에서는 야놀자에서 구매하신 숙소 중<br />
              무료 취소가 불가능한 상품만
              <br />
              양도 거래가 가능합니다.
            </p>
          </div>
        </S.NoListWrap> */}
        <S.ListButton>
          <Link to="/sell/register">
            상품 등록하기 <FaChevronRight />
          </Link>
        </S.ListButton>
      </S.ProductListWrap>
    </>
  );
};

export default Sell;
