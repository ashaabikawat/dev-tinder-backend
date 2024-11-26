const auth = (req, res, next) => {
  const token = "abc";
  const isAuthenticated = token === "xyz";
  console.log("admin middleware is checking");

  if (isAuthenticated) {
    next();
  } else {
    res.status(400).send("invalid admin");
  }
};
const user = (req, res, next) => {
  const token = "abc";
  const isAuthenticated = token === "xyz";
  console.log("user middleware is checking");

  if (isAuthenticated) {
    next();
  } else {
    res.status(400).send("invalid user");
  }
};

module.exports = { auth, user };
