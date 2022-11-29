import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { Provider } from "react-redux";
import storeTK from './storeTK'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={storeTK}>
    <App />
  </Provider>
  // </React.StrictMode>
);
