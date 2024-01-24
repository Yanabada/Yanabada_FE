import { useQuery } from "@tanstack/react-query";
import getProfileDetail from "../apis/getProfileDetail";

const useProfileDetail = () => {
  return useQuery({
    queryKey: ["profileDetail"],
    queryFn: () => getProfileDetail(),
    enabled: false
  });
};

export default useProfileDetail;
