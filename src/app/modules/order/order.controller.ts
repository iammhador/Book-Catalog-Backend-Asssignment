import httpStatus from "http-status";
import { OrderService } from "./order.service";
import { Request, Response } from "express";

const getAllOrder = async (req: Request, res: Response) => {
  const result = await OrderService.getAllOrder();
  res.send({
    success: true,
    statusCode: httpStatus.OK,
    message: "Orders retrieved successfully",
    data: result,
  });
};

const getSpecificOrder = async (req: Request, res: Response) => {
  const result = await OrderService.getSpecificOrder(req?.user);
  res.send({
    success: true,
    statusCode: httpStatus.OK,
    message: "Order fetched successfully",
    data: result,
  });
};

const createOrder = async (req: Request, res: Response) => {
  const result = await OrderService.createOrder(req.body);
  res.send({
    success: true,
    statusCode: httpStatus.OK,
    message: "Order created successfully!",
    data: result,
  });
};

const createOrderBook = async (req: Request, res: Response) => {
  const result = await OrderService.createOrderBook(req.body);
  res.send({
    success: true,
    statusCode: httpStatus.OK,
    message: "Order created successfully!",
    data: result,
  });
};

export const OrderController = {
  getAllOrder,
  getSpecificOrder,
  createOrder,
  createOrderBook,
};
