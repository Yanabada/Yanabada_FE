export default function translateType(type: string) {
  const typeMap: Record<string, string> = {
    DEPOSIT: "입금",
    WITHDRAW: "출금",
    DISBURSEMENT: "인출",
    CHARGE: "충전"
  };

  return typeMap[type] || type;
}
