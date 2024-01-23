import BaseButton from "@components/buttons/BaseButton";
import * as S from "./signInBottomSheet.styles";
import { useEffect, useState } from "react";
import BottomSheet from "@components/bottomSheet";
import { useNavigate } from "react-router-dom";
import Checkbox from "@components/input/Checkbox";

interface BottomSheetProps {
  sheetVisible: boolean;
  setSheetVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignInBottomSheet = ({ sheetVisible, setSheetVisible }: BottomSheetProps) => {
  const navigate = useNavigate();

  // 체크박스
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [isChecked0, setIsChecked0] = useState(false);
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [isChecked4, setIsChecked4] = useState(false);

  useEffect(() => {
    if (isChecked0 && isChecked1 && isChecked2 && isChecked3 && isChecked4) {
      setIsAllChecked(true);
    } else {
      setIsAllChecked(false);
    }
  }, [isChecked0, isChecked1, isChecked2, isChecked3, isChecked4]);

  return (
    <BottomSheet title="약관 동의" isVisible={sheetVisible} setIsVisible={setSheetVisible}>
      <S.AgreementContainer>
        <Checkbox
          checked={isAllChecked}
          setChecked={setIsAllChecked}
          variant="all"
          setList={[setIsChecked0, setIsChecked1, setIsChecked2, setIsChecked3, setIsChecked4]}
        />
        <Checkbox
          variant="individual"
          title="만 14세 이상입니다 (필수)"
          content=""
          hasMoreContent={true}
          checked={isChecked0}
          setChecked={setIsChecked0}
        />
        <Checkbox
          variant="individual"
          title="서비스 이용약관, 개인정보 수집 및 이용 동의 (필수)"
          content=""
          hasMoreContent={true}
          checked={isChecked1}
          setChecked={setIsChecked1}
        />
        <Checkbox
          variant="individual"
          title="개인정보 수집 및 이용 동의 (선택)"
          content=""
          hasMoreContent={true}
          checked={isChecked2}
          setChecked={setIsChecked2}
        />
        <Checkbox
          variant="individual"
          title="숙소 특가, 쿠폰 등 마케팅 수신 동의 (선택)            "
          content="마케팅 정보는 문자, E-mail로 받을 수 있으며 동의 여부는 내정보 관리에서 확인 가능합니다."
          hasMoreContent={true}
          checked={isChecked3}
          setChecked={setIsChecked3}
        />
        <Checkbox
          variant="individual"
          title="위치 정보 이용 약관 동의(선택)"
          content=""
          hasMoreContent={true}
          checked={isChecked4}
          setChecked={setIsChecked4}
        />
        <S.SheetBtnWrapper>
          <BaseButton
            buttonType={isAllChecked || (isChecked1 && isChecked0) ? "default" : "disabled-default"}
            width="100%"
            onClick={() => {
              if (isAllChecked) {
                navigate("/signIn");
              }
            }}
          >
            동의하고 계속하기
          </BaseButton>
        </S.SheetBtnWrapper>
      </S.AgreementContainer>
    </BottomSheet>
  );
};

export default SignInBottomSheet;
