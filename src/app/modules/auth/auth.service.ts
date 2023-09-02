import { User } from "@prisma/client";
import { prisma } from "../../../shared/prisma";

interface IUser {
  id?: string;
  name: string;
  email: string;
  password?: string;
  role: string;
  contactNo: string;
  address: string;
  profileImg: string;
  orders: any[];
  ratings: any[];
}

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

const signInUser = async (data: User): Promise<User> => {
  const result = await prisma.user.create({
    data,
  });
  return result;
};

export const AuthService = {
  signUpUser,
};
