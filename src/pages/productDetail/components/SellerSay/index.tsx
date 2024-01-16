import * as S from "./style";
import { SellerType } from "@pages/productDetail/types/detailType";

interface SellerProps {
  seller: SellerType;
  description: string;
}

const SellerSay = ({ seller, description }: SellerProps) => {
  return (
    <S.Container>
      <S.NickNameContainer>
        <S.Text>판매자 한마디</S.Text>
        <S.NickName>{seller.nickname} 님</S.NickName>
      </S.NickNameContainer>
      <S.SayContainer>
        <S.UserImage src={seller.imageUrl} />
        <S.SayInnerContainer>
          <S.SellerText>{description}</S.SellerText>
        </S.SayInnerContainer>
      </S.SayContainer>
    </S.Container>
  );
};

export default SellerSay;
