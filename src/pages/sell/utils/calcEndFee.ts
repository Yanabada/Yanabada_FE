export default function calcEndFee(price: number, feePercentage: number) {
  const discountedPrice = price - (price * feePercentage) / 100;
  return discountedPrice;
}
