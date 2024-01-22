import { useSearchTab } from "../stores/tabStore";
import SearchTab from "./SearchTab";
import GuestCounter from "./SearchTab/GuestCounter";

import PersonIcon from "@assets/icons/search_Person.svg?react";

const GuestCounterTab = () => {
  const { tab, setTab } = useSearchTab();

  return (
    <SearchTab
      isOpen={tab === "person"}
      setIsOpen={() => setTab("person")}
      icon={<PersonIcon />}
      leftPlaceholder="인원"
      rightPlaceholder="성인 2명"
    >
      <GuestCounter />
    </SearchTab>
  );
};

export default GuestCounterTab;
