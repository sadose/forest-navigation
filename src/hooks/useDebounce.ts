import { useEffect, useRef } from "react";

const useDebounce = (fn: Function, ms = 100, deps: React.DependencyList = []) => {
  const timeout = useRef(null as NodeJS.Timeout | null);

  useEffect(() => {
    if (timeout.current) clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      fn();
      timeout.current = null;
    }, ms);
  }, deps);

  const cancel = () => {
    if (timeout.current) clearTimeout(timeout.current);
    timeout.current = null;
  };

  return [cancel];
};

export default useDebounce;
