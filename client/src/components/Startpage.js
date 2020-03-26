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
        <h1 className="startpage__title">Harmoody</h1>
        <NavLink
          to="/camera"
          className="startpage__startbutton"
          style={{ textDecoration: "none" }}
        >
          Get Started
        </NavLink>
        <NavLink
          to="/about"
          className="startpage__about"
          style={{ textDecoration: "none" }}
        >
          About
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
