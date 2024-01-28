import { useQuery } from "@tanstack/react-query";
import getAccumulate from "../api/accumulate";

const useAccumulate = () => {
  const getAccumulateQuery = useQuery({
    queryKey: ["accumulate"],
    queryFn: getAccumulate
  });

  return { getAccumulateQuery };
};

export default useAccumulate;
