import { ComponentProps, ReactNode } from "react";
import * as S from "./styles";

type Picked = "onChange" | "placeholder" | "value" | "type";

interface InputProps extends Pick<ComponentProps<"input">, Picked> {
  variant?: "static" | "smooth";
  label?: string;
  errorMessage?: string;
  isSuccess?: boolean;
  rightElement?: ReactNode;
}

const TextInput = ({
  variant = "smooth",
  errorMessage,
  isSuccess = false,
  label,
  rightElement = null,
  ...props
}: InputProps) => {
  return (
    <>
      {variant === "static" && <S.Label>{label}</S.Label>}
      <S.InputWrapper>
        <S.Input required className={`${errorMessage ? "error" : ""}`} {...props} />
        {variant === "smooth" && <S.Label className="move">{label}</S.Label>}
        {isSuccess && <S.RightElement>{rightElement}</S.RightElement>}
      </S.InputWrapper>
      {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
    </>
  );
};

export default TextInput;
