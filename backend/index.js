const connectToMongo = require("./db");
const express = require("express");

const app = express();
const port = 5173;
connectToMongo();
app.get("/", (req, res) => {
  res.send("Hello World! Get Message Hit");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
