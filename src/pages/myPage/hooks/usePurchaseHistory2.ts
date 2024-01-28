import { useQuery } from "@tanstack/react-query";
import getPurchaseHistory2 from "../apis/getPurchaseHistory2";

const usePurchaseHistory2 = () => {
  return useQuery({
    queryKey: ["purchaseHistory2"],
    queryFn: () => getPurchaseHistory2(),
    enabled: false
  });
};

export default usePurchaseHistory2;
