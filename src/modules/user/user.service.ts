import { User } from "@prisma/client";
import { prisma } from "../../shared/prisma";

const getAllUsers = async (): Promise<User[]> => {
  const result = await prisma.user.findMany({
    include: {
      orders: true,
      ratings: true,
    },
  });
  return result;
};

const getUserById = async (id: string): Promise<User> => {
  const result = await prisma.user.findUnique({
    where: {
      id,
    },
    include: {
      orders: true,
      ratings: true,
    },
  });

  if (!result) {
    throw new Error(`User with ID ${id} not found`);
  }

  return result;
};

const updateUserById = async (id: string, data: User): Promise<User> => {
  const result = await prisma.user.update({
    where: {
      id,
    },
    include: {
      orders: true,
      ratings: true,
    },
    data,
  });
  return result;
};

const deleteUserById = async (id: string): Promise<User> => {
  const result = await prisma.user.delete({
    where: {
      id,
    },
    include: {
      orders: true,
      ratings: true,
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
