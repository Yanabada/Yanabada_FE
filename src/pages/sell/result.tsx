import * as S from "./styles/result";

import { Link } from "react-router-dom";

import UpperNavBar from "@components/navBar/upperNavBar";
import BaseButton from "@components/buttons/BaseButton";

const SellResult = () => {
  return (
    <>
      <UpperNavBar title="상품 등록 완료" type="close" />
      <S.ResultWrap>
        <div>
          <img src="/src/assets/check-ico.png" alt="체크아이콘" />
          <p className="title">상품 등록이 정상적으로 완료되었습니다.</p>
        </div>
        <S.BaseButtonWrap>
          <Link to="/">
            <BaseButton buttonType="default" width="100%">
              판매 내역으로 이동하기
            </BaseButton>
          </Link>
        </S.BaseButtonWrap>
      </S.ResultWrap>
    </>
  );
};

export default SellResult;
