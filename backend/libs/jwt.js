import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/config.js";

export const createToken =  (payload) => {
 return jwt.sign(payload, JWT_SECRET, { expiresIn: "1d" });
};
