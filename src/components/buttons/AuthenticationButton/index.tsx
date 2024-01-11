import * as S from "./styles";

interface AuthenticationButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  type: "light" | "default" | "abled" | "disabled";
  width?: string;
}

const AuthenticationButton = ({ type, children, ...props }: AuthenticationButtonProps) => {
  switch (type) {
    case "light":
      return <S.LightAuthenticationButton {...props}>{children}</S.LightAuthenticationButton>;
    case "default":
      return <S.DefaultAuthenticationButton {...props}>{children}</S.DefaultAuthenticationButton>;
    case "abled":
      return <S.AbledAuthenticationButton {...props}>{children}</S.AbledAuthenticationButton>;
    case "disabled":
      return <S.DisAbledAuthenticationButton {...props}>{children}</S.DisAbledAuthenticationButton>;
    default:
      return null;
  }
};

export default AuthenticationButton;
