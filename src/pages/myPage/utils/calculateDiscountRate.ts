export const calculateDiscountRate = (originalPrice: number, discountedPrice: number): number => {
  if (originalPrice < discountedPrice) {
    return 0;
  }

  if (originalPrice <= 0 || discountedPrice < 0) {
    return 0;
  }

  const discountAmount = originalPrice - discountedPrice;
  const discountRate = Math.floor((discountAmount / originalPrice) * 100);

  return discountRate;
};

export default calculateDiscountRate;
