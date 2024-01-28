import { Link } from "react-router-dom";
import * as S from "./styles";
import HotelIcon from "@assets/icons/hotel.svg?react";
import PensionIcon from "@assets/icons/pension.svg?react";
import PoolVillaIcon from "@assets/icons/pool_villa.svg?react";
import CampingIcon from "@assets/icons/camping.svg?react";
import GuestHouseIcon from "@assets/icons/guest_house.svg?react";

const categoryList = [
  {
    id: "HOTEL_RESORT",
    name: "호텔/리조트",
    search: "?category=HOTEL_RESORT",
    icon: <HotelIcon />
  },
  { id: "PENSION", name: "펜션", search: "?category=PENSION", icon: <PensionIcon /> },
  { id: "POOL_VILLA", name: "풀빌라", search: "?category=POOL_VILLA", icon: <PoolVillaIcon /> },
  { id: "CAMPING", name: "캠핑", search: "?category=CAMPING", icon: <CampingIcon /> },
  {
    id: "GUESTHOUSE",
    name: "게스트하우스",
    search: "?category=GUESTHOUSE",
    icon: <GuestHouseIcon />
  }
];

const CategoryList = () => {
  return (
    <S.Container>
      <S.Title>카테고리</S.Title>
      <S.CategoryWrapper>
        {categoryList.map((category) => (
          <Link key={category.id} to={`products${category.search}`}>
            <S.CategoryIconBox>{category.icon}</S.CategoryIconBox>
            <span>{category.name}</span>
          </Link>
        ))}
      </S.CategoryWrapper>
    </S.Container>
  );
};

export default CategoryList;
