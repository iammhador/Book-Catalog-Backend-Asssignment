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
exports.auth = void 0;
const jwt_1 = require("../../helpers/jwt");
const auth = (...requiredRoles) => {
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const token = req.headers.authorization;
            if (!token) {
                throw new Error("You're not authorized");
            }
            // Token verify
            let verifiedUser = null;
            verifiedUser = jwt_1.JWTHelpers.verifiedToken(token, process.env.JWT_SECRET);
            req.user = verifiedUser;
            if (requiredRoles.length && !requiredRoles.includes(verifiedUser.role)) {
                throw new Error("FORBIDDEN");
            }
            next();
        }
        catch (error) {
            next(error);
        }
    });
};
exports.auth = auth;
exports.default = exports.auth;
