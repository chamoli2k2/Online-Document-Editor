import { Server } from "socket.io";
import connectDB from "./database/db.js";
import {
  getDocument,
  updateDocument,
} from "./controllers/documentController.js";
import express from "express";
import { createServer } from "http";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const port = process.env.PORT || 4000;
connectDB();
const app = express();

const __dirname1 = path.resolve();

app.use(express.static(path.join(__dirname1, "/client/dist")));

app.get("*", (req, res) =>
  res.sendFile(path.resolve(__dirname1, "client", "dist", "index.html"))
);

const express_server = app.listen(
  port,
  console.log(`Server running on PORT ${port}...`)
);

const i0 = new Server(express_server, {
  cors: {
    origin: "*", // "http://localhost:3000"
  },
});

i0.on("connection", (socket) => {
  socket.on("get-document", async (documentId) => {
    const document = await getDocument(documentId);
    socket.join(documentId);
    socket.emit("load-document", document.data);

    socket.on("send-changes", (delta) => {
      socket.broadcast.to(documentId).emit("receive-changes", delta);
    });

    socket.on("save-document", async (data) => {
      await updateDocument(documentId, data);
    });
  });
});
