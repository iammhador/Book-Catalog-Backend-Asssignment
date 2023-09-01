import express from "express";
import { UserController } from "./user.controller";
const router = express.Router();

router
  .get("/", UserController.getAllUsers)
  .get("/:id", UserController.getUserById)
  .patch("/:id", UserController.updateUserById)
  .delete("/:id", UserController.deleteUserById);

export const UserRoutes = router;
