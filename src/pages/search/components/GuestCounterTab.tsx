import { useSearchTab } from "../stores/tabStore";
import SearchTab from "./SearchTab";
import GuestCounter from "./SearchTab/GuestCounter";
import { useSearchParams } from "react-router-dom";

import PersonIcon from "@assets/icons/search_Person.svg?react";

const GuestCounterTab = () => {
  const { tab, setTab } = useSearchTab();
  const [searchParams] = useSearchParams();
  const adult = searchParams.get("adult") || 2;
  const child = searchParams.get("child") || 0;

  return (
    <SearchTab
      isOpen={tab === "person"}
      setIsOpen={() => setTab("person")}
      icon={<PersonIcon />}
      leftPlaceholder="인원"
      rightPlaceholder={`성인 ${adult}명 / 아동 ${child}명`}
    >
      <GuestCounter />
    </SearchTab>
  );
};

export default GuestCounterTab;
