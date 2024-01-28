import * as S from "./style";
import Say from "@components/say";
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
      <Say
        seller={seller}
        description={description.length > 0 ? description : "작성된 판매자 한마디가 없습니다."}
      />
    </S.Container>
  );
};

export default SellerSay;
