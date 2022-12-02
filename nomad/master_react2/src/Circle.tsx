import { useState } from "react";
import styled from "styled-components";

// Container의 타입선언
interface ContainerProps {
  bgColor: string;
  borderColor: string;
}
// Container 스타일 컴포넌트
const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: ${(props) => props.bgColor};
  border: 30px solid ${(props) => props.borderColor};
  color: white;
  text-align: center;
`;
// Circle의 타입선언
interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}
// Circle 컴포넌트
const Circle = ({ bgColor, borderColor, text= "default text" }: CircleProps) => {
  const [counter, setCounter] = useState<number|string>(1 );
  return (
    <Container
      bgColor={bgColor}
      borderColor={borderColor ?? bgColor}
    >{text}</Container>
  );
};

export default Circle;

interface PlayerShape {
  name: string;
  age: number;
}

const sayHello = (playerObj: PlayerShape) =>
  `Hello ${playerObj.name} you ar ${playerObj.age} old.`;
sayHello({ name: "hong", age: 30 });
