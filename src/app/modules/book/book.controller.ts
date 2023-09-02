import { Request, Response } from "express";
import httpStatus from "http-status";
import { BookService } from "./book.service";

const getAllBooks = async (req: Request, res: Response) => {
  const result = await BookService.getAllBooks(req.query);
  res.send({
    success: true,
    statusCode: httpStatus.OK,
    message: "Books retrieved successfully",
    data: result,
  });
};

const getBookById = async (req: Request, res: Response) => {
  const result = await BookService.getBookById(req.params.id);
  res.send({
    success: true,
    statusCode: httpStatus.OK,
    message: "Single book retrieved successfully",
    data: result,
  });
};

const getBookByCategoryId = async (req: Request, res: Response) => {
  const result = await BookService.getBookByCategoryId(req.params.categoryId);
  res.send({
    success: true,
    statusCode: httpStatus.OK,
    message: "Category matched books retrieved successfully",
    data: result,
  });
};

const createBook = async (req: Request, res: Response) => {
  const result = await BookService.createBook(req.body);
  res.send({
    success: true,
    statusCode: httpStatus.OK,
    message: "Book created successfully!",
    data: result,
  });
};

const updateBookById = async (req: Request, res: Response) => {
  const result = await BookService.updateBookById(req.params.id, req.body);
  res.send({
    success: true,
    statusCode: httpStatus.OK,
    message: "Book updated successfully",
    data: result,
  });
};

const deleteBookById = async (req: Request, res: Response) => {
  const result = await BookService.deleteBookById(req.params.id);
  res.send({
    success: true,
    statusCode: httpStatus.OK,
    message: "Book deleted successfully",
    data: result,
  });
};

export const BookController = {
  getAllBooks,
  getBookById,
  getBookByCategoryId,
  createBook,
  updateBookById,
  deleteBookById,
};
