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
exports.ProfileService = void 0;
const prisma_1 = require("../../../shared/prisma");
const getProfile = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { role, id } = data;
    const isUserExist = yield prisma_1.prisma.user.findUnique({
        where: {
            id,
        },
    });
    if (!isUserExist) {
        throw new Error("User not found");
    }
    if (isUserExist && isUserExist.role !== role) {
        throw new Error("User role not matched");
    }
    const result = yield prisma_1.prisma.user.findUnique({
        where: {
            id,
        },
        select: {
            id: true,
            name: true,
            email: true,
            password: true,
            role: true,
            contactNo: true,
            address: true,
            profileImg: true,
        },
    });
    return result;
});
exports.ProfileService = {
    getProfile,
};
