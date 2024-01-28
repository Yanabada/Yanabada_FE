import { AnimatePresence } from "framer-motion";
import * as S from "./styles/styles";
import { Outlet } from "react-router-dom";

const SignIn = () => {
  return (
    <AnimatePresence>
      <S.SignInContainer>
        <Outlet />
      </S.SignInContainer>
    </AnimatePresence>
  );
};

export default SignIn;
