import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={() => {
              return <Startpage />;
            }}
          />
          <Route
            path="/camera"
            exact
            render={() => {
              return <Camera />;
            }}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
