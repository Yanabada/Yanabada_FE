import { ComponentProps, ReactNode, forwardRef } from "react";
import { IoCheckmark } from "react-icons/io5";
import * as S from "./styles";

type Picked = "onChange" | "placeholder" | "value" | "type";

interface InputProps extends Pick<ComponentProps<"input">, Picked> {
  variant?: "static" | "move";
  label?: string | ReactNode;
  errorMessage?: string | null;
  isSuccess?: boolean;
  rightElement?: ReactNode | null;
  onRightElementClick?: VoidFunction;
}

const TextInput = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      variant = "move",
      errorMessage,
      isSuccess = false,
      label,
      rightElement = null,
      onRightElementClick,
      ...props
    },
    ref
  ) => {
    return (
      <>
        {variant === "static" && <S.Label>{label}</S.Label>}
        <S.InputWrapper>
          <S.Input ref={ref} required className={`${errorMessage ? "error" : ""}`} {...props} />
          {variant === "move" && <S.Label className="move">{label}</S.Label>}
          {rightElement && (
            <S.RightElement {...(onRightElementClick && { onClick: onRightElementClick })}>
              {rightElement}
            </S.RightElement>
          )}
          {isSuccess && (
            <S.RightElement>
              <IoCheckmark />
            </S.RightElement>
          )}
        </S.InputWrapper>
        {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
      </>
    );
  }
);

export default TextInput;
