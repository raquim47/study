import React, { Component } from "react";

class Response extends Component {
  state = {
    state: "waiting",
    message: "클릭해서 시작",
    result: [],
  };

  timeout;
  startTime; // 렌더링이 일어나지 않아도 되면 state대신 그냥 변수로 만든다.
  endTime;

  onClickScreen = () => {
    const { state } = this.state;
    if (state === "waiting") {
      this.setState({
        state: "ready",
        message: "초록색이 되면 클릭",
      });
      this.timeout = setTimeout(() => {
        this.setState({
          state: "now",
          message: "지금 클릭",
        });
        this.startTime = new Date();
      }, Math.floor(Math.random() * 1000) + 2000);
    } else if (state === "ready") {
      // 성급하게 클릭
      clearTimeout(this.timeout);
      this.setState({
        state: "waiting",
        message: "성급했습니다. 초록색이 되면 클릭하세요!",
      });
    } else if (state === "now") {
      // 반응속도 체크
      this.endTime = new Date();
      this.setState((prev) => {
        return {
          state: "waiting",
          message: "클릭해서 시작하세요",
          result: [...prev.result, this.endTime - this.startTime],
        };
      });
    }
  };

  onReset = () => {
    this.setState({
      result: [],
    });
  };

  renderAverage = () => {
    const { result } = this.state;
    return result.length === 0 ? null : (
      <>
        <div>
          평균 시간 : {result.reduce((a, c) => a + c) / result.length}ms
        </div>
        <button onClick={this.onReset}>리셋</button>
      </>
    );
  };

  render() {
    const { state, message } = this.state;
    return (
      <>
        <div id="screen" className={state} onClick={this.onClickScreen}>
          {message}
        </div>
        {/* 빈배열.reduce(a,c) 초기값이 없어서 에러, 삼항연산자 필요 , false,undefined, null은 jsx에서 태그 없음을 의미  */}
        {this.renderAverage()}
        {/* {this.state.result.length !== 0 && <div>평균 시간 : {this.state.result.reduce((a, c) => a + c) / this.state.result.length}ms</div>} */}
      </>
    );
  }
}
export default Response;
