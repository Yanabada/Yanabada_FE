import * as S from "./style";
import { RoomInfoType } from "@pages/productDetail/types/detailType";

interface RoomInfoProps {
  roomInfo: RoomInfoType;
}

const DetailNotice = ({ roomInfo }: RoomInfoProps) => {
  return (
    <S.Container>
      <S.Text>예약 공지</S.Text>
      <S.NoticeText>
        기준 {roomInfo.minHeadCount}명 / 최대 {roomInfo.maxHeadCount}명
      </S.NoticeText>
      <S.NoticeText>
        체크인 {roomInfo.checkInTime} 이후, 체크아웃 {roomInfo.checkOutTime} 이전
      </S.NoticeText>
      <S.NoticeText>
        * 예약 시 신분증과 일치하는 실명기재가 필요합니다. <br />
        미기재 시 예약 확인이 불가할 수 있습니다.
      </S.NoticeText>
    </S.Container>
  );
};

export default DetailNotice;
