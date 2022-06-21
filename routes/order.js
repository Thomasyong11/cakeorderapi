// import express from "express";
const express = require("express");

const router = express.Router();

import {
  cakeOrder,
  doughnutOrder,
  cupCakeOrder,
  getOrders,
  removecake,
  removecupcake,
  removedoughnut,
} from "../controllers/orders";

router.post("/cake", cakeOrder);
router.post("/doughnut", doughnutOrder);
router.post("/cupcake", cupCakeOrder);
router.get("/mymy", getOrders);
router.put("/mymy/deletecake", removecake);
router.put("/mymy/deletecupcake", removecupcake);
router.put("/mymy/deletedoughnut", removedoughnut);

module.exports = router;
