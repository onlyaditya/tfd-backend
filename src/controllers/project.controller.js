const express = require("express");
const Project = require("../models/project.model");
const router = express.Router();

const crudController = require("./crud.controller");

router.post(
  "",
  crudController(Project, [{ path: "contributors", select: { first_name: 1 } }])
    .post
);

router.get(
  "",
  crudController(Project, [{ path: "contributors", select: { first_name: 1 } }])
    .getAll
);

router.get(
  "/:id",
  crudController(Project, [{ path: "contributors", select: { first_name: 1 } }])
    .getOne
);

router.patch(
  "/:id",
  crudController(Project, [{ path: "contributors", select: { first_name: 1 } }])
    .updateItem
);

router.delete(
  "/:id",
  crudController(Project, [{ path: "contributors", select: { first_name: 1 } }])
    .deleteItem
);

module.exports = router;
