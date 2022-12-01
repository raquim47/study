import styled, { keyframes } from "styled-components";
const Wrapper = styled.div`
  display: flex;
  background: ${(props) => props.theme.backgroundColor};
`;
const ani = keyframes`
  from {
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg)
  }
`;
const Text = styled.span`
  color: ${(props) => props.theme.textColor};
  font-size: 40px;
`;
const Box = styled.div`
  height: 200px;
  width: 200px;
  background: tomato;
  text-align: center;
  line-height: 200px;
  animation: ${ani} 1s linear infinite;
  ${Text} {
    &:hover {
      color: red;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <Text>hello</Text>
      </Box>
    </Wrapper>
  );
}

export default App;
