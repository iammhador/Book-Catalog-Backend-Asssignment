import express from "express";
import { BookController } from "./book.controller";
const router = express.Router();

router
  .get("/", BookController.getAllBooks)
  .get("/:id", BookController.getBookById)
  .get("/:categoryId/category", BookController.getBookByCategoryId)
  .post("/create-book", BookController.createBook)
  .patch("/:id", BookController.updateBookById)
  .delete("/:id", BookController.deleteBookById);

export const BookRoutes = router;
