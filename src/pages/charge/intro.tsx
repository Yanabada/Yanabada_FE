import * as CS from "./styles/success";

import BaseButton from "@components/buttons/BaseButton";
import UpperNavBar from "@components/navBar/upperNavBar";
import { useNavigate } from "react-router-dom";

const ChargeIntro = () => {
  const navigate = useNavigate();

  return (
    <>
      <UpperNavBar title="야놀자 페이" type="backClose" />
      <CS.SuccessWrap className="gray-bg">
        <CS.SuccessBox>
          <img src="/src/assets/pay-ico.png" alt="체크아이콘" width="200" />
          <p className="tit">
            한번의 클릭으로 결제하는
            <br />
            야놀자 페이
          </p>
          <p className="des">
            더 쉽고 빠르게, 단 한번의 클릭으로
            <br />
            저렴한 숙박권을 구매하세요.
          </p>
          <CS.SuccessSpace />
          <BaseButton
            buttonType="default"
            width="100%"
            onClick={() => navigate("/charge/password?registration=true")}
          >
            야놀자페이 등록 시작하기
          </BaseButton>
        </CS.SuccessBox>
      </CS.SuccessWrap>
    </>
  );
};

export default ChargeIntro;
