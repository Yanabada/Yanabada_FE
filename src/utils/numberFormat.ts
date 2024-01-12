export function numberFormat(n: number): string {
  const formattedNumber = n.toLocaleString("en-US");
  return formattedNumber;
}
