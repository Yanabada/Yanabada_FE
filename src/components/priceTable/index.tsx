import * as S from "./styles";

import { useState } from "react";
import { AiFillQuestionCircle } from "react-icons/ai";

import { getDayOfWeek } from "@utils/getDayOfWeek";
import { numberFormat } from "@utils/numberFormat";
import BottomSheet from "@components/bottomSheet";
import Notice from "@components/notice";
import CancellationPolicyTable from "@components/priceModal";
import { checkDayOfFee } from "@utils/checkDayOfFee";
import calculateFee from "@utils/calcCancelFee";

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
  const today = new Date();

  const cancelFee: React.ReactNode = (
    <span>{numberFormat(calculateFee(policyNumber, checkInDate, today, purchasePrice))} 원</span>
  );

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
              <p className="price">{cancelFee}</p>
              <BottomSheet {...bottomSheetProps}>
                <S.PolicyInner>
                  <Notice
                    type="default"
                    title={checkDayOfFee({
                      purchasePrice,
                      policyNumber: policyNumber,
                      checkInDate: checkInDate
                    })}
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
