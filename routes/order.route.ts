import express from "express";
import { authorizeRoles, isAuthenticated } from "../middleware/auth";
import { createOrder, getAllOrders } from "../controllers/order.controller";

const router = express.Router();

router.post("/create-order", isAuthenticated, createOrder);
router.get(
  "/get-orders",
  isAuthenticated,
  authorizeRoles("admin"),
  getAllOrders
);

export default router;
