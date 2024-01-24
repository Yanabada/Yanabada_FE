import { useQuery } from "@tanstack/react-query";
import getProfileDetail from "../apis/getProfileDetail";

const useProfileDetail = (isFromPurchase?: boolean) => {
  return useQuery({
    queryKey: ["profileDetail"],
    queryFn: () => getProfileDetail(),
    enabled: isFromPurchase ? true : false
  });
};

export default useProfileDetail;
