import { Request, Response } from "express";
import httpStatus from "http-status";
import { CategoryService } from "./category.service";

const getAllCategory = async (req: Request, res: Response) => {
  const result = await CategoryService.getAllCategory();
  res.send({
    success: true,
    statusCode: httpStatus.OK,
    message: "Categories retrieved successfully",
    data: result,
  });
};

const getCategoryById = async (req: Request, res: Response) => {
  const result = await CategoryService.getCategoryById(req.params.id);
  res.send({
    success: true,
    statusCode: httpStatus.OK,
    message: "Single category retrieved successfully",
    data: result,
  });
};

const createCategory = async (req: Request, res: Response) => {
  const result = await CategoryService.createCategory(req.body);
  res.send({
    success: true,
    statusCode: httpStatus.OK,
    message: "Category created successfully!",
    data: result,
  });
};

const updateCategoryById = async (req: Request, res: Response) => {
  const result = await CategoryService.updateCategoryById(
    req.params.id,
    req.body
  );
  res.send({
    success: true,
    statusCode: httpStatus.OK,
    message: "Category updated successfully",
    data: result,
  });
};

const deleteCategoryById = async (req: Request, res: Response) => {
  const result = await CategoryService.deleteCategoryById(req.params.id);
  res.send({
    success: true,
    statusCode: httpStatus.OK,
    message: "Category deleted successfully",
    data: result,
  });
};

export const CategoryController = {
  getAllCategory,
  getCategoryById,
  createCategory,
  updateCategoryById,
  deleteCategoryById,
};
