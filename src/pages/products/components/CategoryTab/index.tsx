import * as S from "./style";
import { useSearchParams } from "react-router-dom";

const categoryList = [
  { id: "ALL", name: "전체" },
  { id: "HOTEL_RESORT", name: "호텔/리조트" },
  { id: "PENSION", name: "펜션" },
  { id: "GUESTHOUSE", name: "게스트하우스" },
  { id: "POOL_VILLA", name: "풀빌라" },
  { id: "CAMPING", name: "캠핑" }
];

const CategoryTab = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParams = searchParams.get("category");

  const handleClick = (categoryId: string) => {
    if (categoryId !== "ALL") {
      searchParams.set("category", categoryId);
    } else {
      searchParams.delete("category");
    }
    setSearchParams(searchParams);
  };

  return (
    <S.CategoryContainer>
      {categoryList.map((category) => {
        return (
          <S.CategoryList
            key={category.id}
            onClick={() => handleClick(category.id)}
            className={
              categoryParams === category.id || (!categoryParams && category.id === "ALL")
                ? "selected_category"
                : ""
            }
          >
            {category.name}
          </S.CategoryList>
        );
      })}
    </S.CategoryContainer>
  );
};

export default CategoryTab;
