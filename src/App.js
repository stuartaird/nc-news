import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./css/style.css";
import Header from "./components/Header.js";
import Articles from "./components/Articles.js";
import { useState } from "react";

function App() {
  const [user, setUser] = useState("stuart");

  return (
    <BrowserRouter>
      <div className="App">
        <Header user={user} />
        <Articles />
      </div>
    </BrowserRouter>
  );
}

export default App;
