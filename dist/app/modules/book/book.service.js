"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const prisma_1 = require("../../../shared/prisma");
const getAllBooks = (option) => __awaiter(void 0, void 0, void 0, function* () {
    const { page, limit, sortBy, sortOrder, searchTerm, minPrice, maxPrice, category, } = option;
    const skip = parseInt(limit) * parseInt(page) - parseInt(limit) || 0;
    const take = parseInt(limit) || 5;
    const where = {
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
    const result = yield prisma_1.prisma.book.findMany({
        include: {
            category: true,
        },
        orderBy: sortBy && sortOrder
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
});
const getBookById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.book.findUnique({
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
});
const getBookByCategoryId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.book.findMany({
        where: {
            categoryId: id,
        },
        include: {
            category: true,
        },
    });
    return result;
});
const createBook = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.book.create({
        data,
        include: {
            category: true,
        },
    });
    return result;
});
const updateBookById = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.book.update({
        where: {
            id,
        },
        include: {
            category: true,
        },
        data,
    });
    return result;
});
const deleteBookById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.book.delete({
        where: {
            id,
        },
        include: {
            category: true,
        },
    });
    return result;
});
exports.BookService = {
    getAllBooks,
    getBookById,
    getBookByCategoryId,
    createBook,
    updateBookById,
    deleteBookById,
};
