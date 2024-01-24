function convertString(inputStr: string): string {
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
      return "Unknown";
  }
}

export default convertString;
