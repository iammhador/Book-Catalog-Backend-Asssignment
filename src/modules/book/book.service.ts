import { Book } from "@prisma/client";
import { prisma } from "../../shared/prisma";

const getAllBooks = async (): Promise<Book[]> => {
  const result = await prisma.book.findMany({
    include: {
      category: true,
    },
  });
  return result;
};

const getBookById = async (id: string): Promise<Book> => {
  const result = await prisma.book.findUnique({
    where: {
      id,
    },
    include: {
      category: true,
    },
  });

  if (!result) {
    throw new Error(`User with ID ${id} not found`);
  }

  return result;
};

const getBookByCategoryId = async (id: string): Promise<Book[]> => {
  const result = await prisma.book.findMany({
    where: {
      categoryId: id,
    },
    include: {
      category: true,
    },
  });

  return result;
};

const createBook = async (data: Book): Promise<Book> => {
  const result = await prisma.book.create({
    data,
    include: {
      category: true,
    },
  });
  return result;
};

const updateBookById = async (id: string, data: Book): Promise<Book> => {
  const result = await prisma.book.update({
    where: {
      id,
    },
    include: {
      category: true,
    },
    data,
  });
  return result;
};

const deleteBookById = async (id: string): Promise<Book> => {
  const result = await prisma.book.delete({
    where: {
      id,
    },
    include: {
      category: true,
    },
  });
  return result;
};

export const BookService = {
  getAllBooks,
  getBookById,
  getBookByCategoryId,
  createBook,
  updateBookById,
  deleteBookById,
};
