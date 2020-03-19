const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express());

app.use(express.static("public"));

const facedetectRoute = require("./routes/api/facedetection");
app.use("/api/facedetection", facedetectRoute);

const port = 5000;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
