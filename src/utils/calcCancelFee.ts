import { feePolicy1, feePolicy2 } from "@constants/feePolicys";
import { startOfDay } from "date-fns";

export default function calculateFee(policy: string, checkInDate: string, purchasePrice: number) {
  const selectedPolicy = policy === "YNBD_1" ? feePolicy1 : feePolicy2;

  const today = startOfDay(new Date());
  const checkInDateObj = new Date(checkInDate);
  const formattedCheckIn = startOfDay(checkInDateObj);

  const daysBeforeCheckIn = Math.floor(
    (formattedCheckIn.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
  );

  const applicablePolicy = selectedPolicy.find((p) => p.daysBefore === daysBeforeCheckIn) || {
    percentage: 0
  };

  const feePercentage = applicablePolicy.percentage;
  const calculatedFee = (feePercentage / 100) * purchasePrice;

  console.log(typeof calculatedFee);

  return calculatedFee;
}
