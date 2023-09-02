import { Request, Response } from "express";
import { UserService } from "./user.service";
import httpStatus from "http-status";

const getAllUsers = async (req: Request, res: Response) => {
  const result = await UserService.getAllUsers();
  res.send({
    success: true,
    statusCode: httpStatus.OK,
    message: "Users retrieved successfully",
    data: result,
  });
};

const getUserById = async (req: Request, res: Response) => {
  const result = await UserService.getUserById(req.params.id);
  res.send({
    success: true,
    statusCode: httpStatus.OK,
    message: "Single user retrieved successfully",
    data: result,
  });
};

const updateUserById = async (req: Request, res: Response) => {
  const result = await UserService.updateUserById(req.params.id, req.body);
  res.send({
    success: true,
    statusCode: httpStatus.OK,
    message: "User updated successfully",
    data: result,
  });
};

const deleteUserById = async (req: Request, res: Response) => {
  const result = await UserService.deleteUserById(req.params.id);
  res.send({
    success: true,
    statusCode: httpStatus.OK,
    message: "User deleted successfully",
    data: result,
  });
};

export const UserController = {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
};
