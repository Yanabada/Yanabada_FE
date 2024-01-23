import { useQuery } from "@tanstack/react-query";
import { getNotifications } from "./api";

const useNotifications = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["notifications"],
    queryFn: getNotifications
  });

  return { data, isLoading, error };
};

export default useNotifications;
