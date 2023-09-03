import httpStatus from "http-status";
import { ProfileService } from "./profile.service";
import { Request, Response } from "express";

const getProfile = async (req: Request, res: Response) => {
  const result = await ProfileService.getProfile(req.user);
  res.send({
    success: true,
    statusCode: httpStatus.OK,
    message: "Profile retrieved successfully",
    data: result,
  });
};

export const ProfileController = { getProfile };
