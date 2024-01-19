import { format } from "date-fns";

export const formatDateTo = (date: Date, formatOfDate: string = "MM/dd") => {
  return format(date, formatOfDate);
};
