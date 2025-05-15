import mongoose from "mongoose";
import { MONGO_URL } from "../config/config.js";

export const connectDB = async () => {
  try {
    console.log(mongoose.connection.readyState);
    await mongoose.connect(MONGO_URL, {dbName: "tienda"});
    console.log(mongoose.connection.readyState);
  } catch (err) {
    console.log(err);
  }
};

const db = mongoose.connection;
db.on("open", () => {
  console.log("La base de datos se ha conectado exitosamente");
});
db.on("error", (err) => {
  console.log("Error al conectar a la base de datos:", err);
});
