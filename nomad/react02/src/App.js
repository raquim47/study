import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function Hello() {
  useEffect(() => {
    console.log("created");
    return () => console.log("destroyed");
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [showing, setShowing] = useState(false);
  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (e) => setKeyword(e.target.value);
  // 처음 랜더링 될 때만 코드를 실행하고 싶다?
  console.log("i run all the time");
  // 처음 한 번!
  useEffect(() => {
    console.log("Call the api");
  }, []);
  // 처음 한 번, 그리고 특정 state가 변할 때 마다
  useEffect(() => {
    if (keyword && keyword.length > 5) {
      console.log("search for", keyword);
    }
  }, [keyword]);

  return (
    <div className="App">
      <h1 className={styles.title}>Welcome</h1>
      <Button text={"CSS"} />

      <hr />
      <input
        value={keyword}
        type="text"
        onChange={onChange}
        placeholer="Search here"
      ></input>
      <button onClick={onClick}>Click me</button>
      <h2>{counter}</h2>

      <hr />
      <button
        onClick={() => {
          setShowing((prev) => !prev);
        }}
      >
        {showing ? "Hide" : "Show"}
      </button>
      {showing ? <Hello /> : null}
    </div>
  );
}

export default App;
