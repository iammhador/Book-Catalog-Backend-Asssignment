import express from "express";
import { AuthController } from "./auth.controller";
const router = express.Router();

router.post("/signup", AuthController.signUpUser).post("/signIn");

export const AuthRoutes = router;
