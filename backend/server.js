import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import connectDB from "./db/connectDB.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import { app, server } from "./socket/socket.js";
dotenv.config();
connectDB();
app.use(express.json());
app.use(cookieParser());
const PORT = process.env.PORT || 5000;

// app.get("/", (req, res) => {
//   res.send("Server is ready!!");
// });

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
