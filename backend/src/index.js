import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';
import cors from 'cors';
import { connectDB } from './lib/db.js';
import cookieParser from 'cookie-parser';
import { app,server} from './lib/socket.js';

dotenv.config();

const PORT = process.env.PORT || 5001;

app.use(express.json({limit: "5mb"}));
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true, // This allows cookies to be sent with requests
}))

app.use("/api/auth", authRoutes)
app.use("/api/messages",messageRoutes);

server.listen(PORT,() =>{
    console.log("Server is running on port 5001");
    connectDB();
})