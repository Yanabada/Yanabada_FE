export default function todayFormat(date: Date) {
  return date.toLocaleDateString("ko-KR", {
    month: "2-digit",
    day: "2-digit"
  });
}
