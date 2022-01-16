const express = require("express");

const app = express();

const userController = require("./controllers/user.controller");
const projectController = require("./controllers/project.controller");
const recommendationController = require("./controllers/recommendation.controller");
const { register, login } = require("./controllers/auth.controller");
app.use(express.json());

app.post("/register", register);
app.post("/login", login);
app.use("/recommendations", recommendationController);
// app.use("/users", userController);
app.use("/projects", projectController);

module.exports = app;
