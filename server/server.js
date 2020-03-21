const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express());

app.use(express.static("public"));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));

app.get("/", (req, res) => {
  res.send(`<h1>Hello from express</h1>`);
});

const facedetectRoute = require("./routes/api/facedetection");
app.use("/api/facedetection", facedetectRoute);

const port = 5000;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
