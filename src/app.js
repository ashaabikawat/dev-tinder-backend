const express = require("express");

const app = express();

// handling incoming requests

app.get("/user", (req, res) => {
  res.send({ firstName: "Asha", lastName: "Bikawat" });
});

app.post("/user/:id/:name/:pass", (req, res) => {
  //   console.log(req.query);
  console.log(req);
  res.send("data saved succesfully");
});

// creating server instance
app.listen(3000, () => {
  console.log("server is  listening on port 3000");
});
