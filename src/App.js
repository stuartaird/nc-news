import "./css/style.css";
import Header from "./components/Header.js";
import Articles from "./components/Articles.js";
import { useState } from "react";

function App() {
  const [user, setUser] = useState("stuart");

  return (
    <div className="App">
      <Header user={user} />
      <Articles />
    </div>
  );
}

export default App;
