function formatNumberWithCommas(number: number | undefined): string | null {
  if (number === undefined || number === null) return null;

  if (number < 100) {
    return number.toString();
  }

  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default formatNumberWithCommas;
