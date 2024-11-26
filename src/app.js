const express = require("express");
const { auth, user } = require("../Middlewares/auth");

const app = express();
app.use("/admin", auth);

app.get("/user/getAll", user, (req, res) => {
  res.send("all user data send");
});

app.delete("/user/deleteUser", user, (req, res) => {
  res.send("user deleted");
});

app.get("/user/login", (req, res) => {
  res.send("user logged in ");
});

app.get("/admin/getAll", (req, res) => {
  res.send("All data send");
});

app.delete("/admin/deleteUser", (req, res) => {
  res.send("User deleted successfully");
});

app.listen(3001, (req, res) => {
  console.log("server is listening on port 3000");
});
