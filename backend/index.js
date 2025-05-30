import express from "express";
import { startServer } from "./server/server.js";
import { connectDB } from "./db/db.js";
import { router as productsRoutes } from "./routes/productsRoutes.js";
import { router as userRoutes } from "./routes/user.routes.js";
import cors from "cors";
import cookieParser from "cookie-parser";

export const app = express();

const whiteList = [
  process.env.ORIGIN1,
];

app.disable("x-powered-by")

app.use(
  cors({
    origin: function (origin, callback) {
      console.log("😱😱😱 =>", origin);
      if (!origin || whiteList.includes(origin)) {
        // Allow requests with no origin (like Postman) or whitelisted origins
        return callback(null, true);
      }
      return callback(new Error("Error de CORS origin " + origin + " No autorizado!"));
    },
    credentials: true, // If you want to allow cookies
  })
);
app.use(cookieParser());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.use("/api", productsRoutes);
app.use("/api", userRoutes);

connectDB();
startServer();
