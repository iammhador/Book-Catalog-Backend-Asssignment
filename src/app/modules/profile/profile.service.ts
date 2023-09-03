import { Role } from "@prisma/client";
import { prisma } from "../../../shared/prisma";
import { IUser } from "../auth/auth.interface";
import { IReqUser } from "./profile.interface";

const getProfile = async (data: IReqUser): Promise<IUser | null> => {
  const { role, id } = data;
  const isUserExist = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  if (!isUserExist) {
    throw new Error("User not found");
  }

  if (isUserExist && isUserExist.role !== role) {
    throw new Error("User role not matched");
  }

  const result = await prisma.user.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      name: true,
      email: true,
      password: true,
      role: true,
      contactNo: true,
      address: true,
      profileImg: true,
    },
  });

  return result;
};

export const ProfileService = {
  getProfile,
};
