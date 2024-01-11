import * as S from "./style";

const optionList = [
  { id: "SAUNA", name: "사우나", search: "?options=SAUNA" },
  { id: "ROOF_TOP", name: "루프탑", search: "?options=ROOF_TOP" },
  { id: "POOL", name: "수영장", search: "?options=POOL" },
  { id: "GYM", name: "피트니스", search: "?options=GYM" },
  { id: "LOUNGE_BAR", name: "라운지바", search: "?options=LOUNGE_BAR" },
  { id: "PARKING", name: "주차 가능", search: "?options=PARKING" },
  { id: "PARTY_ROOM", name: "파티룸", search: "?options=PARTY_ROOM" }
];

const OptionTab = () => {
  return (
    <S.OptionContainer>
      {optionList.map((category, index) => {
        return <S.OptionList key={index}>{category.name}</S.OptionList>;
      })}
    </S.OptionContainer>
  );
};

export default OptionTab;
