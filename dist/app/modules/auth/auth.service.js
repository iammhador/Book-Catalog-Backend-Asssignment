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
exports.AuthService = void 0;
const prisma_1 = require("../../../shared/prisma");
const jwt_1 = require("../../../helpers/jwt");
const signUpUser = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.user.create({
        data,
        select: {
            id: true,
            name: true,
            email: true,
            role: true,
            contactNo: true,
            address: true,
            profileImg: true,
            orders: true,
            ratings: true,
            password: false,
        },
    });
    return result;
});
const signInUser = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = data;
    const isUserExist = yield prisma_1.prisma.user.findUnique({
        where: {
            email,
        },
    });
    if (!isUserExist) {
        throw new Error("User does not exist");
    }
    if (isUserExist.password !== password) {
        throw new Error("password is incorrect");
    }
    const { id, role } = isUserExist;
    const token = jwt_1.JWTHelpers.createToken({ id, role }, process.env.JWT_SECRET, process.env.JWT_EXPIRES_IN);
    return { token };
});
exports.AuthService = {
    signUpUser,
    signInUser,
};
