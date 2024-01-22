import * as S from "./keyword.style";
import ImageButton from "@components/buttons/ImageButton";
import { keywordList } from "@pages/search/constants/keyword";
import { useSearchParams } from "react-router-dom";

const Keyword = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const keywordParams = searchParams.get("keyword");

  const handleClick = (keywordName: string) => {
    if (keywordName !== "") {
      searchParams.set("keyword", keywordName);
    } else {
      searchParams.delete("keyword");
    }
    setSearchParams(searchParams);
  };

  return (
    <S.Container>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <S.InputLabel>
          <S.Input
            placeholder="위치 장소 등을 입력해보세요"
            onChange={(event) => handleClick(event.target.value)}
            value={keywordParams ?? ""}
          />
        </S.InputLabel>
      </form>
      <S.Text>추천 키워드</S.Text>
      <S.ImageContainer>
        {keywordList.map((keyword) => (
          <div key={keyword.id} onClick={() => handleClick(keyword.name)}>
            <ImageButton imageURL={keyword.url} children={keyword.name} width="5.8rem" />
          </div>
        ))}
      </S.ImageContainer>
    </S.Container>
  );
};

export default Keyword;
