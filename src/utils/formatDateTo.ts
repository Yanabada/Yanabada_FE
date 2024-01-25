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
