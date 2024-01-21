import SearchTab from "./SearchTab";
import { useSearchTab } from "../stores/tabStore";
import KeywordStore from "../stores/KeywordStore";
import Keyword from "./SearchTab/Keyword";
import SearchIcon from "@assets/icons/search_Search.svg?react";

const KeywordTab = () => {
  const { tab, setTab } = useSearchTab();
  const { locationName } = KeywordStore();

  return (
    <SearchTab
      isOpen={tab === "keyword"}
      setIsOpen={() => setTab("keyword")}
      icon={<SearchIcon />}
      leftPlaceholder="키워드"
      rightPlaceholder={locationName}
    >
      <Keyword />
    </SearchTab>
  );
};

export default KeywordTab;
