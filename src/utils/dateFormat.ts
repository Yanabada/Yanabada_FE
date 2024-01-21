export default function dateFormat(dateString: string | null | undefined) {
  if (!dateString) {
    return "판매 종료일을 선택해주세요";
  }

  const date = new Date(dateString);
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const formattedDate = `${month}월 ${day}일`;

  return formattedDate;
}
