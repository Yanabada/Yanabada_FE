import * as S from "./style";
import { useLocation, Link } from "react-router-dom";

const categoryList = [
  { id: "ALL", name: "전체", search: "" },
  { id: "HOTEL_RESORT", name: "호텔/리조트", search: "?category=HOTEL_RESORT" },
  { id: "MOTEL", name: "모텔", search: "?category=MOTEL" },
  { id: "PENSION", name: "펜션", search: "?category=PENSION" },
  { id: "GUESTHOUSE", name: "게스트하우스", search: "?category=GUESTHOUSE" },
  { id: "POOL_VILLA", name: "풀빌라", search: "?category=POOL_VILLA" }
];

const CategoryTab = () => {
  const { search } = useLocation();

  return (
    <S.CategoryContainer>
      {categoryList.map((category) => {
        return (
          <Link to={category.search} key={category.id}>
            <S.CategoryList className={search === category.search ? "selected_category" : ""}>
              {category.name}
            </S.CategoryList>
          </Link>
        );
      })}
    </S.CategoryContainer>
  );
};

export default CategoryTab;
