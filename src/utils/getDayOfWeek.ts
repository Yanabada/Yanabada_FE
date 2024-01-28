export function getDayOfWeek(dateString: string) {
  const dateObject = new Date(dateString);
  const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
  const dayOfWeek = daysOfWeek[dateObject.getDay()];
  return dayOfWeek;
}
