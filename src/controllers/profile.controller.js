const express = require("express");
const Profile = require("../models/profile.model");
const crudController = require("./crud.controller");

const router = express.Router();
router.post("", crudController(Profile, [{ path: "user_id" }]).post);

router.get("", crudController(Profile, [{ path: "user_id" }]).getAll);

router.get("/:id", crudController(Profile, [{ path: "user_id" }]).getOne);

router.patch("/:id", crudController(Profile, [{ path: "user_id" }]).updateItem);

router.delete(
  "/:id",
  crudController(Profile, [{ path: "user_id" }]).deleteItem
);

module.exports = router;
