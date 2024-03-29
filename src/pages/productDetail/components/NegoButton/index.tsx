import { DetailType } from "@pages/productDetail/types/detailType";
import * as S from "./style";
import { numberFormat } from "@utils/numberFormat";
import BaseButton from "@components/buttons/BaseButton";
import { useNavigate } from "react-router-dom";
import { createChatRoom } from "@pages/productDetail/api/detail";
import { Toaster } from "react-hot-toast";
import Cookies from "js-cookie";
import { formatRemainingTime } from "@utils/formatDateTo";

interface DetailProps {
  data: DetailType;
}

const NegoButton = ({ data }: DetailProps) => {
  const navigate = useNavigate();
  const id = Cookies.get("id") ? JSON.parse(Cookies.get("id")!) : null;
  const isLoggedIn = Cookies.get("isLoggedIn");

  const handleClick = async (type: string) => {
    if (isLoggedIn !== "yes") {
      navigate("/login");
      alert("로그인이 필요한 서비스입니다.");
      return;
    }
    if (type === "chat") {
      if (data.status === "BOOKING") {
        return;
      }
      const response = await createChatRoom(data.id, id);
      const chatRoomCode = response.data.chatRoomCode;
      navigate(`/chat/${chatRoomCode}?productId=${data.id}`);
      return;
    }
    if (type === "purchase") {
      if (data.status === "BOOKING") {
        return;
      }
      navigate(`/purchase?productId=${data.id}`);
    }
  };

  console.log(data.status);
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
                <S.TimerText>{formatRemainingTime(data.saleEndDate)}</S.TimerText>
              </S.TimerContainer>
              <S.ButtonContainer>
                {isLoggedIn && id === data.seller.id ? (
                  <BaseButton
                    width="100%"
                    color="#fff"
                    backgroundColor="#38A3EB"
                    buttonType="default"
                    children="상품 정보 수정"
                    onClick={() => navigate(`/sell/correct/${data.id}?redirect=/detail`)}
                  />
                ) : (
                  <>
                    <BaseButton
                      width="50%"
                      color={data.canNegotiate ? "#0751C3" : "#9C9C9C"}
                      backgroundColor={data.canNegotiate ? "#E6EEF9" : "#F2F2F2"}
                      buttonType={
                        !data.canNegotiate || data.status === "BOOKING"
                          ? "disabled-default"
                          : "default"
                      }
                      children={
                        !data.canNegotiate || data.status === "BOOKING"
                          ? "가격제안불가"
                          : "가격제안하기"
                      }
                      onClick={() => handleClick("chat")}
                    />
                    <BaseButton
                      width="50%"
                      buttonType={data.status === "BOOKING" ? "disabled-default" : "default"}
                      children="결제하기"
                      onClick={() => handleClick("purchase")}
                    />
                  </>
                )}
              </S.ButtonContainer>
            </>
          )}
        </S.RightContainer>
      </S.Container>
    </>
  );
};

export default NegoButton;
