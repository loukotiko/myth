import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import CharacterSwitch from "./pages/CharacterSwitch";

function App() {
  return (
    <Router>
      <Switch>
        <Route path={"/:role/:character"}>
          <CharacterSwitch />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
