interface TranslationMap {
  [key: string]: string;
}

export default function translatePayment(englishMethod: string) {
  const translationMap: TranslationMap = {
    YANOLJA_PAY: "야놀자 페이",
    TOSS_PAY: "토스 페이",
    BANK_TRANSFER: "무통장 입금",
    CREDIT: "카드"
  };

  return translationMap[englishMethod] || "알 수 없음";
}
