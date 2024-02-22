import express from "express";
// import { send } from "vite";
import { sendMessage, getMessages } from "../controllers/message.controller.js";
import { protectRoute } from "../middlewares/protectRoute.js";

import { get } from "mongoose";
const router = express.Router();

router.post("/send/:id", protectRoute, sendMessage);
router.get("/:id", protectRoute, getMessages);

export default router;
