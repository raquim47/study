import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Nav } from "react-bootstrap";
import styles from "./detail.scss";
import { addCart } from "../../store";
import { useDispatch } from "react-redux";

// styled-component 장점
// 1. 스타일이 다른 js파일로 오염되지 않음(오염방지 컴포넌트.module.css)
// 2. 페이지 로딩시간 단축
// 3. props로 컴포넌트 재활용 가능

// 컴포넌트의 Lifecycle
// mount, update, unmount
// 중간 중간 코드 실행 가능

const YellowBtn = styled.button`
  background: ${(props) => props.bg};
  color: red;
  padding: 10px;
`;

const Detail = (props) => {
  // mount, update시 여기 코드 실행(html 렌더링 후에 실행)
  // 어려운 연산, 서버에서 데이터 가져오는 작업, 타이머
  // effect? 함수의 핵심 기능과 상관없는 부가기능
  const [inputValue, setInputValue] = useState("");
  const [tab, setTab] = useState(0);
  const [fade, setFade] = useState("");
  const [fade2, setFade2] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [alert, setAlert] = useState(true);
  useEffect(() => {
    // const a = setTimeout(() => {
    //   setAlert(false);
    // }, 2000);
    if (isNaN(inputValue) == true) {
      alert("dont");
      setInputValue("");
    }
  }, [inputValue]);
  // [] 넣으면 mount 될때만 실행
  // 정리
  //useEffect(()=>{}) 1. 재랜더링때마다 코드 실행
  //useEffect(()=>{}, []) 2. mount시 1회 코드 실행
  //useEffect(()=>{
  //    return ()=>{   3. unmount 시 1회 코드 실행
  // }}, [])
  const { id } = useParams();
  const findShoes = props.shoes.find((item) => {
    return item.id == id;
  });

  useEffect(() => {
    setFade2("end");
    return () => {
      setFade2("");
    };
  }, []);
  return (
    <div className={`start ${fade2} `}>
      {id > 5 || isNaN(id) === true ? (
        <div>없음</div>
      ) : (
        <div className="container">
          {alert == true ? (
            <div className="alert alert-warning">2초 이내 구매시 할인</div>
          ) : null}
          <div className="row">
            <div className="col-md-6">
              <img
                src={
                  "https://codingapple1.github.io/shop/shoes" +
                  (findShoes.id + 1) +
                  ".jpg"
                }
                width="100%"
              />
            </div>
            <div className="col-md-6">
              <input
                value={inputValue}
                onChange={(e) => {
                  setInputValue(e.target.value);
                }}
              />
              <h4 className="pt-5">{findShoes.title}</h4>
              <p>{findShoes.content}</p>
              <p>{findShoes.price}</p>
              <button
                className="btn btn-danger"
                onClick={() => {
                  dispatch(
                    addCart({
                      id: findShoes.id,
                      name: findShoes.title,
                      count: 1,
                    })
                  );
                  navigate("/cart");
                }}
              >
                주문하기
              </button>
            </div>
          </div>
        </div>
      )}
      <Tab setTab={setTab} />
      <TabContent tab={tab} fade={fade} setFade={setFade} />
    </div>
  );
};

const Tab = (props) => {
  return (
    <Nav variant="tabs" defaultActiveKey="link0">
      <Nav.Item>
        <Nav.Link
          eventKey="link0"
          onClick={() => {
            props.setTab(0);
          }}
        >
          버튼0
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          eventKey="link1"
          onClick={() => {
            props.setTab(1);
          }}
        >
          버튼1
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          eventKey="link2"
          onClick={() => {
            props.setTab(2);
          }}
        >
          버튼2
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

// const TabContent = (props) => {
//   if (props.tab === 0) {
//     return <div>내용0</div>;
//   } else if (props.tab === 1) {
//     return <div>내용1</div>;
//   } else if (props.tab === 2) {
//     return <div>내용2</div>;
//   }
// };

const TabContent = ({ tab, fade, setFade }) => {
  useEffect(() => {
    const a = setTimeout(() => {
      setFade("end");
    }, 10);
    return () => {
      clearTimeout(a);
      setFade("");
    };
  }, [tab]);
  return (
    <div className={`start ${fade} `}>
      {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab]}
    </div>
  );
};
export default Detail;
