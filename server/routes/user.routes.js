import { Router } from "express";
import {
  getAllUsers,
  login,
  logout,
  register,
  verifyToken,
} from "../controllers/user.controllers.js";
import { registerSchema, loginSchema } from "../schemas/auth.schema.js";
import {validateSchema} from '../middleware/validateSchema.js'

export const router = Router();

router.post("/registro", validateSchema(registerSchema), register);
router.post("/login", validateSchema(loginSchema), login);
router.post("/logout", logout);
router.get("/verify", verifyToken);
router.get('/users', getAllUsers)