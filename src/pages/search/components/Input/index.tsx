import { ReactNode } from "react";
import * as S from "./styles";
import ArrowDown from "@assets/icons/search_arrowDown.svg?react";
import { useTheme } from "@emotion/react";
import { AnimatePresence, motion } from "framer-motion";

interface SearchInputProps {
  leftPlaceholder: string;
  rightPlaceholder: string;
  children: ReactNode;
  icon: ReactNode;
  isOpen: boolean;
  setIsOpen: () => void;
}

const SearchTab = ({
  icon,
  leftPlaceholder,
  rightPlaceholder,
  children,
  isOpen,
  setIsOpen
}: SearchInputProps) => {
  const theme = useTheme();

  const handleClick = () => {
    setIsOpen();
  };

  return (
    <S.Container>
      <S.Wrapper onClick={handleClick}>
        <S.Flex>
          <div>{icon}</div>
          <S.Subtitle color={theme.colors.gray[700]}>{leftPlaceholder}</S.Subtitle>
        </S.Flex>
        <S.Flex>
          <S.Subtitle color={theme.colors.gray[600]}>{rightPlaceholder}</S.Subtitle>
          <div>
            <ArrowDown />
          </div>
        </S.Flex>
      </S.Wrapper>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: [0, 0.71, 0.2, 1.01] }}
            style={{ overflow: "hidden" }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </S.Container>
  );
};

export default SearchTab;
