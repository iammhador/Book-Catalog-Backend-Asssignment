import express from "express";
import { AuthController } from "./auth.controller";
const router = express.Router();

router
  .post("/signup", AuthController.signUpUser)
  .post("/signin", AuthController.signInUser);

export const AuthRoutes = router;
