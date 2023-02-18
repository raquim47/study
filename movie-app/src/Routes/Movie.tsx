import styled from "styled-components";

const Wrapper = styled.main`
  border :1px solid red ;
  height: 500px;
`

function Movie(){
  return <Wrapper><h2>movie</h2></Wrapper>
}
export default Movie;