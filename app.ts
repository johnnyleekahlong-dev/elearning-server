import express, { Request, Response, NextFunction } from "express";
import errorHandler from "./middleware/error";
import cors from "cors";
import cookieParser from "cookie-parser";

import userRouter from "./routes/user.route";

const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

app.use(express.json({ limit: "50mb" }));

app.use(cookieParser());

app.use(errorHandler);

app.use("/api/v1", userRouter);

app.all("*", (req: Request, res: Response, next: NextFunction) => {
  const err = new Error(`Route ${req.originalUrl} not found`) as any;
  err.statusCode = 404;
  next(err);
});

export { app };
