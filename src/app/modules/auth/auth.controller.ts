import httpStatus from "http-status";
import { AuthService } from "./auth.service";
import { Request, Response } from "express";

const signUpUser = async (req: Request, res: Response) => {
  const result = await AuthService.signUpUser(req.body);
  res.send({
    success: true,
    statusCode: httpStatus.OK,
    message: "User created successfully!",
    data: result,
  });
};

const signInUser = async (req: Request, res: Response) => {
  const { ...authData } = req.body;

  const result = await AuthService.signInUser(authData);
  res.send({
    success: true,
    statusCode: httpStatus.OK,
    message: "User sign in successfully!",
    data: result,
  });
};

export const AuthController = {
  signUpUser,
  signInUser,
};
