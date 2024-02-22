import { Server } from "socket.io";
import http from "http";
import express from "express";
// import io from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

export const getReceiverSocketId = (receiverId) => {
  return usersSocketMap[receiverId];
};
const usersSocketMap = {}; //{userId:socketId}
io.on("connection", (socket) => {
  console.log("New connection", socket.id);

  const userId = socket.handshake.query.userId;
  if (userId !== "undefined") {
    usersSocketMap[userId] = socket.id;
  }
  // io.emit() is used to emit events to all connected clients
  io.emit("getOnlineUsers", Object.keys(usersSocketMap));

  // socket.on() is used to listen for events both in the server and client
  socket.on("disconnect", () => {
    console.log("User disconnected", socket.id);
    delete usersSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(usersSocketMap));
  });
});

export { app, io, server };
