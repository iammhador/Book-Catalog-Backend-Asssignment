import express from "express";
import { AuthRoutes } from "../app/modules/auth/auth.routes";
import { UserRoutes } from "../app/modules/user/user.routes";
import { CategoryRoutes } from "../app/modules/category/category.routes";
import { BookRoutes } from "../app/modules/book/book.routes";
import { OrderRoutes } from "../app/modules/order/order.routes";
import { ProfileRoutes } from "../app/modules/profile/profile.routes";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/users",
    route: UserRoutes,
  },
  {
    path: "/profile",
    route: ProfileRoutes,
  },
  {
    path: "/categories",
    route: CategoryRoutes,
  },
  {
    path: "/books",
    route: BookRoutes,
  },
  {
    path: "/orders",
    route: OrderRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
