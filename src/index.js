const express = require("express");

const app = express();

const userController = require("./controllers/user.controller");
const projectController = require("./controllers/project.controller");
const recommendationController = require("./controllers/recommendation.controller");

app.use(express.json());
app.use("./recommendations", recommendationController);
app.use("/users", userController);
app.use("/projects", projectController);

module.exports = app;
