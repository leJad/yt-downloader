const express = require("express");
const cors = require("cors");
const yt = require("ytdl-core");
const app = express();

app.use(cors());

app.get("/install", (req, res) => {
  var URL = req.query.URL;
  res.header("Content-Disposition", 'attachment; filename="suckitpatrick.mp4');
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
