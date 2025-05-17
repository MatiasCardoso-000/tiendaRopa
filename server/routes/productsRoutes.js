import express from "express";
import { createProduct, getProductById, getProducts, updateProduct } from "../controllers/product.controller.js";

export const router = express.Router();

router.post("/", createProduct);

router.get("/", getProducts);
router.get('/:id', getProductById)
router.put('/:id', updateProduct)
