import express from "express";
import { OrderController } from "./order.controller";
const router = express.Router();

router
  .get("/", OrderController.getAllOrder)
  .post("/create-order", OrderController.createOrder)
  .post("/order-book", OrderController.createOrderBook);

export const OrderRoutes = router;
