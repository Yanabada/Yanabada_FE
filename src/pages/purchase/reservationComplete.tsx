import UpperNavBar from "@components/navBar/upperNavBar";
import * as S from "./reservationComplete.style";

import PaperIcon from "@assets/icons/payment_confirm.svg?react";
import ProfileIconGray from "@assets/icons/profileIcon_gray.svg?react";
import Notice from "@components/notice";
import { Link } from "react-router-dom";

const ReservationComplete = () => {
  return (
    <S.Container>
      <UpperNavBar type="close" title="결제 완료" />
      <S.InfoWrapper>
        <PaperIcon />
        <h2>결제 후 판매 승인 대기중입니다.</h2>
        <p>판매자가 판매를 승인하여야 최종 예약 완료됩니다.</p>
      </S.InfoWrapper>

      <S.Title>상품 및 이용 정보</S.Title>
      <S.CardWrapper>
        <div className="above">
          <S.ImageWarpper>
            <img
              src="https://s3-alpha-sig.figma.com/img/7a66/7ee4/66508d41dfc3fa07524137416d5ec5b6?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GPktuodFjKnh-LxKRr5ui0f6hu61xJIy09e3tWv6yii31FOYdSCYzdi1ck7qCqSS92Yl9l2LCGCUN91TsyGIEbhgAJSwB5ngZMQk5cktPEeXLLYwauh7CTpHUIczfhPT4FlpHCBR-s4W3osIlTj1844buMWiRIppA1JlW3FlqhmknDNxzPW18mBaXZ4wdU3iwcH~cWxqpfF~CUKYrRbOvd7UMl3e9aSajVwbMi2G~1-xPqlId94GhTXeyAErB3caAknZF8Bz11asHcpTESvPU2-D~aGU9lhd5nWkKcHxLVMfUWXFBf3-gxWzc2JWajqoXLfFM6if~uCGCaRoL2FHaQ__"
              alt="숙소 이미지"
            />
          </S.ImageWarpper>
          <div className="info">
            <p className="product">파라스파라 서울 더 그레이트 현대 런던 </p>
            <p className="room">Forest Tower Deluxe King</p>
            <p className="date">2023.12.25 (월) - 2023.12.16 (화)</p>
            <p className="check">체크인 14:00 | 체크아웃 11:00</p>
          </div>
        </div>
        <div className="bottom">
          <ProfileIconGray />
          <p className="guest">기준 2명 / 최대 2명</p>
        </div>
      </S.CardWrapper>
      <S.Spacer height="2rem" />

      <S.Title>예약자 정보</S.Title>
      <S.Flex>
        <S.SubTitle>이름</S.SubTitle>
        <S.Text>김개똥</S.Text>
      </S.Flex>
      <S.Flex>
        <S.SubTitle>휴대폰 번호</S.SubTitle>
        <S.Text>010-1234-5678</S.Text>
      </S.Flex>

      <S.Spacer className="border-bottom" height="1.5rem" />

      <S.Title>이용자 정보</S.Title>
      <S.Flex>
        <S.SubTitle>이름</S.SubTitle>
        <S.Text>김개똥</S.Text>
      </S.Flex>
      <S.Flex>
        <S.SubTitle>휴대폰 번호</S.SubTitle>
        <S.Text>010-1234-5678</S.Text>
      </S.Flex>
      <S.Spacer />

      <S.Title>거래 정보</S.Title>
      <S.NoticeWrapper>
        <Notice
          title="구매 취소는 판매자 승인 전까지만 가능합니다."
          type="default"
          color="orange"
          shape="line"
        />
      </S.NoticeWrapper>
      <S.Flex>
        <S.SubTitle>주문번호</S.SubTitle>
        <S.Text>00000000</S.Text>
      </S.Flex>
      <S.Flex>
        <S.SubTitle>판매자</S.SubTitle>
        <S.Text>강쥐사랑해</S.Text>
      </S.Flex>
      <S.Flex>
        <S.SubTitle>주문일시</S.SubTitle>
        <S.Text>2024.01.06(토) 00:00</S.Text>
      </S.Flex>
      <S.Spacer />

      <S.Title>결제 정보</S.Title>
      <S.Flex>
        <S.SubTitle>상품금액</S.SubTitle>
        <S.Text className="bold">1,200,000원</S.Text>
      </S.Flex>
      <S.Flex>
        <S.SubTitle>수수료</S.SubTitle>
        <S.Text className="bold gray-600">0원</S.Text>
      </S.Flex>
      <S.Flex>
        <S.SubTitle>야놀자 포인트</S.SubTitle>
        <S.Text className="bold gray-500">-0P</S.Text>
      </S.Flex>
      <S.Flex>
        <S.Title>총 결제 금액</S.Title>
        <S.Text className="blue bold">1,200,000원</S.Text>
      </S.Flex>
      <S.Flex>
        <S.SubTitle>결제 수단</S.SubTitle>
        <S.Text>야놀자 페이</S.Text>
      </S.Flex>

      <S.Footer>
        야나바다[(주)야놀자]는 통신판매중개업자로서, 통신판매의 당사자가 아니라는 사실을 고지하며
        상품의 결제, 이용 및 환불 등과 관련한 의무와 책임은 각 판매자에게 있습니다.
      </S.Footer>

      <S.BottomActions>
        <S.Text className="gray center">
          승인 진행상황은 MY야나바다 &gt; 구매내역에서 확인하실 수 있습니다.
        </S.Text>
        <div className="bottom">
          <Link to="/mypage/purchaseHistory">구매내역으로 이동</Link>
          <Link to="/" className="blue">
            홈으로 이동
          </Link>
        </div>
      </S.BottomActions>
    </S.Container>
  );
};

export default ReservationComplete;
