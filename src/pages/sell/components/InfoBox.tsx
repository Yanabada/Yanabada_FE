import * as S from "@components/priceArea/styles";

import { getDayOfWeek } from "@utils/getDayOfWeek";
interface InfoBoxProps {
  infoProps: {
    code: string;
    accommodationImage: string;
    accommodationName: string;
    roomName: string;
    checkInDate: string;
    checkOutDate: string;
    checkInTime: string;
    checkOutTime: string;
  };
}

const InfoBox = ({ infoProps }: InfoBoxProps) => {
  const {
    accommodationImage,
    code,
    accommodationName,
    roomName,
    checkInDate,
    checkOutDate,
    checkInTime,
    checkOutTime
  } = infoProps;

  return (
    <S.PriceInfoBox>
      <div className="info-box__detail">
        <div className="img-bx">
          <img src={accommodationImage} alt="썸네일" />
        </div>
        <div className="txt-bx">
          <p className="number">숙소 예약 번호 {code}</p>
          <p className="tit">{accommodationName}</p>
          <p className="room">{roomName}</p>
          <p className="date">
            {checkInDate} ({getDayOfWeek(checkInDate)}) - {checkOutDate} (
            {getDayOfWeek(checkOutDate)})
          </p>
          <p className="time">
            체크인 {checkInTime} | 체크아웃 {checkOutTime}
          </p>
        </div>
      </div>
    </S.PriceInfoBox>
  );
};

export default InfoBox;
