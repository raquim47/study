import { memo, useMemo, useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { increase, deleteCart } from "./../store";

const Child = memo(() => {
  // memo: props가 변할때만 재렌더링
  console.log("재랜더링");
  return <div>이건 재랜더링 안되게</div>;
});

const 어려운함수 = () => {
  return <></>;
};
function Cart() {
  const cartData = useSelector((state) => state.cartData);
  const dispatch = useDispatch();

  const 유즈메모 = useMemo(() => 어려운함수()); // 컴포넌트 첫렌더링 1회만 실행
  // useEffect : html render 이후에 실행
  // useMemo : render와 동시에

  // const [count, setCount] = useState(0);
  // const [age, setAge] = useState(20);
  const [countAge, setCountAge] = useState({ count: 0, age: 20 });
  // useEffect(() => {
  //   if (count !== 0 && count < 3) {
  //     setAge(age + 1);
  //   }
  // }, [count]);
  return (
    <>
      <Child count={countAge.count}></Child>
      <button
        onClick={() => {
          const newCountAge = { ...countAge };
          newCountAge.count++;
          if (newCountAge.count < 3) {
            newCountAge.age++;
            setCountAge(newCountAge);
          }
          // if (countAge.count < 3) {
          //   // setAge(age + 1);
          // }
        }}
      >
        +
      </button>
      <span>{countAge.count}</span>
      <div>안녕하세요 {countAge.age}살입니다.</div>
      <h3>장바구니</h3>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {cartData.map((item, i) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.count}</td>
              <td>
                <button
                  onClick={() => {
                    dispatch(increase(item.id));
                  }}
                >
                  +
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    dispatch(deleteCart(item.id));
                  }}
                >
                  삭제
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default Cart;
