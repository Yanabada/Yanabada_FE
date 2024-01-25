export function convertString(inputStr: string): string {
  switch (inputStr) {
    case "yanoljaPay":
      return "YANOLJA_PAY";
    case "tossPay":
      return "TOSS_PAY";
    case "accountTransfer":
      return "BANK_TRANSFER";
    case "card":
      return "CREDIT";
    default:
      return "";
  }
}

export function convertStringToKR(inputStr: string): string {
  switch (inputStr) {
    case "yanoljaPay":
      return "야놀자 페이";
    case "tossPay":
      return "토스 페이";
    case "accountTransfer":
      return "무통장 입금";
    case "card":
      return "카드";
    default:
      return "";
  }
}
