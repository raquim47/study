const React = require("react");
const { useState, useRef } = React;

const WordRelay = () => {
  const [word, setWord] = useState("고구마");
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const inputRef = useRef(null);
  // 1. 컨트롤드 인풋
  const onSubmitForm = (e) => {
    e.preventDefault();
    if (word[word.length - 1] === value[0]) {
      setResult("정답!");
      setWord(value);
      setValue("");
    } else {
      setResult("땡");
      setValue("");
    }
    //   inputRef.current.focus();
    // };
    // 2. 언컨트롤드 인풋
    // const onSubmitForm = (e) => {
    //   e.preventDefault();
    //   if (word[word.length - 1] === e.target.children.word.value[0]) {
    //     setResult("정답!");
    //     setWord(e.target.children.word.value);
    //     e.target.children.word.value = '';
    //   } else {
    //     setResult("땡");
    //     e.target.children.word.value = '';
    //   }
    //   inputRef.current.focus();
    // };

    const onChangeInput = (e) => {
      setValue(e.target.value);
    };

    return (
      <>
        <div>{word}</div>
        <form onSubmit={onSubmitForm}>
          {/* 1. 컨트롤드 인풋 */}
          <input
            ref={inputRef}
            value={value}
            onChange={onChangeInput}
            type="text"
          />
          {/* 2. 언컨트롤드 인풋 
        <input
          defaultValue="고구마"
          ref={inputRef}
          id="word"
          type="text"
        />
        */}
          <button>클릭!!!</button>
        </form>
        <div>{result}</div>
      </>
    );
  };
};

module.exports = WordRelay;
