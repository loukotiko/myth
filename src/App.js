import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nothing from "./pages/Nothing";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/nothing">
          <Nothing />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
