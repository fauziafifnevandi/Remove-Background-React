import React from "react";
import "./assets/styles.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Workspace from "./pages/Workspace";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/workspace" exact component={Workspace}></Route>
      </Switch>
    </Router>
  );
}

export default App;
