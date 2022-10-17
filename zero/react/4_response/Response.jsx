import React, { useState, useRef, useCallback, useMemo } from "react";

const Response = () => {
  const [state, setState] = useState("waiting");
  const [message, setMessage] = useState("클릭해서 시작");
  const [result, setResult] = useState([]);
  const timeout = useRef(null);
  const startTime = useRef(0);
  const endTime = useRef(0);

  const onClickScreen = useCallback(() => {
    if (state === "waiting") {
      // currunt? // useRef) current로 접근해야 하며 값이 변경돼도 랜더링이 되지않음
      // 함수바깥에 let으로 선언하면 안돼? 응 안돼 
      // useRef의 쓰임 돔에 접근 할때 말고도 사용됨 값이 바뀌지만 화면에 영향을 미치고 싶지 않을 때 사용.
      // 컴포넌트를 여러번 재사용할 때 문제가 됩니다. 컴포넌트마다 각자의 값(useRef)를 갖고 있어야하는데 let을 외부에 선언한 걸 사용하면 모든 컴포넌트가 그 let 값으로 통일되어 버립
      timeout.current = setTimeout(() => {
        setState("now");
        setMessage("지금 클릭");
        startTime.current = new Date();
      }, Math.floor(Math.random() * 1000) + 2000);
      setState("ready");
      setMessage("초록색이 되면 클릭");
    } else if (state === "ready") {
      clearTimeout(timeout.current);
      setState("waiting");
      setMessage("성급해, 초록색이 되면 클릭");
    } else if (state === "now") {
      endTime.current = new Date();
      setState("waiting");
      setMessage("클릭해서 시작");
      setResult((prev) => {
        return [...prev, endTime.current - startTime.current];
      });
    }
  }, [state]);

  const onReset = useCallback(() => {
    setResult([]);
  }, []);

  const renderAverage = () => {
    return (
      result.length !== 0 && (
        <>
          <div>평균시간 : {result.reduce((a, c) => a + c) / result.length}</div>
          <button onClick={onReset}>리셋</button>
        </>
      )
    );
  };

  return (
    <>
      <div id="screen" className={state} onClick={onClickScreen}>
        {message}
      </div>
      {renderAverage()}
    </>
  )
};

export default Response
