import { ComponentProps, ReactNode, forwardRef } from "react";
import { IoCheckmark } from "react-icons/io5";
import * as S from "./styles";

type Picked = "onChange" | "placeholder" | "value" | "type";

interface InputProps extends Pick<ComponentProps<"input">, Picked> {
  variant?: "static" | "move";
  label?: string;
  errorMessage?: string;
  isSuccess?: boolean;
  rightElement?: ReactNode;
}

const TextInput = forwardRef<HTMLInputElement, InputProps>(
  (
    { variant = "move", errorMessage, isSuccess = false, label, rightElement = null, ...props },
    ref
  ) => {
    return (
      <>
        {variant === "static" && <S.Label>{label}</S.Label>}
        <S.InputWrapper>
          <S.Input ref={ref} required className={`${errorMessage ? "error" : ""}`} {...props} />
          {variant === "move" && <S.Label className="move">{label}</S.Label>}
          {rightElement && <S.RightElement>{rightElement}</S.RightElement>}
          {isSuccess && <S.RightElement>{IoCheckmark}</S.RightElement>}
        </S.InputWrapper>
        {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
      </>
    );
  }
);

export default TextInput;
