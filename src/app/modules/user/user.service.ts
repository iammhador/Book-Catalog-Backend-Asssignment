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

const getAllUsers = async (): Promise<IUser[]> => {
  const result = await prisma.user.findMany({
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
const getUserById = async (id: string): Promise<IUser> => {
  const result = await prisma.user.findUnique({
    where: {
      id,
    },
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

  if (!result) {
    throw new Error(`User with ID ${id} not found`);
  }

  return result;
};

const updateUserById = async (id: string, data: User): Promise<IUser> => {
  const result = await prisma.user.update({
    where: {
      id,
    },
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
    data,
  });
  return result;
};

const deleteUserById = async (id: string): Promise<IUser> => {
  const result = await prisma.user.delete({
    where: {
      id,
    },
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

export const UserService = {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
};
