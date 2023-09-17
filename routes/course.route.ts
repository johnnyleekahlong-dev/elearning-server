import {
  addAnswer,
  addQuestion,
  editCourse,
  getAllCourses,
  getCourseByUser,
  getSingleCourse,
  uploadCourse,
} from "../controllers/course.controller";
import express from "express";
import { authorizeRoles, isAuthenticated } from "../middleware/auth";

const router = express.Router();

router.post(
  "/create-course",
  isAuthenticated,
  authorizeRoles("admin"),
  uploadCourse
);

router.put(
  "/edit-course/:id",
  isAuthenticated,
  authorizeRoles("admin"),
  editCourse
);

// get single course without purchase
router.get("/get-course/:id", getSingleCourse);

// get all courses without purchase
router.get("/get-courses", getAllCourses);

router.get("/get-course-content/:id", isAuthenticated, getCourseByUser);

router.put("/add-question/:id", isAuthenticated, addQuestion);
router.put("/add-answer", isAuthenticated, addAnswer);

export default router;