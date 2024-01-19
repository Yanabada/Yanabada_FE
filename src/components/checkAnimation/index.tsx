import { Player } from "@lottiefiles/react-lottie-player";
import * as S from "./styles";

interface AnimationProps {
  width?: string;
  height?: string;
}

const LoadingAnimation = (props: AnimationProps) => {
  return (
    <S.LoadingContainer>
      <Player
        autoplay
        loop
        src="https://lottie.host/63152ca4-11bb-45eb-b20a-ef13a95e30a2/VhLpG8nzyP.json"
        style={{
          height: props.height,
          width: props.width
        }}
      ></Player>
    </S.LoadingContainer>
  );
};

LoadingAnimation.defaultProps = {
  width: "500px",
  height: "500px"
};

export default LoadingAnimation;
