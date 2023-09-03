import { User } from "@prisma/client";
import { prisma } from "../../../shared/prisma";
import { IAuthUser, IAuthUserResponse, IUser } from "./auth.interface";
import { JWTHelpers } from "../../../helpers/jwt";
import { Secret } from "jsonwebtoken";

const signUpUser = async (data: User): Promise<IUser> => {
  const result = await prisma.user.create({
    data,
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      contactNo: true,
      address: true,
      profileImg: true,
      orders: true,
      ratings: true,
      password: false,
    },
  });
  return result;
};

const signInUser = async (data: IAuthUser): Promise<IAuthUserResponse> => {
  const { email, password } = data;

  const isUserExist = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!isUserExist) {
    throw new Error("User does not exist");
  }

  if (isUserExist.password !== password) {
    throw new Error("password is incorrect");
  }

  const { id, role } = isUserExist;

  const token = JWTHelpers.createToken(
    { id, role },
    process.env.JWT_SECRET as Secret,
    process.env.JWT_EXPIRES_IN as string
  );

  return { token };
};

export const AuthService = {
  signUpUser,
  signInUser,
};
