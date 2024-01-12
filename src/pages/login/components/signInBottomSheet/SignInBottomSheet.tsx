import BaseButton from "@components/buttons/BaseButton";
import * as S from "./signInBottomSheet.styles";
import { useState } from "react";
import BottomSheet from "@components/bottomSheet";
import { useNavigate } from "react-router-dom";
import Checkbox from "@components/input/Checkbox";

interface BottomSheetProps {
  sheetVisible: boolean;
  setSheetVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignInBottomSheet = ({ sheetVisible, setSheetVisible }: BottomSheetProps) => {
  const navigate = useNavigate();

  const [isAllChecked] = useState(false);

  return (
    <BottomSheet title="약관 동의" isVisible={sheetVisible} setIsVisible={setSheetVisible}>
      <S.AgreementContainer>
        <Checkbox variant="all" />
        <Checkbox
          variant="individual"
          title="만 14세 이상 이용, 서비스 이용약관, 개인정보 수집 및 이용 동의 (필수)"
          content=""
          hasMoreContent={true}
        />
        <Checkbox
          variant="individual"
          title="개인정보 수집 및 이용 동의 (선택)"
          content=""
          hasMoreContent={true}
        />
        <Checkbox
          variant="individual"
          title="숙소 특가, 쿠폰 등 마케팅 수신 동의 (선택)            "
          content="마케팅 정보는 문자, E-mail로 받을 수 있으며 동의 여부는 내정보 관리에서 확인 가능합니다."
          hasMoreContent={true}
        />
        <Checkbox
          variant="individual"
          title="위치 정보 이용 약관 동의(선택)"
          content=""
          hasMoreContent={true}
        />
        <S.SheetBtnWrapper>
          <BaseButton
            type={isAllChecked ? "default" : "disabled-default"}
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
