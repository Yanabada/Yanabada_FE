import { format } from "date-fns";

export const formatDateTo = (date: Date | null, formatOfDate: string = "MM/dd") => {
  if (!date) return;
  return format(date, formatOfDate);
};
