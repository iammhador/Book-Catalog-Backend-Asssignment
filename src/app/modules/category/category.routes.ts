import express from "express";
import { CategoryController } from "./category.controller";
import { ENUM_USER_ROLE } from "../../../enum/user";
import auth from "../../middlewares/auth";
const router = express.Router();

router
  .get("/", CategoryController.getAllCategory)
  .get("/:id", CategoryController.getCategoryById)
  .post("/create-category", CategoryController.createCategory)
  .patch(
    "/:id",
    auth(ENUM_USER_ROLE.ADMIN),
    CategoryController.updateCategoryById
  )
  .delete(
    "/:id",
    auth(ENUM_USER_ROLE.ADMIN),
    CategoryController.deleteCategoryById
  );

export const CategoryRoutes = router;
