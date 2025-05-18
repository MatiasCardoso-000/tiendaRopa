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
    origin: [ORIGIN, "https://tiendaropa-production-3d40.up.railway.app/api"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: [
      "X-CSRF-Token",
      "X-Requested-With",
      "X-User-Data",
      "Authorization",
      "Content-Type",
      "Access-Control-Allow-Origin",
    ],
  })
);

app.disable("X-Powered-By");
app.use(cookieParser());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.use("/api", productsRoutes);
app.use("/api", userRoutes);

connectDB();
startServer();
