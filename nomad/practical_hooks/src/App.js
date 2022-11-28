import useInput from "./hooks/useInput";
import useTabs from "./hooks/useTabs";
import useTitle from "./hooks/useTitle";
import useClick from "./hooks/useClick";
import useConfirm from "./hooks/useConfirm";
import usePreventLeave from "./hooks/usePreventLeave";
import useBeforeLeave from "./hooks/useBeforeLeave";
import useFadeIn from "./hooks/useFadeIn";
import useNetwork from "./hooks/useNetwork";
import useScroll from "./hooks/useScroll";
import useFullscreen from "./hooks/useFullscreen";
import useNotification from "./hooks/useNotification";
import useAxios from "./hooks/useAxios";

const content = [
  {
    tab: "Section 1",
    content: "Content of the Section 1",
  },
  {
    tab: "Section 2",
    content: "Content of the Section 2",
  },
];

const App = () => {
  // useInput
  const name = useInput("Mr.");
  // useTabs
  const { curItem, changeItem } = useTabs(0, content);
  // useTitle
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("home"), 2000);
  // useClick
  const sayHello = () => console.log("Hello");
  const refTitle = useClick(sayHello);
  // useConfirm
  const deleteWorld = () => console.log("World deleted");
  const rejected = () => console.log("confirm was rejected");
  const confirmDelete = useConfirm("are you sure?", deleteWorld);
  // usePreventLeave
  const { enablePrevent, disablePrevent } = usePreventLeave();
  // useBeforeLeave
  const begForStay = () => console.log("Pls dont leave");
  useBeforeLeave(begForStay);
  // useFadeIn
  const fadeInH2 = useFadeIn(1, 2);
  const fadeInH3 = useFadeIn(5);
  // useNetwork
  const handleNetworkChange = (online) => {
    console.log(online ? "now online" : "now offline");
  };
  const onLine = useNetwork(handleNetworkChange);
  // useScroll
  const { y } = useScroll();
  // useFullscreen
  const onFullScreen = (isFull) => {
    console.log(isFull ? "now full" : "now small");
  };
  const { el, triggerFull, exitFull } = useFullscreen(onFullScreen);
  // useNotification
  const triggerNotif = useNotification("I can use Notification", {
    body: "this is body part",
  });
  // useAxios
  const { loading, data, error, refetch } = useAxios({
    url: "https://yts.mx/api/v2/list_movies.json",
  });
  console.log(loading, data, error);

  return (
    <div className="App" style={{ height: "300vh" }}>
      <h1>react practical hooks</h1>
      <hr />
      <section>
        <input placeholder="name" {...name} />
      </section>
      <hr />
      <section>
        {content.map((section, index) => (
          <button key={section.tab} onClick={() => changeItem(index)}>
            {section.tab}
          </button>
        ))}
        <div>{curItem.content}</div>
      </section>
      <hr />
      <section>
        <h2 ref={refTitle}>Hi</h2>
      </section>
      <hr />
      <section>
        <button onClick={confirmDelete}>Delete world</button>
      </section>
      <hr />
      <section>
        <button onClick={enablePrevent}>Protect</button>
        <button onClick={disablePrevent}>Unprotect</button>
      </section>
      <hr />
      <section>
        <h2 {...fadeInH2}>Fade Effect1</h2>
        <h3 {...fadeInH3}>Fade Effect2</h3>
      </section>
      <hr />
      <section>
        <h2>{onLine ? "Online" : "Offline"}</h2>
      </section>
      <hr />
      <section style={{ paddingBottom: 60 }}>
        <h2 style={{ position: "fixed", color: y > 100 ? "red" : "blue" }}>
          Scroll
        </h2>
      </section>
      <hr />
      <section>
        <div ref={el}>
          <img src="https://raw.githubusercontent.com/raquim47/data/main/cozy/img/women_top/women-top07.jpg" />
          <button onClick={exitFull}>Exit fullscreen</button>
        </div>
        <button onClick={triggerFull}>Make fullscreen</button>
      </section>
      <hr />
      <section>
        <button onClick={triggerNotif}>Notification</button>
      </section>
      <hr />
      <section>
        <h2>{data && data.status}</h2>
        <h3>{loading && "Loading"}</h3>
        <button onClick={refetch}>axios</button>
      </section>
    </div>
  );
};

export default App;
