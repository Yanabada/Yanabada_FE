import { format, getHours } from "date-fns";
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
  const saleEndTime = new Date(endDate);
  saleEndTime.setHours(23, 59, 59);
  const timeOut = saleEndTime.getTime() - new Date().getTime();

  const days = Math.floor(timeOut / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeOut % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeOut % (1000 * 60 * 60)) / (1000 * 60));

  return days ? `${days}일 ${hours}시간 ${minutes}분` : `${hours}시간 ${minutes}분`;
};
