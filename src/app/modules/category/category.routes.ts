import express from "express";
import { CategoryController } from "./category.controller";
const router = express.Router();

router
  .get("/", CategoryController.getAllCategory)
  .get("/:id", CategoryController.getCategoryById)
  .post("/create-category", CategoryController.createCategory)
  .patch("/:id", CategoryController.updateCategoryById)
  .delete("/:id", CategoryController.deleteCategoryById);

export const CategoryRoutes = router;
