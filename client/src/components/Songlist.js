import React from "react";

function Songlist() {
  return (
    <div className="songlist">
      <h1 className="songlist__genre">Genre</h1>
      <div className="songlist__detail">
        <h2 className="songlist__detail--songname">SongName</h2>
        <h2 className="songlist__detail--albumname">AlbumName</h2>
        <h2 className="songlist__detail--artist">ArtistName</h2>
      </div>
    </div>
  );
}

export default Songlist;
