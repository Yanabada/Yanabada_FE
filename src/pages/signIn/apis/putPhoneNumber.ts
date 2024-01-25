import { instance } from "@apis/instance";

export const putPhoneNumber = async (phoneNumber: string | null) => {
  const putPhoneNumberURL = "/members/phone-number";

  return await instance.put(putPhoneNumberURL, {
    phoneNumber: phoneNumber
  });
};

export default putPhoneNumber;
