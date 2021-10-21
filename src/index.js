import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./components/App";
import Header from "./components/Header";
import Aritcles from "./components/Aritcles";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Header />
    <Aritcles />
  </React.StrictMode>,
  document.getElementById("root")
);
