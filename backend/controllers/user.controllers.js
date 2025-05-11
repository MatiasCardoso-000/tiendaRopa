import { JWT_SECRET } from "../config/config.js";
import { createToken } from "../libs/jwt.js";
import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { username, email, password, role } = req.body;

  if (!username || !email || !password) {
    res.status(400).json({ message: "Todos los campos son requeridos" });
    return;
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 12);

    const createUser = new User({
      username,
      email,
      password: hashedPassword,
      role,
    });

    const savedUser = await createUser.save();

    const token = await createToken({ id: savedUser._id });
    res.cookie("token", token);

    res.json(savedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;

  const userFound = await User.findOne({ username });

  if (!username || !password) {
    res.status(400).json({ message: ["Todos los campos son requeridos"] });
  }

  try {
    if (!userFound) {
      res.status(400).json({ message: ["Usuario o contraseña incorrectos"] });
    }

    const comparePassword = await bcrypt.compare(password, userFound.password);

    if (!comparePassword) {
      res.status(400).json({
        message: ["Usuario o contraseña incorrectos"],
      });
    }

    const token = await createToken({ id: userFound._id });
    res.cookie("token", token);

    res.json({
      username: userFound.username,
      email: userFound.email,
      role: userFound.role,
    });
    console.log(`Haz ingresado a la cuenta con exito ${userFound.username}`);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const verifyToken = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    console.log("No se puede acceder al perfil del usuairo");
    return res.status(400).json({ message: "No token, authorization denied" });
  }

  try {
    jwt.verify(token, JWT_SECRET, async (err, decoded) => {
      if (err) return res.status(401).json({ message: "Unauthorized" });

      const userID = decoded.id;

      const userFound = await User.findById(userID);

      if (!userFound) {
        res.status(401).json({ message: "Unauthorized" });
      }

      res.json({
        username: userFound.username,
        email: userFound.email,
        role: userFound.role,
      });
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const logout = (req, res) => {
  res.clearCookie("token");
  res.json({ message: "El usuario se desconecto con exito" });
};
