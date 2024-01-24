import { feePolicy1, feePolicy2 } from "@constants/feePolicys";
import { differenceInDays } from "date-fns";

export default function calculateFee(
  policy: string,
  checkInDate: string,
  today: Date,
  purchasePrice: number
) {
  const selectedPolicy = policy === "YNBD_1" ? feePolicy1 : feePolicy2;

  const daysBeforeCheckIn = differenceInDays(new Date(checkInDate), today) + 1;
  const applicablePolicy = selectedPolicy.find((p) => p.daysBefore === daysBeforeCheckIn) || {
    percentage: 0
  };

  const feePercentage = applicablePolicy.percentage;
  const calculatedFee = (feePercentage / 100) * purchasePrice;

  return calculatedFee;
}
