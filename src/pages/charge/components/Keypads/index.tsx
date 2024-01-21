import * as S from "./styles";

import { useEffect, useState } from "react";

const Keypads: React.FC<{ random: boolean; onKeyPress: (digit: number | string) => void }> = ({
  random,
  onKeyPress
}) => {
  const [usedNumbers, setUsedNumbers] = useState<(string | number)[]>([]);
  const numbers = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ["전체삭제", 0, "⌫"]
  ];

  function shuffleArray<T>(array: T[]): T[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  useEffect(() => {
    const numberArray = Array.from({ length: 10 }, (_, index) => index);
    const shuffledNumbers = shuffleArray(numberArray);

    const randomNumbers = [
      shuffledNumbers.slice(0, 3),
      shuffledNumbers.slice(3, 6),
      shuffledNumbers.slice(6, 9),
      ["전체삭제", shuffledNumbers[9], "⌫"]
    ];

    const updatedNumbers = random ? randomNumbers.flat() : numbers.flat();
    setUsedNumbers(updatedNumbers);
  }, []);

  return (
    <S.KeyPadWrapper>
      {usedNumbers.map((button, index) => (
        <S.KeyPad key={index} onClick={() => onKeyPress(button)}>
          {button}
        </S.KeyPad>
      ))}
    </S.KeyPadWrapper>
  );
};

export default Keypads;
