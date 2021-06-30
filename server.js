const express = require("express");
const cors = require("cors");
const yt = require("ytdl-core");
const path = require("path");
const app = express();

app.use(express.static(__dirname + "/public"));

app.use(cors());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.get("/install", (req, res) => {
  var URL = req.query.URL;
  res.header("Content-Disposition", `attachment; filename="${URL}.mp4`);
  metainf = yt.getBasicInfo(URL);

  metainf.then(function (res) {
    console.log(res);
  });
  yt(URL, {
    format: "mp4",
  }).pipe(res);
});

app.listen(5500, () => {
  console.log("Port: 5500");
});
