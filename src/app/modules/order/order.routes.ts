import express from "express";
import { OrderController } from "./order.controller";
import auth from "../../middlewares/auth";
import { ENUM_USER_ROLE } from "../../../enum/user";
const router = express.Router();

router
  .get("/", auth(ENUM_USER_ROLE.ADMIN), OrderController.getAllOrder)
  .get(
    "/:orderId",
    auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.CUSTOMER),
    OrderController.getSpecificOrder
  )
  .post(
    "/create-order",
    auth(ENUM_USER_ROLE.CUSTOMER),
    OrderController.createOrder
  )
  .post("/order-book", OrderController.createOrderBook);

export const OrderRoutes = router;
