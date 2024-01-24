import { useSuspenseQuery } from "@tanstack/react-query";
import getProfileDetail from "../apis/getProfileDetail";

const useProfileDetail = () => {
  return useSuspenseQuery({
    queryKey: ["profileDetail"],
    queryFn: () => getProfileDetail()
  });
};

export default useProfileDetail;
