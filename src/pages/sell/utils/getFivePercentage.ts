import { numberFormat } from "@utils/numberFormat";

export function getFivePercentage(price: number) {
  const discountedPrice = price - (price * 5) / 100;
  return numberFormat(discountedPrice);
}
