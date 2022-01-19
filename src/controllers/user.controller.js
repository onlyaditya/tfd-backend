const express = require("express");
const User = require("../models/user.model");
const crudController = require("./crud.controller");

const router = express.Router();

router.get("", crudController(User).getAll);

router.get("/:id", crudController(User).getOne);

router.patch("/:id", crudController(User).updateItem);

router.delete("/:id", crudController(User).deleteItem);

module.exports = router;
