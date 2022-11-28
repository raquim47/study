import { useRef } from "react";

const useFullscreen = (callback) => {
  const el = useRef();
  const runCb = (isFull) => {
    if (callback && typeof callback === "function") {
      callback(isFull);
    }
  };
  const triggerFull = () => {
    if (el.current) {
      el.current.requestFullscreen();
      if(el.current.requestFullscreen){
        el.current.requestFullscreen();
      } else if (el.current.mozRequestFullScreen){
        el.current.mozRequestFullScreen();
      } else if (el.current.webkitRequestFullscreen){
        el.current.webkitRequestFullscreen();
      } else if (el.current.msRequestFullscreen){
        el.current.msRequestFullscreen();
      }
      runCb();
    }
  };
  const exitFull = () => {
    const checkFullScreen = document.fullscreenElement;
    if (checkFullScreen) {
      document.exitFullscreen();
    }
    if (callback && typeof callback === "function") {
      callback(false);
    }
  };
  return { el, triggerFull, exitFull };
};

export default useFullscreen;
