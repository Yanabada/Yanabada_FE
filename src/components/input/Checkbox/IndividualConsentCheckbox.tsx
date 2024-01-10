import * as S from "./individualConsentCheckbox.style";
import CheckIcon from "@assets/icons/checkbox_Check.svg?react";
import RightArrow from "@assets/icons/checkbox_rightArrow.svg?react";
import { ChangeEvent, useState } from "react";

export interface IndividualConsentCheckboxProps {
  title: string;
  content: string;
  hasMoreContent?: boolean;
  onLoadMoreContent?: VoidFunction;
}

const IndividualConsentCheckbox = ({
  title,
  content,
  hasMoreContent = false,
  onLoadMoreContent
}: IndividualConsentCheckboxProps) => {
  const [checked, setChecked] = useState(false);

  const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  return (
    <S.Label>
      <S.Input type="checkbox" checked={checked} onChange={handleCheck} />
      <div className="icon">
        <CheckIcon />
      </div>
      <S.ContnetWrapper>
        <S.Title>{title}</S.Title>
        <S.Content>{content}</S.Content>
      </S.ContnetWrapper>
      {hasMoreContent && (
        <button
          onClick={() => {
            onLoadMoreContent;
            console.log("clicked");
          }}
        >
          <RightArrow />
        </button>
      )}
    </S.Label>
  );
};

export default IndividualConsentCheckbox;
