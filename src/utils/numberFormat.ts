export function numberFormat(n: number): string {
  const formattedNumber = n.toLocaleString("ko-KR");
  return formattedNumber;
}
