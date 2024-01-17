import * as S from "@components/priceArea/styles";

import { getDayOfWeek } from "@utils/getDayOfWeek";

interface InfoBoxProps {
  infoProps: {
    imgUrl: string;
    number: string;
    title: string;
    room: string;
    checkInDate: string;
    checkOutDate: string;
    checkInTime: string;
    checkOutTime: string;
  };
}

const InfoBox = ({ infoProps }: InfoBoxProps) => {
  const { imgUrl, number, title, room, checkInDate, checkOutDate, checkInTime, checkOutTime } =
    infoProps;

  return (
    <S.PriceInfoBox>
      <div className="info-box__detail">
        <div className="img-bx">
          <img src={imgUrl} alt="썸네일" />
        </div>
        <div className="txt-bx">
          <p className="number">숙소 예약 번호 {number}</p>
          <p className="tit">{title}</p>
          <p className="room">{room}</p>
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
