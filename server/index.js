import express from "express";
import { startServer } from "./server/server.js";
import { connectDB } from "./db/db.js";
import { router as productsRoutes } from "./routes/productsRoutes.js";
import { router as userRoutes } from "./routes/user.routes.js";
import { ORIGIN } from "./config/config.js";
import cookieParser from "cookie-parser";
import cors from "cors";

export const app = express();
app.use(
  cors({
    origin: ORIGIN,
    credentials: true,
    methods: ["GET", "POST"],
    
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use("/api", productsRoutes);
app.use("/auth", userRoutes);

connectDB();
startServer(); 
