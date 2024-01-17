import { Link } from "react-router-dom";
import * as S from "./styles";

const categoryList = [
  { id: "ALL", name: "전체", search: "" },
  { id: "HOTEL_RESORT", name: "호텔/리조트", search: "?category=HOTEL_RESORT" },
  { id: "MOTEL", name: "모텔", search: "?category=MOTEL" },
  { id: "PENSION", name: "펜션", search: "?category=PENSION" },
  { id: "GUESTHOUSE", name: "게스트하우스", search: "?category=GUESTHOUSE" },
  { id: "POOL_VILLA", name: "풀빌라", search: "?category=POOL_VILLA" }
];

const CategoryList = () => {
  return (
    <S.Container>
      {categoryList.map((category) => (
        <Link to={`products${category.search}`}>
          <S.CategoryWrapper key={category.id}>{category.name}</S.CategoryWrapper>
        </Link>
      ))}
    </S.Container>
  );
};

export default CategoryList;
