import { JWT_SECRET } from "../config/config.js";
import { createToken } from "../libs/jwt.js";
import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { username, email, password, role } = req.body;

  if (!username || !email || !password) {
    res.status(400).json({ message: ["Todos los campos son requeridos"] });
    return;
  }

  const userFound = await User.findOne({ email });

  if (userFound) {
    res.status(400).json({ message: ["El correo esta en uso"] });
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
    return res.json(savedUser);
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
      return;
    }

    const comparePassword =
      userFound.password &&
      (await bcrypt.compare(password, userFound.password));

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
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const verifyToken = async (req, res) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  jwt.verify(token, JWT_SECRET, async (err, decoded) => {
    if (err) return res.status(401).json({ message: "Unauthorized" });

    const userID = decoded.id;

    const userFound = await User.findById(userID);

    if (!userFound) {
      res.status(401).json({ message: "Unauthorized" });
    }
    return res.json(userFound);
  });
};

export const logout = (req, res) => {
  res.clearCookie("token");
  res.json({ message: "El usuario se desconecto con exito" });
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    if (users.length === 0) return res.status(404).json([]);
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
