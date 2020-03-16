import React from "react";
import { NavLink } from "react-router-dom";

function Startpage() {
  return (
    <div>
      <NavLink to="/camera">
        <h2 className="startpage__startbutton">Get Started</h2>
      </NavLink>
    </div>
  );
}

export default Startpage;
