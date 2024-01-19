import ColumnCard from "@components/card/ColumnCard";
import { OptionCardType } from "../SpecialServices";

import * as C from "../SpecialServices/styles";
import * as S from "./styles";

import { useState } from "react";
import ManipulationChip from "@components/chips/ManipulationChip";
import { Link } from "react-router-dom";

const optionList = [
  { path: "SAUNA", name: "사우나" },
  { path: "ROOF_TOP", name: "루프탑" },
  { path: "POOL", name: "수영장" },
  { path: "GYM", name: "피트니스" },
  { path: "LOUNGE_BAR", name: "라운지바" },
  { path: "PARKING", name: "주차 가능" },
  { path: "PARTY_ROOM", name: "파티룸" }
];

const products: OptionCardType[] = [
  {
    id: 1,
    image: "https://bit.ly/2Z4KKcF",
    accommodationName: "파라스파라 서울 더 그레이트 현대 런던1",
    roomName: "Forest Tower Deluxe King1",
    checkIn: new Date("2024-01-15"),
    checkOut: new Date("2024-01-16"),
    price: 1029000,
    sellingPrice: 264000
  },
  {
    id: 2,
    image: "https://bit.ly/2Z4KKcF",
    accommodationName: "파라스파라 서울 더 그레이트 현대 런던2",
    roomName: "Forest Tower Deluxe King2",
    checkIn: new Date("2024-01-12"),
    checkOut: new Date("2024-01-13"),
    price: 2000000,
    sellingPrice: 1500000
  },
  {
    id: 3,
    image: "https://bit.ly/2Z4KKcF",
    accommodationName: "파라스파라 서울 더 그레이트 현대 런던2",
    roomName: "Forest Tower Deluxe King2",
    checkIn: new Date("2024-01-12"),
    checkOut: new Date("2024-01-13"),
    price: 2000000,
    sellingPrice: 1500000
  }
];

const SubServices = () => {
  const [selectedOption, setSelectedOption] = useState({
    path: "",
    name: ""
  });

  return (
    <>
      <S.TitleWrapper>
        <h2>부가서비스 모아보기</h2>
        <Link to={`/products?${selectedOption.path}`}>전체보기</Link>
      </S.TitleWrapper>
      <S.OptionWrapper>
        {optionList.map((option) => (
          <ManipulationChip
            key={option.path}
            onClick={() => {
              setSelectedOption(option);
            }}
            buttonType={option.name === selectedOption.name ? "abledDefault" : "disabledDefault"}
          >
            {option.name}
          </ManipulationChip>
        ))}
      </S.OptionWrapper>
      <C.CardWrapper>
        {products.map((product) => (
          <ColumnCard key={product.id} product={product} />
        ))}
      </C.CardWrapper>
    </>
  );
};

export default SubServices;
