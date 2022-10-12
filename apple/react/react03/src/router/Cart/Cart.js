import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
// import { changeName } from "../../store";
import { changeAge } from "../../store/userSlice";
import { counter, deleteCart } from "../../store";
const Cart = () => {
  const cartData = useSelector((state) => state.cartData);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(changeAge(20));
        }}
      >
        버튼
      </button>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
            <th>삭제하기</th>
          </tr>
        </thead>

        <tbody>
          {cartData.map((item, index) => (
            <tr key={(item, index)}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.count}</td>
              <td>
                <button
                  onClick={() => {
                    dispatch(counter(item.id));
                  }}
                >
                  +
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    dispatch(deleteCart(item.id));
                    console.log(item.id);
                  }}
                >
                  삭제
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
export default Cart;
