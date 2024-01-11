import BaseButton from "@components/buttons/BaseButton";
import ResetIcon from "@assets/icons/resetIcon.svg?react";
import * as S from "./styles";
import { FlexCenter } from "@styles/base";
import { useState } from "react";
import Modal from "@components/modal";

interface BottomActionsProps {
  isActive: boolean;
}

const BottomActions = ({ isActive = false }: BottomActionsProps) => {
  const [isResetModalOpen, setResetModalOpen] = useState(false);

  const handleReset = () => {
    // url params 초기화
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
        <BaseButton type="icon" width="auto">
          검색하기
        </BaseButton>
      ) : (
        <BaseButton type="disabled-icon" width="auto">
          검색하기
        </BaseButton>
      )}
    </FlexCenter>
  );
};

export default BottomActions;
