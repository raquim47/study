// const React = require('react');
// const { Component } = 'react';
import React, { Component, createRef }  from "react";
import Try from "./TryClass";

// 숫자 4개를 겹치지 않고 랜덤하게 뽑는 함수
// this가 없는 함수는 재사용을 염두하여 클래스 바깥으로 빼는 게 나을수도?
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

class Baseball extends Component {
  state = {
    result: '',
    value: '',
    answer: getNumbers(),
    tries: [],
  }
  
  // 화살표 함수로 만든다.
  onSubmitForm = (e) => {
    e.preventDefault();
    const { value, tries, answer } = this.state;
    if (value.length !==4) {
      alert('4글자 숫자 입력');
      this.setState({value:''});
      this.inputRef.current.focus();
      return;
    }
    if(value === answer.join('')){ // 정답이면!
      this.setState(prevState => {
        return {
          result: '홈런!',
          tries: [...prevState.tries, {try:value, result: '홈런'}],
        }
      });
      setTimeout(()=>{
        alert('홈런 게임을 다시 시작합니다');
        this.setState({
          value:'',
          answer: getNumbers(),
          tries: [],
        });
      }, 0);
    } else { // 틀렸으면
      const answerArray = value.split('').map(v => parseInt(v));
      let strike = 0;
      let ball = 0;
      if (tries.length >= 9){
        this.setState({
          result: `10번 넘게 틀려서 실패! 답은 ${answer.join(',')}`,
        });
        this.setState({
          value:'',
          answer: getNumbers(),
          tries: [],
        });
        alert('홈런! 게임을 다시 시작합니다');
      } else {
        for(let i = 0; i < 4; i++){
          if(answerArray[i] === answer[i]){
            strike++;
          } else if (answer.includes(answerArray[i])){
            ball++;
          }
        }
        this.setState(prevState => {
          // 이전 값이 반영되는 경우에는 함수형 setState를 쓴다
          return {
            tries: [...prevState.tries, { try: value, result: `${strike} 스트라이크, ${ball} 볼입니다` }],
            value: '',
          }
        });
      }
    }
    this.inputRef.current.focus();
  };

  onChangeInput = (e) => {
    this.setState({
      value: e.target.value,
    });
  }

  inputRef = createRef();

  render(){
    // 구조분해
    const { result, value, tries } = this.state;
    return(
      <>
      <React.StrictMode>
        <h1>{result}</h1>
        <form onSubmit={this.onSubmitForm}>
          <input ref={this.inputRef} maxLength={4} value={this.state.value} onChange={this.onChangeInput}/>
          <button>입력</button>
        </form>
        <div>시도: {tries.length}</div>
        <ul>
          {/* 반복문 돌릴 땐 항상 key값(고유한 값)을 넣어줘야한다 i 값을 쓰는 건 주의할 필요가 있음(수정/ 삭제시 배열의 순서가 바뀔 경우 문제가 생긴다. 요소가 추가만 되는 배열일 경우는 써도 괜찮음.)*/}
          
          {tries.map((v, i) => {
            return (
              // 컴포넌트로 분리했을 때 e, i를 Try에 전달할 방법 -> props
              <Try key={`${i+1}차 시도 :`} tryInfo={v}/>
            )
          })}
        </ul>
        </React.StrictMode>
      </>
    )
  }
}

//module.exports = Baseball;
export default Baseball;