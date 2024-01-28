import * as S from "./style";
import { SellerType } from "@pages/productDetail/types/detailType";

interface SayProps {
  seller: SellerType;
  description: string;
  borderRadius?: string;
}

const Say = ({ seller, description, ...props }: SayProps) => {
  return (
    <S.SayContainer>
      <S.UserImage src={seller.image} />
      <S.SayInnerContainer {...props}>
        <S.SellerText>{description}</S.SellerText>
      </S.SayInnerContainer>
    </S.SayContainer>
  );
};

export default Say;
