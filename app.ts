import express, { Request, Response, NextFunction } from "express";
import errorHandler from "./middleware/error";
import cors from "cors";
import cookieParser from "cookie-parser";

import userRouter from "./routes/user.route";
import courseRouter from "./routes/course.route";
import orderRouter from "./routes/order.route";
import notificationRouter from "./routes/notification.route";
import analysticsRouter from "./routes/analytics.route";
import layoutRouter from "./routes/layout.route";

const app = express();

app.use(
  cors({
    origin: process.env.ORIGIN,
  })
);

app.use(express.json({ limit: "50mb" }));

app.use(cookieParser());

app.use(errorHandler);

app.use(
  "/api/v1",
  orderRouter,
  userRouter,
  courseRouter,
  notificationRouter,
  analysticsRouter,
  layoutRouter
);

app.all("*", (req: Request, res: Response, next: NextFunction) => {
  const err = new Error(`Route ${req.originalUrl} not found`) as any;
  err.statusCode = 404;
  next(err);
});

export { app };
