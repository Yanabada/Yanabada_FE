export function formatDate(date: string) {
  const originDate = new Date(date);
  const year = originDate.getFullYear();
  const month = String(originDate.getMonth() + 1).padStart(2, "0");
  const day = String(originDate.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}
