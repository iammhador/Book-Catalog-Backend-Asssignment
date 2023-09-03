"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRoutes = void 0;
const express_1 = __importDefault(require("express"));
const book_controller_1 = require("./book.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const user_1 = require("../../../enum/user");
const router = express_1.default.Router();
router
    .get("/", book_controller_1.BookController.getAllBooks)
    .get("/:id", book_controller_1.BookController.getBookById)
    .get("/:categoryId/category", book_controller_1.BookController.getBookByCategoryId)
    .post("/create-book", book_controller_1.BookController.createBook)
    .patch("/:id", (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), book_controller_1.BookController.updateBookById)
    .delete("/:id", (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), book_controller_1.BookController.deleteBookById);
exports.BookRoutes = router;
