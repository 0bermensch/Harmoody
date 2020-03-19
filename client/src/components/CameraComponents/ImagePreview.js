import React, { useState } from "react";
import PropTypes from "prop-types";
import "./ImagePreview.css";
import { NavLink } from "react-router-dom";

export const ImagePreview = ({ dataUri, isFullscreen }) => {
  let classNameFullscreen = isFullscreen ? "image-preview-fullscreen" : "";

  return (
    <div className={"imagepreview " + classNameFullscreen}>
      <img src={dataUri} alt="face" />
      <h1 className="imagepreview__emotion">Emotion</h1>
      <NavLink to="/">
        <h1 className="imagepreview__retake">Retake</h1>
      </NavLink>
      <NavLink to="/Mainplayer">
        <h1 className="imagepreview__proceed">Proceed to Music</h1>
      </NavLink>
    </div>
  );
};

// now I need to be able to get the emotion info from the backend and let the user know what

ImagePreview.propTypes = {
  dataUri: PropTypes.string,
  isFullscreen: PropTypes.bool
};

export default ImagePreview;
