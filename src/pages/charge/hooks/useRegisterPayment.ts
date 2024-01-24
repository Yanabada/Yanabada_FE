import instance from "@apis/instance";
import { useNavigate } from "react-router-dom";

const useRegisterForPayment = () => {
  const navigate = useNavigate();

  const registerForPayment = async (
    simplePassword: string,
    bankName: string,
    accountNumber: string
  ) => {
    const requestData = {
      simplePassword,
      bankName,
      accountNumber
    };

    try {
      const response = await instance.post("/payments", requestData);
      navigate("/charge/success");
      return response.data.data;
    } catch (err) {
      console.error("registerForPayment: ", err);
    }
  };

  return registerForPayment;
};

export default useRegisterForPayment;
