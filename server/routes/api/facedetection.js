"use strict";

const request = require("request");

// Replace <Subscription Key> with your valid subscription key.
const subscriptionKey = "21fb1101d1164db88ac4ca918795c3cb";

// You must use the same location in your REST call as you used to get your
// subscription keys. For example, if you got your subscription keys from
// westus, replace "westcentralus" in the URL below with "westus".
const uriBase =
  "https://ubermensch.cognitiveservices.azure.com/face/v1.0/detect";

const imageUrl =
  "https://image.shutterstock.com/image-photo/human-face-facial-expression-men-260nw-299279414.jpg";

// Request parameters.
const params = {
  returnFaceId: "true",
  returnFaceLandmarks: "false",
  returnFaceAttributes:
    "age,gender,headPose,smile,facialHair,glasses," +
    "emotion,hair,makeup,occlusion,accessories,blur,exposure,noise"
};

const options = {
  uri: uriBase,
  qs: params,
  body: '{"url": ' + '"' + imageUrl + '"}',
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
});
