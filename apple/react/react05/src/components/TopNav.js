import axios from "axios";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

const TopNav = () => {
  let result = useQuery('username', () => {
    return axios.get('https://codingapple1.github.io/userdata.json').then((a) => {
      return a.data;
    });
  })
  const navigate = useNavigate();
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand onClick={()=>{navigate('/')}}>
          <img src={process.env.PUBLIC_URL + "/logo.png"} width="100px" />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={()=>{navigate('/detail')}}>Detail</Nav.Link>
          <Nav.Link onClick={()=>{navigate('/Cart')}} href="#pricing">Cart</Nav.Link>
        </Nav>
        <h3 style={{color: 'white', textAlign: 'right'}}>
          {/* {result.isLoading ? '로딩중' : 'Hi ' + result.data.name} */}
          {result.isLoading && '로딩중'}
          {result.err && '에러'}
          {result.data && result.data.name}
        </h3>
      </Container>
    </Navbar>
  )
}

export default TopNav;