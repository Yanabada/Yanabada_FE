import { useQuery } from "@tanstack/react-query";
import getProfileDetail from "../apis/getProfileDetail";

const useProfileDetail = (isLoggedIn: boolean) => {
  return useQuery({
    queryKey: ["profileDetail"],
    queryFn: () => getProfileDetail(),
    enabled: isLoggedIn
  });
};

export default useProfileDetail;
