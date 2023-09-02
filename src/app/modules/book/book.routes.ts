import express from "express";
import { BookController } from "./book.controller";
import auth from "../../middlewares/auth";
import { ENUM_USER_ROLE } from "../../../enum/user";
const router = express.Router();

router
  .get("/", BookController.getAllBooks)
  .get("/:id", BookController.getBookById)
  .get("/:categoryId/category", BookController.getBookByCategoryId)
  .post("/create-book", BookController.createBook)
  .patch("/:id", auth(ENUM_USER_ROLE.ADMIN), BookController.updateBookById)
  .delete("/:id", auth(ENUM_USER_ROLE.ADMIN), BookController.deleteBookById);

export const BookRoutes = router;
