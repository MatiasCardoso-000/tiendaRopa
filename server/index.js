import express from "express";
import { startServer } from "./server/server.js";
import { connectDB } from "./db/db.js";
import { router as productsRoutes } from "./routes/productsRoutes.js";
import { router as userRoutes } from "./routes/user.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";

export const app = express();
app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://tiendaropa-production-3d40.up.railway.app/",
      "https://tiendaropa-production-3d40.up.railway.app/login",
      "https://tiendaropa-production-3d40.up.railway.app/registro",
    ],
    credentials: true,
  })
);
app.use(cookieParser());

app.use("/api", productsRoutes);
app.use("/api/auth", userRoutes);

startServer();
connectDB();
