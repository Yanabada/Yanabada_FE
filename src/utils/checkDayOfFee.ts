import { format, isBefore, startOfDay } from "date-fns";

import { feePolicy1, feePolicy2 } from "@constants/feePolicys";

import { numberFormat } from "./numberFormat";

interface FeePhraseProps {
  daysBefore: number;
  percentage: number;
}

interface CheckDayProps {
  purchasePrice: number;
  policyNumber: string;
  checkInDate: string;
}

export function checkDayOfFee({ purchasePrice, policyNumber, checkInDate }: CheckDayProps): string {
  const today = startOfDay(new Date());
  const formattedToday = format(today, "yyyy.MM.dd");
  const checkInDateObj = new Date(checkInDate);
  const formattedCheckIn = startOfDay(checkInDateObj);

  if (isBefore(today, formattedCheckIn)) {
    const daysBeforeCheckIn = Math.floor(
      (formattedCheckIn.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
    );

    const feePhrase: FeePhraseProps[] = policyNumber === "YNBD_1" ? feePolicy1 : feePolicy2;

    for (const phrase of feePhrase) {
      if (daysBeforeCheckIn === phrase.daysBefore) {
        console.log(phrase.percentage);
        return `${formattedToday} 기준 취소 수수료는 
        ${numberFormat((purchasePrice * phrase.percentage) / 100)}원 입니다`;
      }
    }

    return "";
  }

  return "이미 입실일이 지났습니다.";
}
