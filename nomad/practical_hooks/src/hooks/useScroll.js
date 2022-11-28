import { useEffect, useState } from "react";
const useScroll = () => {
  const [coordinate, setCoordinate] = useState({
    x: 0,
    y: 0,
  });
  const onScroll = () => {
    setCoordinate({ y: window.scrollY, x: window.scrollX });
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return coordinate;
};

export default useScroll;
