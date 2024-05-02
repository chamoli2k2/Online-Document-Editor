import { Server } from "socket.io";
import connectDB from "./database/db.js";
import { getDocument, updateDocument } from "./controllers/documentController.js";
import dotenv from "dotenv";

dotenv.config();

const i0 = new Server(process.env.PORT, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    },
});

connectDB();

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