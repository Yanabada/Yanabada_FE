import BaseButton from "@components/buttons/BaseButton";
import ResetIcon from "@assets/icons/resetIcon.svg?react";
import * as S from "./styles";
import { FlexCenter } from "@styles/base";
import { useEffect, useState } from "react";
import Modal from "@components/modal";
import { useNavigate, useSearchParams, useLocation } from "react-router-dom";
import HistoryStore from "@pages/search/stores/historyStore";
import { HistoryType } from "@pages/search/types/history";
import { useGuest } from "@pages/search/stores/guestStore";
// import { useGuest } from "@pages/search/stores/guestStore";

const BottomActions = () => {
  const [isResetModalOpen, setResetModalOpen] = useState(false);
  const { resetGuestCount } = useGuest();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { search } = useLocation();
  // const { adult, child } = useGuest();

  const keyword = searchParams.get("keyword");
  const checkInDate = searchParams.get("checkInDate");
  const checkOutDate = searchParams.get("checkOutDate");
  const adult = searchParams.get("adult");
  const child = searchParams.get("child");
  const isActive = keyword;

  const handleReset = () => {
    resetGuestCount();
    setResetModalOpen(false);
    navigate(location.pathname);
  };

  const { history, setHistory } = HistoryStore();

  useEffect(() => {
    localStorage.setItem("searchHistory", JSON.stringify(history));
  }, [history]);

  const handleLocalStorage = () => {
    const searchHistory: HistoryType = {
      id: new Date(),
      keyword,
      checkInDate,
      checkOutDate,
      adult,
      child
    };
    setHistory([searchHistory, ...history]);
    navigate(`/products/${search}`);
  };

  return (
    <FlexCenter>
      <S.ResetButton onClick={() => setResetModalOpen(true)}>
        <div>
          <ResetIcon />
        </div>
        <span>필터 초기화</span>
      </S.ResetButton>
      <Modal
        title="검색 필터를 초기화 하시겠어요?"
        content="입력하신 모든 정보가 삭제됩니다."
        leftBtnText="아니오"
        leftAction={() => setResetModalOpen(false)}
        rightBtnText="초기화"
        rightAction={handleReset}
        isVisible={isResetModalOpen}
        setIsVisible={setResetModalOpen}
      />
      {isActive ? (
        <BaseButton buttonType="icon" width="50%" onClick={handleLocalStorage}>
          검색하기
        </BaseButton>
      ) : (
        <BaseButton buttonType="disabled-icon" width="50%">
          검색하기
        </BaseButton>
      )}
    </FlexCenter>
  );
};

export default BottomActions;
