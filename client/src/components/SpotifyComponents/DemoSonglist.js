import React from "react";
import { NavLink } from "react-router-dom";
import Modalplayer from "./Playlistmodal";

function DemoPlaylist() {
  return (
    <div className="playlist">
      <NavLink to="/playlist2">
        <h3 className="switchplaylist">To Equilibrium</h3>
      </NavLink>
      <Modalplayer />
      <h1 className="playlist__title">Happy</h1>
      <div className="playlist__content1">
        <div className="playlist__info1">
          <h2 className="playlist__songname1">Song Name: Happy</h2>
          <h2 className="playlist__albumname1">Album Name: GIRL</h2>
          <h2 className="playlist__artistname1">Artist: Pharrell Williams</h2>
        </div>
      </div>
      <div className="playlist__content3">
        <div className="playlist__info3">
          <h2 className="playlist__songname3">
            Song Name: Don't Worry Be Happy
          </h2>
          <h2 className="playlist__albumname3">Album Name: Simple Pleasures</h2>
          <h2 className="playlist__artistname3">Artist: Bobby McFerrin</h2>
        </div>
      </div>
      <div className="playlist__content2">
        <div className="playlist__info2">
          <h2 className="playlist__songname2">
            Song Name: Best Day Of My Life
          </h2>
          <h2 className="playlist__albumname2">Album Name: Oh, What A Life</h2>
          <h2 className="playlist__artistname2">Artist: American Authors</h2>
        </div>
      </div>
      <div className="playlist__content4">
        <div className="playlist__info4">
          <h2 className="playlist__songname4">Song Name: Here Comes The Sun</h2>
          <h2 className="playlist__albumname4">Album Name: Abbey Road</h2>
          <h2 className="playlist__artistname4">Artist: The Beatles</h2>
        </div>
      </div>
      <div className="playlist__content5">
        <div className="playlist__info5">
          <h2 className="playlist__songname5">Song Name: Shut Up And Dance</h2>
          <h2 className="playlist__albumname5">Album Name: TALKING IS HARD</h2>
          <h2 className="playlist__artistname5">Artist: WALK THE MOON</h2>
        </div>
      </div>
    </div>
  );
}

export default DemoPlaylist;
