import { useSearchParams } from "react-router-dom";
import * as S from "./style";

const optionList = [
  { id: "SAUNA", name: "사우나" },
  { id: "ROOF_TOP", name: "루프탑" },
  { id: "POOL", name: "수영장" },
  { id: "GYM", name: "피트니스" },
  { id: "LOUNGE_BAR", name: "라운지바" },
  { id: "PARKING", name: "주차 가능" },
  { id: "PARTY_ROOM", name: "파티룸" }
];

const OptionTab = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const optionsParams = searchParams.getAll("options");

  const handleClick = (optionId: string) => {
    if (!optionsParams.includes(optionId)) {
      searchParams.append("options", optionId);
    } else {
      searchParams.delete("options", optionId);
    }
    setSearchParams(searchParams);
  };
  return (
    <S.OptionContainer>
      {optionList.map((option) => {
        return (
          <S.OptionList
            key={option.id}
            className={optionsParams.includes(option.id) ? "selected_option" : ""}
            onClick={() => handleClick(option.id)}
          >
            {option.name}
          </S.OptionList>
        );
      })}
    </S.OptionContainer>
  );
};

export default OptionTab;
