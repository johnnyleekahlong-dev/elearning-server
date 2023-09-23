import express from "express";
import {
  getCoursesAnalytics,
  getOrdersAnalytics,
  getUsersAnalytics,
} from "../controllers/analytics.controller";
import { authorizeRoles, isAuthenticated } from "../middleware/auth";

const router = express.Router();

router.get(
  "/get-user-analytics",
  isAuthenticated,
  authorizeRoles("admin"),
  getUsersAnalytics
);

router.get(
  "/get-order-analytics",
  isAuthenticated,
  authorizeRoles("admin"),
  getOrdersAnalytics
);

router.get(
  "/get-course-analytics",
  isAuthenticated,
  authorizeRoles("admin"),
  getCoursesAnalytics
);

export default router;
