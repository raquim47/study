import React, { useRef, useState, useCallback }  from "react";
import Try from "./Try";

// 숫자 4개를 겹치지 않고 랜덤하게 뽑는 함수
function getNumbers(){
  const candidate = Array(9).fill().map((item, i) => i + 1);
  const answer = [];
  for (let i = 0; i < 4; i++){
    const chosen = candidate.splice(Math.floor(Math.random() * (candidate.length - i)), 1)[0];
    answer.push(chosen)
  }
  console.log(answer);
  return answer;
}

const Baseball = () => {
  // getNumbers()가 아니라 getNumbers를 넣어야하는 이유:
  // getNumbers()를 넣을 경우 실행엔 문제가 없지만 (첫번째 리턴 값만 answer에 넣어주고 두번째부턴 무시) 리랜더링 될때 마다
  // 계속 함수가 재실행 되기 때문에 비효율적
  // getNumbers를 넣어주면 처음에 '한 번' 실행된 함수의 리턴값이 쓰인다
  // lazy init(늦은 초기화) 함수가 호출되서 리턴값을 반환할때 까지 기다려줌
  const [answer, setAnswer] = useState(getNumbers);
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const [tries, setTries] = useState([]);
  const inputEl = useRef(null);
  
  const onSubmitForm = useCallback((e) => {
    e.preventDefault();
    if (value === answer.join('')) {
      setTries((t) => ([
        ...t,
        {
          try: value,
          result: '홈런!',
        }
      ]));
      setResult('홈런!');
      alert('게임을 다시 실행합니다.');
      setValue('');
      setAnswer(getNumbers());
      setTries([]);
      inputEl.current.focus();
    } else {
      const answerArray = value.split('').map((v) => parseInt(v));
      let strike = 0;
      let ball = 0;
      if (tries.length >= 9) {
        setResult(`10번 넘게 틀려서 실패! 답은 ${answer.join(',')}였습니다!`); // state set은 비동기
        alert('게임을 다시 시작합니다.');
        setValue('');
        setAnswer(getNumbers());
        setTries([]);
        inputEl.current.focus();
      } else {
        console.log('답은', answer.join(''));
        for (let i = 0; i < 4; i += 1) {
          if (answerArray[i] === answer[i]) {
            console.log('strike', answerArray[i], answer[i]);
            strike += 1;
          } else if (answer.includes(answerArray[i])) {
            console.log('ball', answerArray[i], answer.indexOf(answerArray[i]));
            ball += 1;
          }
        }
        setTries(t => ([
          ...t,
          {
            try: value,
            result: `${strike} 스트라이크, ${ball} 볼입니다.`,
          }
        ]));
        setValue('');
        inputEl.current.focus();
      }
    }
  }, [value, answer]);

  const onChangeInput = useCallback((e) => setValue(e.target.value), []);

  return(
    <>
      <h1>{result}</h1>
      <form onSubmit={onSubmitForm}>
        <input ref={inputEl} maxLength={4} value={value} onChange={onChangeInput}/>
        <button>입력</button>
      </form>
      <div>시도: {tries.length}</div>
      <ul>
        {tries.map((v, i) => {
          return (
            <Try key={`${i+1}차 시도 :`} tryInfo={v}/>
          )
        })}
      </ul>
    </>
  )
}

export default Baseball;