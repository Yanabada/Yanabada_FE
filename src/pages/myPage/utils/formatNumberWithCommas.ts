function formatNumberWithCommas(number: number | undefined): string | null {
  if (!number) return null;

  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default formatNumberWithCommas;
