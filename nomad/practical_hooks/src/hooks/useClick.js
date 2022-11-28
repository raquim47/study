import { useEffect, useRef } from "react";

const useClick = (onClick) => {
  const el = useRef();
  useEffect(() => {
    if (typeof onClick !== "function") {
      return;
    }
    if (el.current) {
      el.current.addEventListener("click", onClick);
    }
    return () => {
      if (el.current) {
        el.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  return typeof onClick !== "function" ? null : el;
};

export default useClick;
