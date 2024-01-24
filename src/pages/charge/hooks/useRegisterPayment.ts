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

      return response.data.data;
    } catch (err) {
      navigate("/charge/success");
      console.error("registerForPayment: ", err);
    }
  };

  return registerForPayment;
};

export default useRegisterForPayment;
