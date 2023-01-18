import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { hourSelector, minuteState } from "./atom";

function App() {
  const [minutes, setMinutes] = useRecoilState(minuteState);
  const hours = useRecoilValue(hourSelector);
  const onMinutesChange = (e:React.FormEvent<HTMLInputElement>) => {
    setMinutes(+e.currentTarget.value);
  }

  return (
    <>
      <input type="number" onChange={onMinutesChange} placeholder="Minutes" />
      <input type="number" value={hours} placeholder="Hours" />
    </>
  );
}

export default App;
