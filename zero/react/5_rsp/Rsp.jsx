import React, { useState, useRef, useEffect } from "react";

const rspCoords = {
  바위: "0",
  가위: "-142px",
  보: "-284px",
};

const scores = {
  가위: 1,
  바위: 0,
  보: -1,
};

const computerChoice = (imgCoord) => {
  return Object.entries(rspCoords).find((v) => {
    return v[1] === imgCoord;
  })[0];
};

const Rsp = () => {
  const [result, setResult] = useState("");
  const [imgCoord, setImgCoord] = useState(rspCoords.바위);
  const [score, setScore] = useState(0);
  // useRef 활용
  const interval = useRef();
  const clickable = useRef(true);
  
  //Lifecycle hook
  // useEffect(()=>{ 실행할코드 }) : 컴포넌트 재렌더링마다 코드를 실행
  // useEffect(()=>{ 실행할코드 }, []) : 컴포넌트 mount시 (로드시) 1회만 실행
  // useEffect(()=>{ 
  //   return ()=>{
  //     실행할코드
  //   }
  // }) useEffect 안의 코드 실행 전에 항상 실행
  //useEffect(()=>{ 
  //   return ()=>{
  //     실행할코드
  //   }
  // }, []) 컴포넌트 unmount시 1회 실행
  // useEffect(()=>{ 
//   실행할코드
// }, [state1]) state1이 변경될 때만 실행
  useEffect(() => { // componentDidMount
    interval.current = setInterval(changeHand, 100);
    return () => {
      clearInterval(interval.current);
    };
  }, [imgCoord]);

  const changeHand = () => {
    if (imgCoord === rspCoords.바위) {
      setImgCoord(rspCoords.가위);
    } else if (imgCoord === rspCoords.가위) {
      setImgCoord(rspCoords.보);
    } else if (imgCoord === rspCoords.보) {
      setImgCoord(rspCoords.바위);
    }
  };

  const onClickBtn = (choice) => () => {
    // 버튼을 연속으로 눌렀을 떄 setTimeout이 반복되는 버그 해결
    if (interval.current) {
      clearInterval(interval.current);
      interval.current = null;

      const myScore = scores[choice];
      const cpuScore = scores[computerChoice(imgCoord)];
      const diff = myScore - cpuScore;
      if (diff === 0) {
        setResult('비겼습니다!');
      } else if ([-1, 2].includes(diff)) {
        setResult('이겼습니다!');
        setScore((prevScore) => prevScore + 1);
      } else if ([1, -2].includes(diff)) {
        setResult('졌습니다!');
        setScore((prevScore) => prevScore - 1);
      }
      setTimeout(() => {
        interval.current = setInterval(changeHand, 100);
      }, 1000);
    }
  };

  return (
    <>
      <div
        id="computer"
        style={{
          background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`,
        }}
      ></div>
      {interval.current && (
        <div>
          <button id="rock" className="btn" onClick={onClickBtn("바위")}>
            바위
          </button>
          <button
            id="scissor"
            className="btn"
            onClick={onClickBtn("가위")}
          >
            가위
          </button>
          <button id="paper" className="btn" onClick={onClickBtn("보")}>
            보
          </button>
        </div>
      )}

      <div>{result}</div>
      <div>현재 {score}점</div>
    </>
  );
};

export default Rsp;
