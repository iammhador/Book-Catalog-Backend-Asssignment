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
exports.OrderController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const order_service_1 = require("./order.service");
const getAllOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_service_1.OrderService.getAllOrder();
    res.send({
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Orders retrieved successfully",
        data: result,
    });
});
const getSpecificOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_service_1.OrderService.getSpecificOrder(req === null || req === void 0 ? void 0 : req.user);
    res.send({
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Order fetched successfully",
        data: result,
    });
});
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_service_1.OrderService.createOrder(req.body);
    res.send({
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Order created successfully!",
        data: result,
    });
});
const createOrderBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_service_1.OrderService.createOrderBook(req.body);
    res.send({
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Order created successfully!",
        data: result,
    });
});
exports.OrderController = {
    getAllOrder,
    getSpecificOrder,
    createOrder,
    createOrderBook,
};
