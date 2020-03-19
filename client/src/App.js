import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Startpage from "./components/Startpage";
import Camera from "./components/CameraComponents/Camera";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
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
            render={() => {
              return <Camera />;
            }}
          />
          {/* <Route
            path="/music"
            exact
            render={() => {
              return <Music />;
            }}
          /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
