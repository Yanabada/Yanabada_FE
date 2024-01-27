import { useSuspenseQuery } from "@tanstack/react-query";
import getPurchaseHistory2 from "../apis/getPurchaseHistory2";

const usePurchaseHistory2 = () => {
  return useSuspenseQuery({
    queryKey: ["purchaseHistory2"],
    queryFn: () => getPurchaseHistory2()
  });
};

export default usePurchaseHistory2;
