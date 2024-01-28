import * as S from "./styles";
import { RiTimerLine } from "react-icons/ri";
import RecentStore from "@pages/home/stores/recentStore";
import { formatDateTo, formatRemainingTime } from "@utils/formatDateTo";
import { Link } from "react-router-dom";

const RecentlyRowCard = () => {
  const { recentItem } = RecentStore();

  return (
    <S.Wrapper>
      {recentItem.map((item) => (
        <Link to={`/products/${item.id}`} key={item.id}>
          <S.Container>
            <S.ImageContainer>
              <S.Image src={item.image} alt="숙소 이미지" />
            </S.ImageContainer>
            <S.InformationContainer>
              <S.ProductContainer>
                <S.ProductName>{item.accommodationName}</S.ProductName>
                <S.RoomName>{item.roomName}</S.RoomName>
                <S.Period>
                  {formatDateTo(item.checkInDate)} ~ {formatDateTo(item.checkOutDate)}
                </S.Period>
              </S.ProductContainer>
              <S.TimerContainer>
                <RiTimerLine className="TimeIcon" />
                <S.TimerText>{formatRemainingTime(item.saleEnd)}</S.TimerText>
              </S.TimerContainer>
            </S.InformationContainer>
          </S.Container>
        </Link>
      ))}
    </S.Wrapper>
  );
};

export default RecentlyRowCard;
