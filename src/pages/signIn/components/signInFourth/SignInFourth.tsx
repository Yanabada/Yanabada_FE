import Certification from "@components/certification";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import usePhoneNumber from "@pages/signIn/hooks/usePhoneNumber";
import SignInImg from "@assets/successSignIn.svg?react";

const SignInFourth = () => {
  const [searchParams] = useSearchParams();
  const providerParams = searchParams.get("provider");
  const fromParams = searchParams.get("from");
  const name = searchParams.get("name");
  const phoneNumber = searchParams.get("phonenumber");
  const productId = searchParams.get("productId");

  const navigate = useNavigate();

  const { mutate } = usePhoneNumber();

  if (fromParams === "changeReservationInfo") {
    return (
      <Certification
        width="100%"
        upperNavBarText="예약자 정보 수정"
        buttonText="확인"
        customHandleClick={() => {
          navigate(`/purchase?name=${name}&phonenumber=${phoneNumber}&productId=${productId}`);
        }}
      />
    );
  } else if (fromParams === "changePhoneNumber") {
    return (
      <Certification
        width="100%"
        upperNavBarText="예약자 정보 수정"
        buttonText="확인"
        mutationFn={mutate}
      />
    );
  } else if (fromParams === "payRegistration") {
    return (
      <Certification
        width="100%"
        upperNavBarText="휴대폰 인증"
        buttonText="확인"
        customHandleClick={() => {
          navigate("/charge/password?registration=true");
        }}
      />
    );
  } else {
    return (
      <Certification
        width="100%"
        upperNavBarText={providerParams === "KAKAO" ? "회원가입(2/2)" : "회원가입(4/4)"}
        buttonText="회원가입 완료"
        hasBottomSheet
        bottomSheetTitle="⠀"
        bottomSheetChildren={<SignInImg />}
        bottomSheetNavigate="/"
        isSignInFlow={true}
      />
    );
  }
};

export default SignInFourth;
