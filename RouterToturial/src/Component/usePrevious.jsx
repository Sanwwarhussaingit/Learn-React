import { useEffect, useRef } from "react";

const usePrevious = (value) => {
  const r = useRef();
  useEffect(() => {
    r.current = value;
    console.log(r.current);
  }, [value]);

  return r.current;
};

export default usePrevious;
