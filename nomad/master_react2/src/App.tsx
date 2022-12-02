// import Circle from "./Circle";
import React, { useState } from "react";
import styled from "styled-components";

function App() {
  const [value, setValue] = useState("");
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setValue(value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(value);
    setValue("");
  };
  const Container = styled.div`
    background-color: ${(props) => props.theme.bgColor};
  `;
  const H1 = styled.h1`
    color: ${(props) => props.theme.textColor};
  `;
  return (
    <div>
      {/* <Circle bgColor="teal" borderColor="black"/>
      <Circle bgColor="tomato" text="Hello" /> */}
      <Container>
        <H1>Hello</H1>
      </Container>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          type="text"
          placeholder="username"
          value={value}
        />
        <button>Log in</button>
      </form>
    </div>
  );
}

export default App;
