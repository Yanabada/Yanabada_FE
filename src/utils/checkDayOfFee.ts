import { format, isBefore } from "date-fns";

import { feePolicy1, feePolicy2 } from "@constants/feePolicys";

import { numberFormat } from "./numberFormat";

interface FeePhraseProps {
  daysBefore: number;
  percentage: number;
}

interface CheckDayProps {
  originalPrice: number;
  policyNumber: string;
  checkInDate: string;
}

export function checkDayOfFee({ originalPrice, policyNumber, checkInDate }: CheckDayProps): string {
  const today = new Date();
  const formattedToday = format(today, "yyyy.MM.dd");
  const formattedCheckIn = new Date(checkInDate);

  if (isBefore(today, formattedCheckIn)) {
    const daysBeforeCheckIn = Math.floor(
      (formattedCheckIn.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
    );

    const feePhrase: FeePhraseProps[] = policyNumber === "YNBD_1" ? feePolicy1 : feePolicy2;

    for (const phrase of feePhrase) {
      if (daysBeforeCheckIn === phrase.daysBefore) {
        return `${formattedToday} 기준 취소 수수료는 
        ${numberFormat((originalPrice * phrase.percentage) / 100)}원 입니다`;
      }
    }

    return "";
  }

  return "이미 입실일이 지났습니다.";
}
