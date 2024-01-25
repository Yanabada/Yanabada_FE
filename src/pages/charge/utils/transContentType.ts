export default function transContentType(type: string): string {
  const typeMap: Record<string, string> = {
    SALE: "상품 판매",
    PURCHASE: "상품 구매",
    REFUND: "상품 환불",
    CHARGE: "페이 충전",
    DISBURSEMENT: "페이 인출"
  };

  return typeMap[type] || type;
}
