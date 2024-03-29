import * as S from "./styles";
import { ModalBg } from "../modal/styles";
import UpperNavBar from "@components/navBar/upperNavBar";
import { AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

interface bottomSheetProp extends Pick<React.HTMLAttributes<HTMLButtonElement>, "title"> {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
  isCustom?: boolean;
  customBack?: () => void;
}

const BottomSheet = ({
  title,
  isVisible,
  setIsVisible,
  children,
  isCustom,
  customBack
}: bottomSheetProp) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <>
          <ModalBg
            onClick={() => {
              setIsVisible(false);
            }}
          />
          <S.BottemSheetWrapper
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0", opacity: 1 }}
            exit={{ y: "50%", opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {title && (
              <UpperNavBar
                hasBorder={false}
                type="close"
                title={title}
                className="bottomSheet"
                setIsVisible={setIsVisible}
                isCustom={isCustom}
                customBack={customBack}
              />
            )}
            {children}
          </S.BottemSheetWrapper>
        </>
      )}
    </AnimatePresence>
  );
};

export default BottomSheet;
