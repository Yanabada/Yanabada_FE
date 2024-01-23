import { DetailType } from "@pages/productDetail/types/detailType";
import * as S from "./style";
import { numberFormat } from "@utils/numberFormat";
import BaseButton from "@components/buttons/BaseButton";
import { useNavigate } from "react-router-dom";
import { createChatRoom } from "@pages/productDetail/api/detail";
import { Toaster } from "react-hot-toast";

interface DetailProps {
  data: DetailType;
}

const NegoButton = ({ data }: DetailProps) => {
  const navigate = useNavigate();

  const handleClick = async () => {
    const member = localStorage.getItem("member");
    if (!member) {
      navigate("/login");
      alert("로그인이 필요한 서비스입니다.");
      return;
    }
    const buyerId = JSON.parse(member).id;
    const response = await createChatRoom(8, buyerId);
    const chatRoomCode = response.data.chatRoomCode;
    navigate(`/chat/${chatRoomCode}?productId=${8}`);
  };

  return (
    <>
      <Toaster />
      <S.Container>
        <S.LeftContainer>
          <S.DateText>
            {data.checkInDate.toString()} - {data.checkOutDate.toString()}
          </S.DateText>
          <S.SaleContainer>
            <S.SaleRate>{data.salesPercentage}%</S.SaleRate>
            <S.PriceText>{numberFormat(data.price)}원</S.PriceText>
          </S.SaleContainer>
          <S.SellingText>{numberFormat(data.sellingPrice)}원</S.SellingText>
        </S.LeftContainer>
        <S.RightContainer>
          {data.status === "SOLD_OUT" ? (
            <S.SoldOutText>판매 완료된 숙소입니다.</S.SoldOutText>
          ) : (
            <>
              <S.TimerContainer>
                <S.TimerIcon />
                <S.TimerText>{data.saleEndDate.toString()}</S.TimerText>
              </S.TimerContainer>
              <S.ButtonContainer>
                <BaseButton
                  width="50%"
                  color={data.canNegotiate ? "#0751C3" : "#9C9C9C"}
                  backgroundColor={data.canNegotiate ? "#E6EEF9" : "#F2F2F2"}
                  buttonType="default"
                  children={data.canNegotiate ? "가격 제안하기" : "가격제안불가"}
                  onClick={handleClick}
                />
                <BaseButton width="50%" buttonType="default" children="결제하기" />
              </S.ButtonContainer>
            </>
          )}
        </S.RightContainer>
      </S.Container>
    </>
  );
};

export default NegoButton;
