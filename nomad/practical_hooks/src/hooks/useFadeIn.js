import { useEffect, useRef } from "react";

const useFadeIn = (duration = 1, delay = 0) => {
  const el = useRef();
  useEffect(() => {
    if (duration && typeof duration !== "number") return;
    if (delay && typeof delay !== "number") return;
    if (el.current) {
      el.current.style.opacity = 1;
      el.current.style.transition = `opacity ${duration}s ease-in-out`;
      el.current.style.transitionDelay = `${delay}s`;
    }
  }, []);
  return { ref: el, style: { opacity: 0 } };
};
export default useFadeIn;
