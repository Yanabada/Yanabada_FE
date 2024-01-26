import * as S from "./styles";

import { useState } from "react";
import { AiFillQuestionCircle } from "react-icons/ai";

import { getDayOfWeek } from "@utils/getDayOfWeek";
import { numberFormat } from "@utils/numberFormat";
import BottomSheet from "@components/bottomSheet";
import Notice from "@components/notice";
import CancellationPolicyTable from "@components/priceModal";
import calculateFee from "@utils/calcCancelFee";
import { checkDayOfFee } from "@utils/checkDayOfFee";

interface PriceTableProps {
  originalPrice: number;
  purchasePrice: number;
  policyNumber: string;
  checkInDate: string;
  checkOutDate: string;
  code: string;
  image: string;
  accommodationName: string;
  roomName: string;
}

const PriceTable = ({
  originalPrice,
  purchasePrice,
  policyNumber,
  code,
  image,
  accommodationName,
  roomName,
  checkInDate,
  checkOutDate
}: PriceTableProps) => {
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);

  const bottomSheetProps = {
    title: "취소 규정",
    isVisible: bottomSheetVisible,
    setIsVisible: setBottomSheetVisible
  };

  const cancelFee = checkDayOfFee({ purchasePrice, policyNumber, checkInDate });

  return (
    <>
      <S.PriceTitle>숙소 정보</S.PriceTitle>
      <S.PriceInner>
        <S.PriceInfoBox>
          <div className="info-box__detail">
            <div className="img-bx">
              <img src={image} alt="숙소이미지" />
            </div>
            <div className="txt-bx">
              <p className="number">숙소 예약 번호 {code}</p>
              <p className="tit">{accommodationName}</p>
              <p className="room">{roomName}</p>
              <p className="date">
                {checkInDate} ({getDayOfWeek(checkInDate)}) -{checkOutDate} (
                {getDayOfWeek(checkOutDate)})
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
          {policyNumber === "YNBD_3" ? (
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
                <span>
                  {numberFormat(calculateFee(policyNumber, checkInDate, purchasePrice))}원
                </span>
              </p>
              <BottomSheet {...bottomSheetProps}>
                <S.PolicyInner>
                  <Notice
                    type="default"
                    title={cancelFee}
                    content="아래는 날짜별로 변화하는 취소 수수료이며 정책은 숙소별로 상이합니다."
                    shape="line"
                  />
                  <CancellationPolicyTable
                    checkInDate={checkInDate}
                    purchasePrice={purchasePrice}
                    policyNumber={policyNumber}
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
