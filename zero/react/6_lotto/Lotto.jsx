import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import Ball from "./Ball";

// useRef: 일반 값을 기억
// useMemo: 복잡한 함수 결괏값을 기억
// useCallback: 함 수 자체를 기억
// 모든 함수에 useCallback를 적용하면 이득일까?
// useCallback안에서 state를 쓸 때는 두번째 배열에 넣어줘야한다.
// 
function getWinNumbers() {
  const candidate = Array(45)
    .fill()
    .map((v, i) => i + 1);
  const shuffle = [];
  while (candidate.length > 0) {
    shuffle.push(
      candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]
    );
  }
  const bonusNumber = shuffle[shuffle.length - 1];
  const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
  return [...winNumbers, bonusNumber];
}

const Lotto = () => {
  const lottoNumbers = useMemo(() => getWinNumbers(), []);
  const [winNumbers, setWinNumbers] = useState(lottoNumbers);
  const [winBalls, setWinBalls] = useState([]);
  const [bonus, setBonus] = useState(null);
  const [redo, setRedo] = useState(false);
  const timeouts = useRef([]);

  useEffect(() => {
    for (let i = 0; i < winNumbers.length - 1; i++) {
      timeouts.current[i] = setTimeout(() => {
        setWinBalls((prevBalls) => [...prevBalls, winNumbers[i]]);
      }, (i + 1) * 1000);
    }
    timeouts.current[6] = setTimeout(() => {
      setBonus(winNumbers[6]);
      setRedo(true);
    }, 7000);
    return () => {
      timeouts.current.forEach((v) => {
        clearTimeout(v);
      });
    };
  }, [timeouts.current]);

  useEffect(() => {
    console.log("로또 숫자 생성");
  }, [winNumbers]);

  const onClickRedo = useCallback(() => {
    setWinNumbers(getWinNumbers());
    setWinBalls([]);
    setBonus(null);
    setRedo(false);
    timeouts.current = [];
  }, [winNumbers]);

  return (
    <>
      <div>당첨 숫자</div>
      <div id="결과창">
        {winBalls.map(v => <Ball key={v} number={v}/>)}
      </div>
      <div>보너스</div>
      {bonus && <Ball number={bonus}/>}
      {redo && <button onClick={onClickRedo}>한번더!</button>}
    </>
  );
};

export default Lotto;
