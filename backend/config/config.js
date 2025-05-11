export const MONGO_DB_URI =
  process.env.MONGO_URI || "mongodb://127.0.0.1:27017/tiendaFacundo";
export const DB_NAME = process.env.dbName || "tiendaFacundo";
export const JWT_SECRET = process.env.JWT_SECRET || "secret";
export const PORT = process.env.PORT || 5000;
