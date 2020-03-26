import React from "react";
import { NavLink } from "react-router-dom";
import Modalplayer2 from "./Playlistmodal2";
function DemoPlaylist1() {
  return (
    <div className="playlist2">
      <NavLink to="/playlist">
        <h3 className="switchplaylist2">To Amplify</h3>
      </NavLink>
      <Modalplayer2 />
      <h1 className="playlist2__title">Neutral</h1>
      <div className="playlist2__content1">
        <div className="playlist2__info1">
          <h2 className="playlist2__songname1">
            Song Name: It is a Beauteous Evening
          </h2>
          <h2 className="playlist2__albumname1">
            Album Name: It is a Beauteous Evening
          </h2>
          <h2 className="playlist2__artistname1">Artist: Thomasine Robinson</h2>
        </div>
      </div>
      <div className="playlist2__content3">
        <div className="playlist2__info3">
          <h2 className="playlist2__songname3">Song Name: Tapestry</h2>
          <h2 className="playlist2__albumname3">Album Name: Tapestry</h2>
          <h2 className="playlist2__artistname3">Artist: Bobby McFerrin</h2>
        </div>
      </div>
      <div className="playlist2__content2">
        <div className="playlist2__info2">
          <h2 className="playlist2__songname2">Song Name: Clouds</h2>
          <h2 className="playlist2__albumname2">Album Name: Clouds</h2>
          <h2 className="playlist2__artistname2">Luke Faulkner</h2>
        </div>
      </div>
      <div className="playlist2__content4">
        <div className="playlist2__info4">
          <h2 className="playlist2__songname4">Song Name: Joy Cycle</h2>
          <h2 className="playlist2__albumname4">Album Name: Joy Cycle</h2>
          <h2 className="playlist2__artistname4">Artist: Felted Mind</h2>
        </div>
      </div>
      <div className="playlist2__content5">
        <div className="playlist2__info5">
          <h2 className="playlist2__songname5">Song Name: Rainy Day</h2>
          <h2 className="playlist2__albumname5">Album Name: Rainy Day</h2>
          <h2 className="playlist2__artistname5">Artist: Peter Cavallo</h2>
        </div>
      </div>
    </div>
  );
}

export default DemoPlaylist1;
