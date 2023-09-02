import { Book } from "@prisma/client";
import { prisma } from "../../../shared/prisma";

const getAllBooks = async (option: any): Promise<Book[]> => {
  const {
    page,
    limit,
    sortBy,
    sortOrder,
    searchTerm,
    minPrice,
    maxPrice,
    category,
  } = option;

  const skip = parseInt(limit) * parseInt(page) - parseInt(limit) || 0;
  const take = parseInt(limit) || 5;

  const where: any = {
    OR: searchTerm && [
      {
        title: {
          contains: searchTerm,
          mode: "insensitive",
        },
      },
      {
        author: {
          contains: searchTerm,
          mode: "insensitive",
        },
      },
      {
        genre: {
          contains: searchTerm,
          mode: "insensitive",
        },
      },
    ],
  };

  if (minPrice && minPrice !== undefined) {
    where.price = {
      gte: parseFloat(minPrice),
    };
  }

  if (maxPrice && maxPrice !== undefined) {
    if (where.price === undefined) {
      where.price = {};
    }
    where.price.lte = parseFloat(maxPrice);
  }

  if (category) {
    where.categoryId = category;
  }

  const result = await prisma.book.findMany({
    include: {
      category: true,
    },
    orderBy:
      sortBy && sortOrder
        ? {
            [sortBy]: sortOrder,
          }
        : {
            publicationDate: "desc",
          },

    where,
    skip,
    take,
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
