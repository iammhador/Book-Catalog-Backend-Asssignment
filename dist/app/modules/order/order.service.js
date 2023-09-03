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
exports.OrderService = void 0;
const client_1 = require("@prisma/client");
const prisma_1 = require("../../../shared/prisma");
const getAllOrder = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.order.findMany({
        include: {
            orderedBooks: true,
        },
    });
    return result;
});
const getSpecificOrder = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, role } = data;
    const isUserExist = yield prisma_1.prisma.user.findUnique({
        where: {
            id,
        },
    });
    if (!isUserExist) {
        throw new Error("User not found");
    }
    let result = [];
    if (isUserExist && isUserExist.role === client_1.Role.admin) {
        result = yield prisma_1.prisma.order.findMany({});
    }
    if (isUserExist && isUserExist.role === client_1.Role.customer) {
        result = yield prisma_1.prisma.order.findMany({
            where: {
                userId: id,
            },
            include: {
                orderedBooks: true,
            },
        });
    }
    return result;
});
const createOrder = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.order.create({
        data,
        include: {
            orderedBooks: true,
        },
    });
    return result;
});
const createOrderBook = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.orderedBook.create({
        data,
        include: {
            book: true,
            order: true,
        },
    });
    return result;
});
exports.OrderService = {
    getAllOrder,
    getSpecificOrder,
    createOrder,
    createOrderBook,
};
