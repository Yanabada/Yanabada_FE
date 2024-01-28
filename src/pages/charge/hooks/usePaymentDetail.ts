import { useQuery } from "@tanstack/react-query";
import { getPaymentDetail } from "../apis/charge";

const usePaymentDetail = () => {
  return useQuery({
    queryKey: ["paymentDetail"],
    queryFn: getPaymentDetail
  });
};

export default usePaymentDetail;
