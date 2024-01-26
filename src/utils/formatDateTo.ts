import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  format,
  getHours
} from "date-fns";
import { ko } from "date-fns/locale";

export const formatDateTo = (date: Date | null, formatOfDate: string = "MM/dd") => {
  if (!date) return;

  const getKoreanAmPm = (date: Date) => {
    const hour = getHours(date);
    return hour < 12 ? "오전" : "오후";
  };

  if (formatOfDate === "ahh:mm") {
    return `${getKoreanAmPm(date)} ${format(date, "hh:mm", { locale: ko })}`;
  }

  return format(date, formatOfDate, { locale: ko });
};

export const formatRemainingTime = (endDate: Date) => {
  const now = new Date();

  const days = differenceInDays(endDate, now);
  const hours = differenceInHours(endDate, now) % 24;
  const minutes = differenceInMinutes(endDate, now) % 60;

  return `${days}일 ${hours}시간 ${minutes}분`;
};
