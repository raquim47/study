const React = require('react');
// 'react-dom' -> 'react-dom/client'
const ReactDOM = require('react-dom/client');

const Gugudan = require('./Gugudan');
// ReactDOM.render(<Gugudan />, document.querySelector('#root'));
ReactDOM.createRoot(document.querySelector("#root")).render(
  <Gugudan />
);