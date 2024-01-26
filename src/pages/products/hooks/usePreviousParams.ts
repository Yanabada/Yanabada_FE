import { useEffect, useRef } from "react";

const usePreviousParams = <T>(params: T) => {
  const ref = useRef<T>();

  useEffect(() => {
    ref.current = params;
  }, [params]);

  return ref.current;
};

export default usePreviousParams;
