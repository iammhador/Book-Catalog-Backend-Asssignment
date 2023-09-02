import { Order, OrderedBook, Prisma } from "@prisma/client";
import { prisma } from "../../../shared/prisma";

const getAllOrder = async (): Promise<Order[]> => {
  const result = await prisma.order.findMany({
    include: {
      orderedBooks: true,
    },
  });
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
  createOrder,
  createOrderBook,
};
