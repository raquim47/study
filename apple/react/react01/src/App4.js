import { useState } from "react";
import { useEffect } from "react";
var count = 0;
function App4() {
  let [age, setAge] = useState(20);
  return (
    <div>
      <div>안녕하십니까 전 {count}</div>
      <button
        onClick={() => {
          count = count + 1;
          if ( count < 3 ) {
            setAge(age+1)
          }
        }}
      >
        누르면한살먹기
      </button>
    </div>
  );
}
export default App4;
