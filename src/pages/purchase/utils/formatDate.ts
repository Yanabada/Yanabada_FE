function formatDate(input: string): string {
  const parts = input.split("-");

  if (parts.length === 3) {
    const [year, month, day] = parts;
    const formattedDate = `${year}.${month}.${day}`;
    return formattedDate;
  } else {
    throw new Error("Invalid date format");
  }
}

export default formatDate;
