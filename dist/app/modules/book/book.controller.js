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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const book_service_1 = require("./book.service");
const getAllBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_service_1.BookService.getAllBooks(req.query);
    res.send({
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Books retrieved successfully",
        data: result,
    });
});
const getBookById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_service_1.BookService.getBookById(req.params.id);
    res.send({
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Single book retrieved successfully",
        data: result,
    });
});
const getBookByCategoryId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_service_1.BookService.getBookByCategoryId(req.params.categoryId);
    res.send({
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Category matched books retrieved successfully",
        data: result,
    });
});
const createBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_service_1.BookService.createBook(req.body);
    res.send({
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Book created successfully!",
        data: result,
    });
});
const updateBookById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_service_1.BookService.updateBookById(req.params.id, req.body);
    res.send({
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Book updated successfully",
        data: result,
    });
});
const deleteBookById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_service_1.BookService.deleteBookById(req.params.id);
    res.send({
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Book deleted successfully",
        data: result,
    });
});
exports.BookController = {
    getAllBooks,
    getBookById,
    getBookByCategoryId,
    createBook,
    updateBookById,
    deleteBookById,
};
