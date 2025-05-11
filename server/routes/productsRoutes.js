import express from "express";
import { createProduct, getProducts } from "../controllers/product.controller.js";

export const router = express.Router();

router.post("/products", createProduct);
router.get("/products", getProducts);


