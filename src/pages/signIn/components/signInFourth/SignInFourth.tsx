import Certification from "@components/certification";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SignInFourth = () => {
  const [searchParams] = useSearchParams();
  const providerParams = searchParams.get("provider");
  const fromParams = searchParams.get("from");
  const name = searchParams.get("name");
  const phoneNumber = searchParams.get("phonenumber");

  const navigate = useNavigate();

  if (fromParams === "changeReservationInfo") {
    return (
      <Certification
        width="100%"
        upperNavBarText="예약자 정보 수정"
        buttonText="확인"
        customHandleClick={() => {
          navigate(`/purchase?name=${name}&phonenumber=${phoneNumber}`);
        }}
        phoneNum={phoneNumber}
      />
    );
  } else {
    return (
      <Certification
        width="100%"
        upperNavBarText={providerParams === "kakao" ? "회원가입(2/2)" : "회원가입(4/4)"}
        buttonText="회원가입 완료"
        hasBottomSheet
        bottomSheetTitle="⠀"
        bottomSheetChildren="회원가입 완료 추카추카~~ 추카 이미지 추가추가"
        bottomSheetNavigate="/"
      />
    );
  }
};

export default SignInFourth;
