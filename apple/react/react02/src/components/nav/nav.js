import "./nav.scss";

const Nav = (props) => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li
          onClick={() => {
            props.navigate("./men");
          }}
        >
          Men
        </li>
        <li>Women</li>
        <li>Login</li>
        <li>Cart</li>
      </ul>
    </nav>
  );
};
export default Nav;
