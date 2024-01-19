import { format } from "date-fns";

export const formatDateTo = (date: Date, formatOfDate: string) => {
  return format(date, formatOfDate);
};
