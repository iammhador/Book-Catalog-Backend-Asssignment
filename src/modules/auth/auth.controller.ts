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

export const AuthController = {
  signUpUser,
};
