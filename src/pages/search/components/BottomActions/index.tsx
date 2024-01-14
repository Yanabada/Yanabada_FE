import BaseButton from "@components/buttons/BaseButton";
import ResetIcon from "@assets/icons/resetIcon.svg?react";
import * as S from "./styles";
import { FlexCenter } from "@styles/base";
import { useState } from "react";
import Modal from "@components/modal";
import { useLocation, useNavigate } from "react-router-dom";

const BottomActions = () => {
  const [isResetModalOpen, setResetModalOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const params = new URLSearchParams(location.search);
  const keyword = params.get("keyword");
  const isActive = !!keyword;

  const handleReset = () => {
    setResetModalOpen(false);
    navigate(location.pathname);
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
        <BaseButton buttonType="icon" width="50%">
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
