import * as S from "./style";
import RowCard from "@components/card/RowCard";
import { Link } from "react-router-dom";
import useProducts from "@pages/products/api/queries";

interface CategoryProps {
  title: string;
  link: string;
  rowCardProps: string;
}

const CategoryProduct = ({ title, link, rowCardProps }: CategoryProps) => {
  let orderType: "END_DATE_ASC" | "SALES_PERCENTAGE_DESC";

  if (rowCardProps === "마감임박") {
    orderType = "END_DATE_ASC";
  } else {
    orderType = "SALES_PERCENTAGE_DESC";
  }

  const { data: orderProducts } = useProducts({
    size: 10,
    order: orderType,
    isHidingSoldOut: true
  });

  return (
    <S.Container>
      <S.TextContainer>
        <S.Title>{title}</S.Title>
        <Link to={link}>
          <S.AllTitle>전체보기</S.AllTitle>
        </Link>
      </S.TextContainer>
      <S.CardContainer>
        <RowCard props={rowCardProps} data={orderProducts} />
      </S.CardContainer>
    </S.Container>
  );
};

export default CategoryProduct;
