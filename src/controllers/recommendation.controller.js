const express = require("express");
const Recommendation = require("../models/recommendation.model");
const router = express.Router();

const crudController = require("./crud.controller");

router.post(
  "",
  crudController(Recommendation, [
    { path: "giver_id", select: { first_name: 1 } },
    { pah: "receiver_id", select: { first_name: 1 } },
  ]).post
);

router.get(
  "",
  crudController(Recommendation, [
    { path: "giver_id", select: { first_name: 1 } },
    { pah: "receiver_id", select: { first_name: 1 } },
  ]).getAll
);

router.get(
  "/:id",
  crudController(Recommendation, [
    { path: "giver_id", select: { first_name: 1 } },
    { pah: "receiver_id", select: { first_name: 1 } },
  ]).getOne
);

router.patch(
  "/:id",
  crudController(Recommendation, [
    { path: "giver_id", select: { first_name: 1 } },
    { pah: "receiver_id", select: { first_name: 1 } },
  ]).updateItem
);

router.delete(
  "/:id",
  crudController(Recommendation, [
    { path: "giver_id", select: { first_name: 1 } },
    { pah: "receiver_id", select: { first_name: 1 } },
  ]).deleteItem
);

module.exports = router;
