import { feePolicy1, feePolicy2, feePolicy3 } from "@constants/feePolicys";

interface FeePolicy {
  daysBefore: number;
  percentage: number;
}

export const getPercentage = (
  today: Date,
  policyNumber: string,
  checkInDate: string
): number | string => {
  const formattedCheckIn = new Date(checkInDate);
  const daysBeforeCheckIn = Math.floor(
    (formattedCheckIn.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
  );

  const feePolicy = getFeePolicy(policyNumber);

  if (!feePolicy) {
    return "취소 정책이 없습니다.";
  }

  const matchedPolicy = feePolicy.find((policy) => policy.daysBefore === daysBeforeCheckIn);

  return matchedPolicy ? matchedPolicy.percentage : "취소 불가";
};

const getFeePolicy = (policyNumber: string): FeePolicy[] | null => {
  switch (policyNumber) {
    case "YNBD_1":
      return feePolicy1;
    case "YNBD_2":
      return feePolicy2;
    case "YNBD_3":
      return feePolicy3;
    default:
      return null;
  }
};
