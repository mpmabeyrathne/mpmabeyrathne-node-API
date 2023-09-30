const express = require("express");
const app = express();

//routes

app.get("/", (req, res) => {
  res.send("helloo");
});

app.listen(3000, () => {
  console.log("node api is runing on port 3000");
});
