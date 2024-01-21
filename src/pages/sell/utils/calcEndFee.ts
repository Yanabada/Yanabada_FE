// TODO : 수수료 제외 받을 금액 계산
export default function calcEndFee(price: number, feePercentage: number) {
  const discountedPrice = price - (price * feePercentage) / 100;
  return discountedPrice;
}
