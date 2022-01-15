const express = require("express");
const User = require("../models/user.model");
const crudController = require("./crud.controller");

const router = express.Router();

router.post("", crudController(User, [{ path: "projects" }]).post);

router.get("", crudController(User, [{ path: "projects" }]).getAll);

router.get("/:id", crudController(User, [{ path: "projects" }]).getOne);

router.patch("/:id", crudController(User, [{ path: "projects" }]).updateItem);

router.delete("/:id", crudController(User, [{ path: "projects" }]).deleteItem);

module.exports = router;
