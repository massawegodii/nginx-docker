const express = require("express");
const path = require("path");
const app = express();

const appName = process.env.APP_NAME || 3000;

app.use("/images", express.static(path.join(__dirname, "images")));

app.use("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
  console.log(`Request served by ${appName}`);
});

app.get("/app1", (req, res) => {
  res.send("This is App1");
});

app.get("/app2", (req, res) => {
  res.send("This is App2");
});

app.listen(port, () => {
  console.log(`${appName} is listening on port ${port}`);
});
