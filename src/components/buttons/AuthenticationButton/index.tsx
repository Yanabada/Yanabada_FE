import * as S from "./styles";

interface AuthenticationButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  buttonType: "light" | "default" | "abled" | "disabled";
  width?: string;
}

const AuthenticationButton = ({ buttonType, children, ...props }: AuthenticationButtonProps) => {
  switch (buttonType) {
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
