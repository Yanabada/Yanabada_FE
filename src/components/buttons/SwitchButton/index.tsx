import { motion } from "framer-motion";
import { useState } from "react";
import * as S from "./styles";

const SwitchButton = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <S.Switch isOn={isOn} onClick={() => setIsOn(!isOn)}>
      <motion.div
        className="handle"
        layout
        transition={{
          type: "spring",
          stiffness: 700,
          damping: 30
        }}
      />
    </S.Switch>
  );
};

export default SwitchButton;
