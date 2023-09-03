import { Order, OrderedBook, Prisma, Role } from "@prisma/client";
import { prisma } from "../../../shared/prisma";
import { log } from "console";

const getAllOrder = async (): Promise<Order[]> => {
  const result = await prisma.order.findMany({
    include: {
      orderedBooks: true,
    },
  });
  return result;
};

const getSpecificOrder = async (data: any): Promise<Order[]> => {
  const { id, role } = data;

  const isUserExist = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  if (!isUserExist) {
    throw new Error("User not found");
  }

  let result: Order[] = [];

  if (isUserExist && isUserExist.role === Role.admin) {
    result = await prisma.order.findMany({});
  }

  if (isUserExist && isUserExist.role === Role.customer) {
    result = await prisma.order.findMany({
      where: {
        userId: id,
      },
      include: {
        orderedBooks: true,
      },
    });
  }

  return result;
};

const createOrder = async (data: Order): Promise<Order> => {
  const result = await prisma.order.create({
    data,
    include: {
      orderedBooks: true,
    },
  });
  return result;
};

const createOrderBook = async (data: OrderedBook): Promise<OrderedBook> => {
  const result = await prisma.orderedBook.create({
    data,
    include: {
      book: true,
      order: true,
    },
  });
  return result;
};

export const OrderService = {
  getAllOrder,
  getSpecificOrder,
  createOrder,
  createOrderBook,
};
