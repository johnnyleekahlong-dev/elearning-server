import express from "express";
import {
  activateUser,
  registrationUser,
  loginUser,
  logoutUser,
} from "../controllers/user.controller";

const router = express.Router();

router.post("/registration", registrationUser);
router.post("/activate-user", activateUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);

export default router;
