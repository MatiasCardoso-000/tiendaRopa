export const MONGO_URI = process.env.MONGO_URI
  ? process.env.MONGO_URI
  : "mongodb://127.0.0.1:27017/tienda";
export const JWT_SECRET = process.env.JWT_SECRET ? process.env.JWT_SECRET : "secret";
export const PORT = process.env.PORT ? process.env.PORT  : 5000;
