/** @jsxImportSource @emotion/react */
import { ChangeEvent } from "react";
import * as S from "./allConsentCheckbox.style";
import CheckIcon from "@assets/icons/checkbox_Check.svg?react";

export interface AllConsentCheckboxProps {
  content?: string;
  transparent?: boolean;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  checked: boolean;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
  setList: React.Dispatch<React.SetStateAction<boolean>>[];
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const AllConsentCheckbox = ({
  content,
  transparent = false,
  checked,
  setChecked,
  setList,
  onChange,
  ...props
}: AllConsentCheckboxProps) => {
  const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    if (setList) {
      setList.map((item) => {
        item(e.target.checked);
      });
    }
  };

  // FIXME: onChange unused 해결하기 위한 임시 조치
  onChange && onChange;

  return (
    <S.Wrapper transparent={transparent}>
      <S.IconWrapper>
        <S.Input id="agreement" type="checkbox" checked={checked} onChange={handleCheck} />
        <S.Icon>
          <CheckIcon />
        </S.Icon>
      </S.IconWrapper>
      <S.Label htmlFor="agreement">
        {content ? (
          <p css={{ ...props }}>{content}</p>
        ) : (
          <p>
            전체 동의 <span>(선택 포함)</span>
          </p>
        )}
      </S.Label>
    </S.Wrapper>
  );
};

export default AllConsentCheckbox;
