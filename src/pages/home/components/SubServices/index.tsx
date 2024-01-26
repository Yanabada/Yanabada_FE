import ColumnCard from "@components/card/ColumnCard";

import * as C from "../SpecialServices/styles";
import * as S from "./styles";

import { useState } from "react";
import ManipulationChip from "@components/chips/ManipulationChip";
import { Link } from "react-router-dom";
import useProducts from "@pages/products/api/queries";
import { Option } from "@pages/products/api/products";

const optionList: { path: Option; name: string }[] = [
  { path: "SAUNA", name: "사우나" },
  { path: "ROOF_TOP", name: "루프탑" },
  { path: "POOL", name: "수영장" },
  { path: "GYM", name: "피트니스" },
  { path: "LOUNGE_BAR", name: "라운지바" },
  { path: "PARKING", name: "주차 가능" },
  { path: "PARTY_ROOM", name: "파티룸" }
];

const SubServices = () => {
  const [selectedOption, setSelectedOption] = useState({
    path: "",
    name: ""
  });
  const { data: products } = useProducts({
    options: selectedOption.path ? [selectedOption.path as Option] : [],
    isHidingSoldOut: true
  });

  return (
    <>
      <S.TitleWrapper>
        <h2>부가서비스 모아보기</h2>
        <Link to={`/products?option=${selectedOption.path}`}>전체보기</Link>
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
