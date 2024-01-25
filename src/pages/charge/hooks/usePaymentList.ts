import { useQuery } from "@tanstack/react-query";
import { getPaymentsLists } from "../apis/charge";

const fetchPaymentLists = async (tab: string) => {
  switch (tab) {
    case "transactions":
      return await getPaymentsLists("/payments/histories?types=DEPOSIT&types=WITHDRAW&size=10");
    case "charges":
      return await getPaymentsLists("/payments/histories?types=DISBURSEMENT&types=CHARGE&size=10");
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
