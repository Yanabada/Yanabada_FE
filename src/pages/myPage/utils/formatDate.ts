const formatDate = (inputDate: string): string => {
  const date = new Date(inputDate);

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const dayOfWeek = getDayOfWeek(date.getDay());

  return `${year}.${month}.${day}(${dayOfWeek}) 00:00`;
};

const getDayOfWeek = (dayIndex: number): string => {
  const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
  return daysOfWeek[dayIndex];
};

export default formatDate;
