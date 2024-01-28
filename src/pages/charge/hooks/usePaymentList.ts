import { getPaymentsLists } from "../apis/charge";

interface PaymentsProps {
  page: number;
  tab: string;
}

export const fetchPaymentLists = async ({ page, tab }: PaymentsProps) => {
  switch (tab) {
    case "transactions":
      return await getPaymentsLists(
        `/payments/histories?types=DEPOSIT&types=WITHDRAW&page=${page}`
      );
    case "charges":
      return await getPaymentsLists(
        `/payments/histories?types=DISBURSEMENT&types=CHARGE&page=${page}`
      );
    default:
      if (page === 1) {
        return await getPaymentsLists(`/payments/histories`);
      } else {
        return await getPaymentsLists(`/payments/histories?page=${page}`);
      }
  }
};
