import express, { Application, Request, Response } from "express";
import cors from "cors";
import router from "./routes";
import { AuthRoutes } from "./modules/auth/auth.routes";
import { UserRoutes } from "./modules/user/user.routes";
require("dotenv").config();
const app: Application = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", router);

app.get("/", (req: Request, res: Response) => {
  res.send("📕 Book Catalog Server Is Working Perfectly!");
});

app.listen(port, () => {
  console.log(`🙌 Server is listening on ${port}`);
});
