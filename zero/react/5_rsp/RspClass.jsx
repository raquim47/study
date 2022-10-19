import React, { Component } from "react";

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
// 리액트 사이프사이클
// 클래스
// constructor -> render -> redf -> componentDidMount
// setState/props바뀔 때 -> shouldComponentUpdate(true) -> render -> componentDidUpdate
// 부모 컴포넌트가 자식컴포넌트를 없앴을 때 -> componentWillUnmount -> 소멸
class Rsp extends Component {
  state = {
    result: "",
    imgCoord: rspCoords.바위,
    score: 0,
  };

  interval;
  clickable = true;
  // componentDidMount: render가 처음 한번 랜더링 된 이후 실행, 주로 비동기 요청하는 곳
  componentDidMount() {
    this.interval = setInterval(this.changeHand, 100);
  }
  // componentDidUpdate: 컴포넌트가 리랜더링된 이후
  // componentDidUpdate() {}
  // componentWillUnmount : 컴포넌트가 제거되기 직전 실행, 주로 비동기 요청을 제거하는 곳, 제거하지 않으면 컴포넌트가 사라져도 계속 실행 -> 메모리 누수
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  changeHand = () => {
    const { imgCoord } = this.state;
    if (imgCoord === rspCoords.바위) {
      this.setState({
        imgCoord: rspCoords.가위,
      });
    } else if (imgCoord === rspCoords.가위) {
      this.setState({
        imgCoord: rspCoords.보,
      });
    } else if (imgCoord === rspCoords.보) {
      this.setState({
        imgCoord: rspCoords.바위,
      });
    }
  };

  onClickBtn = (choice) => () => {
    // 버튼을 연속으로 눌렀을 떄 setTimeout이 반복되는 버그 해결
    if (this.clickable) {
      clearInterval(this.interval);
      this.clickable = false;
      const { imgCoord } = this.state;
      const myScore = scores[choice];
      const cpuScore = scores[computerChoice(imgCoord)];
      const diff = myScore - cpuScore;
      console.log(myScore, cpuScore)
      if (diff === 0) {
        this.setState({
          result: "비겼습니다",
        });
      } else if ([-1, 2].includes(diff)) {
        this.setState((prev) => {
          return {
            result: "이겼습니다",
            score: prev.score + 1,
          };
        });
      } else if ([1, -2].includes(diff)) {
        this.setState((prev) => {
          return {
            result: "졌어요",
            score: prev.score - 1,
          };
        });
      }
      setTimeout(() => {
        this.clickable = true;
        this.interval = setInterval(this.changeHand, 100);
      }, 1000);
    }
  };

  render() {
    const { result, score, imgCoord } = this.state;
    return (
      <>
        <div
          id="computer"
          style={{
            background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`,
          }}
        ></div>
        {this.clickable && 
        <div>
          {/* 매서드 안에 함수를 호출하는 부분이 있을 경우  */}
          {/* 그 함수를 고차함수로 만들어서 간결하게 만들 수 있다. */}
          {/* onClick={(e) => this.onClickBtn("바위")} */}
          <button id="rock" className="btn" onClick={this.onClickBtn("바위")}>
            바위
          </button>
          <button
            id="scissor"
            className="btn"
            onClick={this.onClickBtn("가위")}
          >
            가위
          </button>
          <button id="paper" className="btn" onClick={this.onClickBtn("보")}>
            보
          </button>
        </div>
        }
        
        <div>{result}</div>
        <div>현재 {score}점</div>
      </>
    );
  }
}

export default Rsp;
