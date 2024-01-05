import * as S from "./styles";
import { RiTimerLine } from "react-icons/ri";

const RecentlyRowCard = () => {
  const products = [
    {
      id: 1,
      image: "https://bit.ly/2Z4KKcF",
      accommodationName: "파라스파라 서울 더 그레이트 현대 런던1",
      roomName: "Forest Tower Deluxe King",
      checkIn: "01/10",
      checkOut: "01/13",
      price: 1029000,
      sellingPrice: 264000
    },
    {
      id: 2,
      image: "https://bit.ly/2Z4KKcF",
      accommodationName: "파라스파라 서울 더 그레이트 현대 런던2",
      roomName: "Forest Tower Deluxe King",
      checkIn: "01/12",
      checkOut: "01/13",
      price: 2000000,
      sellingPrice: 1500000
    }
  ];
  return (
    <S.Wrapper>
      {products.map((product) => (
        <S.Container key={product.id}>
          <S.ImageContainer>
            <S.Image src="https://bit.ly/2Z4KKcF'" alt="숙소 이미지" />
          </S.ImageContainer>
          <S.InformationContainer>
            <S.ProductContainer>
              <S.ProductName>{product.accommodationName}</S.ProductName>
              <S.RoomName>{product.roomName}</S.RoomName>
              <S.Period>
                {product.checkIn} ~ {product.checkOut}
              </S.Period>
            </S.ProductContainer>
            <S.TimerContainer>
              <RiTimerLine className="TimeIcon" />
              <S.TimerText>3일 15시간 23분</S.TimerText>
            </S.TimerContainer>
          </S.InformationContainer>
        </S.Container>
      ))}
    </S.Wrapper>
  );
};

export default RecentlyRowCard;
