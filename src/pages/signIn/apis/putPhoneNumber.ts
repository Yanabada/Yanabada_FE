import axios from "axios";

export const putPhoneNumber = async (phoneNumber: string | null) => {
  const putPhoneNumberURL = "/member/phone-number";

  return await axios.put(putPhoneNumberURL, {
    phoneNumber: phoneNumber
  });
};

export default putPhoneNumber;
