import React from "react";
import { NavLink } from "react-router-dom";
import backgroundvid from "../assets/startpage-background.mp4";

function Startpage() {
  return (
    <div className="startpage">
      <video
        autoPlay="autoplay"
        loop="loop"
        muted
        className="startpage__backgroundvid"
      >
        <source src={backgroundvid} type="video/mp4" />
      </video>

      <div className="startpage__content">
        <NavLink to="/camera">
          <h2 className="startpage__startbutton">Get Started</h2>
        </NavLink>
        <NavLink to="/about">
          <h2 className="startpage__about">About</h2>
        </NavLink>
      </div>
    </div>
    // <div className="startpage">
    //   <video
    //     className="startpage__backgroundvideo"
    //     loop="loop"
    //     autoPlay="autoplay"
    //   >
    //     <source src={backgroundvid} type="video/mp4" />

    //   </video>
    // </div>
  );
}

export default Startpage;
