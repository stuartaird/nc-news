import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./css/index.css";
import Header from "./components/Header.js";
import Articles from "./components/Articles.js";
import Article from "./components/Article.js";
import { useState } from "react";

function App() {
  const [user] = useState("Stuart");

  return (
    <BrowserRouter>
      <div className="App">
        <Header user={user} />
        <Switch>
          <Route path="/Articles/:article_id">
            <Article />
          </Route>
          <Route path="/">
            <Articles />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
