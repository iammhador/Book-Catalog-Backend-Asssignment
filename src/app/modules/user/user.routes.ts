import express from "express";
import { UserController } from "./user.controller";
import auth from "../../middlewares/auth";
import { ENUM_USER_ROLE } from "../../../enum/user";
const router = express.Router();

router
  .get("/", auth(ENUM_USER_ROLE.ADMIN), UserController.getAllUsers)
  .get("/:id", auth(ENUM_USER_ROLE.ADMIN), UserController.getUserById)
  .patch("/:id", UserController.updateUserById)
  .delete("/:id", UserController.deleteUserById);

export const UserRoutes = router;
