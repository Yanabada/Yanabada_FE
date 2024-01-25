import { useQuery } from "@tanstack/react-query";
import { getPaymentsLists } from "../apis/charge";

const fetchPaymentLists = async (tab: string) => {
  switch (tab) {
    case "transactions":
      return await getPaymentsLists("/products/histories?types=DEPOSIT&types=WITHDRAW");
    case "charges":
      return await getPaymentsLists("/products/histories?types=DISBURSEMENT&types=CHARGE");
    default:
      return await getPaymentsLists("/payments/histories");
  }
};

export const usePaymentList = (selectedTab: string) => {
  return useQuery({
    queryKey: ["paymentList", selectedTab],
    queryFn: () => fetchPaymentLists(selectedTab)
  });
};
