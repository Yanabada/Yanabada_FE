import SearchTab from "./SearchTab";
import { useSearchTab } from "../stores/tabStore";
import Keyword from "./SearchTab/Keyword";
import SearchIcon from "@assets/icons/search_Search.svg?react";
import { useSearchParams } from "react-router-dom";

const KeywordTab = () => {
  const { tab, setTab } = useSearchTab();

  const [searchParams] = useSearchParams();
  const keywordParams = searchParams.get("keyword");

  return (
    <SearchTab
      isOpen={tab === "keyword"}
      setIsOpen={() => setTab("keyword")}
      icon={<SearchIcon />}
      leftPlaceholder="키워드"
      rightPlaceholder={keywordParams ?? "전체 지역"}
    >
      <Keyword />
    </SearchTab>
  );
};

export default KeywordTab;
