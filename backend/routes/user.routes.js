import express from "express";
const router = express.Router();
import { getUsersForSidebar } from "../controllers/user.controller.js";
import { protectRoute } from "../middlewares/protectRoute.js";
router.get("/", protectRoute, getUsersForSidebar);
export default router;
