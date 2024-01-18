import * as S from "./style";
import RowCard from "@components/card/RowCard";
import { Link } from "react-router-dom";

interface CategoryProps {
  title: string;
  link: string;
  rowCardProps: string;
}

const CategoryProduct = ({ title, link, rowCardProps }: CategoryProps) => {
  return (
    <S.Container>
      <S.TextContainer>
        <S.Title>{title}</S.Title>
        <Link to={link}>
          <S.AllTitle>전체보기</S.AllTitle>
        </Link>
      </S.TextContainer>
      <S.CardContainer>
        <RowCard props={rowCardProps} />
      </S.CardContainer>
    </S.Container>
  );
};

export default CategoryProduct;
