import * as S from "./styles";

import { useState } from "react";
import { AiFillQuestionCircle } from "react-icons/ai";

import { getDayOfWeek } from "@utils/getDayOfWeek";
import { numberFormat } from "@utils/numberFormat";
import BottomSheet from "@components/bottomSheet";
import Notice from "@components/notice";
import CancellationPolicyTable from "@components/priceModal";
import { checkDayOfFee } from "@utils/checkDayOfFee";
import { productData } from "@/types/priceTable";

interface PriceTableProps {
  originalPrice: number;
  purchasePrice: number;
  cancelFee: number;
  productData: productData;
}

const PriceTable = ({ originalPrice, purchasePrice, cancelFee, productData }: PriceTableProps) => {
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);

  const bottomSheetProps = {
    title: "취소 규정",
    isVisible: bottomSheetVisible,
    setIsVisible: setBottomSheetVisible
  };

  return (
    <>
      <S.PriceTitle>숙소 정보</S.PriceTitle>
      <S.PriceInner>
        <S.PriceInfoBox>
          <div className="info-box__detail">
            <div className="img-bx">
              <img src={productData.image} alt="숙소이미지" />
            </div>
            <div className="txt-bx">
              <p className="number">숙소 예약 번호 {productData.code}</p>
              <p className="tit">{productData.accommodationName}</p>
              <p className="room">{productData.roomName}</p>
              <p className="date">
                {productData.checkInDate} ({getDayOfWeek(productData.checkInDate)}) -
                {productData.checkOutDate} ({getDayOfWeek(productData.checkOutDate)})
              </p>
            </div>
          </div>
        </S.PriceInfoBox>
      </S.PriceInner>
      <S.PriceInner>
        <S.PriceTable>
          <S.PriceTableData>
            <p className="tit">원가</p>
            <p className="price">
              <span>{numberFormat(originalPrice)}</span>원
            </p>
          </S.PriceTableData>
          <S.PriceTableData>
            <p className="tit">실 구매가</p>
            <p className="price">
              <span>{numberFormat(purchasePrice)}</span>원
            </p>
          </S.PriceTableData>
          {productData.policyNumber === "YNBD_3" ? (
            <S.PriceTableData>
              <p className="tit">취소 수수료</p>
              <p className="price">
                <span>취소불가</span>
              </p>
            </S.PriceTableData>
          ) : (
            <S.PriceTableData className="highlight">
              <p className="tit">
                취소 수수료
                <button onClick={() => setBottomSheetVisible(true)}>
                  <AiFillQuestionCircle />
                </button>
              </p>
              <p className="price">
                <span>{numberFormat(cancelFee)}</span>원
              </p>
              <BottomSheet {...bottomSheetProps}>
                <S.PolicyInner>
                  <Notice
                    type="default"
                    title={checkDayOfFee({
                      originalPrice,
                      policyNumber: productData.policyNumber,
                      checkInDate: productData.checkInDate
                    })}
                    content="아래는 날짜별로 변화하는 취소 수수료이며 정책은 숙소별로 상이합니다."
                    shape="line"
                  />
                  <CancellationPolicyTable
                    checkInDate={productData.checkInDate}
                    originalPrice={originalPrice}
                    policyNumber={productData.policyNumber}
                  />
                </S.PolicyInner>
              </BottomSheet>
            </S.PriceTableData>
          )}
        </S.PriceTable>
      </S.PriceInner>
      <S.PriceSpace />
    </>
  );
};

export default PriceTable;
