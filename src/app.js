const express = require("express");

const app = express();

// handling incoming requests
app.use("/hello", (req, res) => {
  res.send("Hello hello hello");
});

app.use("/test", (req, res) => {
  res.send("Hello from test");
});

// creating server instance
app.listen(3000, () => {
  console.log("server is  listening on port 3000");
});
