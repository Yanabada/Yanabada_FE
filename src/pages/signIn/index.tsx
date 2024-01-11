import UpperNavBar from "@components/navBar/upperNavBar";
import SignInFirst from "./SignInFirst";
import Test from "@assets/icons/YanoljaIcon.svg?react";
import Notice from "@components/notice";

const SignIn = () => {
  const count = 1;
  return (
    <>
      <UpperNavBar
        type="back"
        title={`회원가입(${count}/4)`}
        rightElement={
          <>
            <Test />
            <Test />
          </>
        }
      />
      <SignInFirst />
      <Notice type="yanolja" content="야놀자 포인트를 야나바다에서 사용하실 수 있어요!" />
    </>
  );
};

export default SignIn;
