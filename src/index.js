const express = require("express");

const passport = require("./config/passport");

const app = express();

const userController = require("./controllers/user.controller");
const projectController = require("./controllers/project.controller");
const recommendationController = require("./controllers/recommendation.controller");
const { register, login } = require("./controllers/auth.controller");
app.use(express.json());

app.post("/register", register);
app.post("/login", login);

app.use(passport.initialize());

app.get("/auth/github", passport.authenticate("github"));

app.get(
  "/auth/github/callback",
  passport.authenticate("github", { failureRedirect: "/failure" }),
  function (req, res) {
    // Successful authentication, redirect home.
    return res.status(201).json({ user: req.user.user, token: req.user.token });
  }
);

app.get("/failure", (req, res) => {
  return res.send("Failure");
});

app.use("/recommendations", recommendationController);
app.use("/users", userController);
app.use("/projects", projectController);

module.exports = app;
