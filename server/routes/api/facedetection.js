const express = require("express");
const router = express.Router();
const fs = require("fs");
const { base64encode, base64decode } = require("nodejs-base64");
const request = require("request");

// Replace <Subscription Key> with your valid subscription key.
const subscriptionKey = "21fb1101d1164db88ac4ca918795c3cb";

// You must use the same location in your REST call as you used to get your
// subscription keys. For example, if you got your subscription keys from
// westus, replace "westcentralus" in the URL below with "westus".
const uriBase =
  "https://ubermensch.cognitiveservices.azure.com/face/v1.0/detect";

// Request parameters.
const params = {
  returnFaceId: "true",
  returnFaceLandmarks: "false",
  returnFaceAttributes:
    "age,gender,headPose,smile,facialHair,glasses," +
    "emotion,hair,makeup,occlusion,accessories,blur,exposure,noise"
};

/*
 *  /api/facedetection/photo
 */
router.post("/photo", (req, res) => {
  // let buff = new Buffer(req.body.photo);
  let capturedPic = req.body.photo;
  // console.log("base64data", base64data);
  let base64Image = capturedPic.split(";base64,").pop();

  let encodedPic = fs.writeFile(
    "image.png",
    base64Image,
    { encoding: "base64" },
    function(err) {
      console.log("File created");
    }
  );

  const options = {
    uri: uriBase,
    qs: params,
    body: `{"url": ' + '"image.png'"}`,
    headers: {
      "Content-Type": "application/json",
      "Ocp-Apim-Subscription-Key": subscriptionKey
    }
  };

  request.post(options, (error, response, body) => {
    if (error) {
      console.log("Error: ", error);
      return;
    }
    let jsonResponse = JSON.stringify(JSON.parse(body), null, "  ");
    console.log("JSON Response\n");
    console.log(jsonResponse);
    res.json(jsonResponse);
  });
});

module.exports = router;
