function formatPhoneNumber(phoneNumber: string): string {
  const regex = /^(\d{3})(\d{4})(\d{4})$/;
  return phoneNumber.replace(regex, "010****$3");
}

export default formatPhoneNumber;
