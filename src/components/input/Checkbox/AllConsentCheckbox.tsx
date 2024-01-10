import { ChangeEvent, useState } from "react";
import * as S from "./allConsentCheckbox.style";
import CheckIcon from "@assets/icons/checkbox_Check.svg?react";

const AllConsentCheckbox = () => {
  const [checked, setChecked] = useState(false);

  const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  return (
    <S.Wrapper>
      <S.IconWrapper>
        <S.Input id="agreement" type="checkbox" checked={checked} onChange={handleCheck} />
        <S.Icon>
          <CheckIcon />
        </S.Icon>
      </S.IconWrapper>
      <S.Label htmlFor="agreement">
        전체 동의 <span>(선택 포함)</span>
      </S.Label>
    </S.Wrapper>
  );
};

export default AllConsentCheckbox;
