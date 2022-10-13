const React = require('react');
const { useState, useRef } = React;

const Gugudan = () => {
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputEl = useRef(null);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (parseInt(value) === first * second) {
      // 정답일때 정답값도 같이 보여주기
      setResult('정답: ' + value);
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setValue('');
      inputEl.current.focus();
    } else {
      setResult('땡');
      setValue('');
      inputEl.current.focus();
    }
  };
  return (
    //<> == <React.fragment>
    <> 
      <div>{first} 곱하기 {second}는?</div>
      <form onSubmit={onSubmitForm}>
        <input
          ref={inputEl}
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button>입력!</button>
      </form>
      <div id="result">{result}</div>
    </>
  );
};

module.exports = Gugudan;