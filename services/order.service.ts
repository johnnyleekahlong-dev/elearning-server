import { NextFunction, Response } from "express";
import { CatchAsyncError } from "../middleware/catchAsyncErrors";
import orderModel from "../models/order.model";

// create new order
export const newOrder = async (
  data: any,
  res: Response,
  next: NextFunction
) => {
  const order = await orderModel.create(data);
  res.status(201).json({
    success: true,
    order,
  });
};

export const getAllOrdersService = async (res: Response) => {
  const orders = await orderModel.find().sort({
    createdAt: -1,
  });

  res.status(200).json({
    success: true,
    orders,
  });
};
