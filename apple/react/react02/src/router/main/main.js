import "./main.scss";

const Intro = () => {
  return (
    <ul className="intro">
      <li>
        <span>Fashions fade</span>
      </li>
      <li>
        <span>style is</span>
      </li>
      <li>
        <span>eternal</span>
      </li>
    </ul>
  );
};

const Main = () => {
  return (
    <>
      <div className="main-bg">
        <img src={process.env.PUBLIC_URL + "img/main-bg2.jpg"} />
      </div>
      <Intro />
    </>
  );
};

export default Main;
