import { Category } from "@prisma/client";
import { prisma } from "../../shared/prisma";

const getAllCategory = async (): Promise<Category[]> => {
  const result = await prisma.category.findMany({});
  return result;
};

const getCategoryById = async (id: string): Promise<Category> => {
  const result = await prisma.category.findUnique({
    where: {
      id,
    },
  });

  if (!result) {
    throw new Error(`User with ID ${id} not found`);
  }

  return result;
};

const createCategory = async (data: Category): Promise<Category> => {
  const result = await prisma.category.create({
    data,
  });
  return result;
};

const updateCategoryById = async (
  id: string,
  data: Category
): Promise<Category> => {
  const result = await prisma.category.update({
    where: {
      id,
    },
    data,
  });
  return result;
};

const deleteCategoryById = async (id: string): Promise<Category> => {
  const result = await prisma.category.delete({
    where: {
      id,
    },
  });
  return result;
};

export const CategoryService = {
  getAllCategory,
  getCategoryById,
  createCategory,
  updateCategoryById,
  deleteCategoryById,
};
