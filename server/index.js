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
    origin: [
      ORIGIN,
      "https://tiendaropa-production-3d40.up.railway.app"
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT"],
  })
);
app.use(cookieParser());
app.use(express.json({ limit: '1000mb' })); 
app.use(express.urlencoded({ limit: '1000mb', extended: true }));
app.use("/", productsRoutes);
app.use("/auth", userRoutes);

connectDB();
startServer(); 
