export default function calcEndFee(price: number, feePercentage: number) {
  console.log("몇퍼", feePercentage);
  const discountedPrice = price - (price * feePercentage) / 100;
  return discountedPrice;
}
