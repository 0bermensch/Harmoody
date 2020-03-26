import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Startpage from "./components/Startpage";
import Camera from "./components/CameraComponents/Camera";
import DemoPlaylist from "./components/SpotifyComponents/DemoSonglist";
import DemoPlaylist2 from "./components/SpotifyComponents/Demo2Songlist";
import About from "./components/About";

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
          <Route
            path="/about"
            render={() => {
              return <About />;
            }}
          />
          <Route
            path="/playlist"
            render={() => {
              return <DemoPlaylist />;
            }}
          />
          <Route
            path="/playlist2"
            render={() => {
              return <DemoPlaylist2 />;
            }}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
