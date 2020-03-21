import React, { useState } from "react";
import Camera, { IMAGE_TYPES } from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import ImagePreview from "./ImagePreview";
import axios from "axios";

function CameraCom(props) {
  const [dataUri, setDataUri] = useState("");

  function handleTakePhotoAnimationDone(dataUri) {
    console.log("takePhoto");
    setDataUri(dataUri);
    axios
      .post("/api/facedetection/photo", { photo: dataUri })
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  }

  const isFullscreen = false;
  return (
    <div>
      {dataUri ? (
        <ImagePreview dataUri={dataUri} isFullscreen={isFullscreen} />
      ) : (
        <Camera
          onTakePhotoAnimationDone={handleTakePhotoAnimationDone}
          isFullscreen={isFullscreen}
          // imageType={IMAGE_TYPES.JPG}
        />
      )}
    </div>
  );
}

export default CameraCom;
