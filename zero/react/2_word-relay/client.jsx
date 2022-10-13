const React = require("react");
// 'react-dom' -> 'react-dom/client'
const ReactDOM = require('react-dom/client');
const WordRelay = require("./WordRelayClass");

// ReactDom.render(<WordRelay />, document.querySelector("#root"));
ReactDOM.createRoot(document.querySelector("#root")).render(<WordRelay />); 