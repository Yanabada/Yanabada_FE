import UpperNavBar from "@components/navBar/upperNavBar";
import * as S from "./styles/register";
import { DetailBlank } from "./styles/detail";
import PriceArea from "@components/priceArea";

const SellRegister = () => {
  const originalPrice = 1200000;
  const purchasePrice = 1200000;
  const cancelFee = 600000;

  const productData = {
    code: "240107f84892a35ed5",
    image: "http://via.placeholder.com/300x300",
    accommodationName: "춘천세종호텔",
    roomName: "스탠다드 룸",
    checkInDate: "2024-01-15",
    checkOutDate: "2024-01-18",
    policyNumber: 2
  };

  return (
    <>
      <UpperNavBar title="상품 등록" type="back" />
      <S.RegisterWrap>
        <S.RegisterInner>
          <S.RegisterTitle>판매 정보를 입력하세요</S.RegisterTitle>
          <PriceArea
            originalPrice={originalPrice}
            purchasePrice={purchasePrice}
            cancelFee={cancelFee}
            productData={productData}
          />
        </S.RegisterInner>
        <DetailBlank />
      </S.RegisterWrap>
    </>
  );
};

export default SellRegister;
