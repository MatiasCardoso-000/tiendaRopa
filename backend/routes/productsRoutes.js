import express from "express";
import { createProduct,  getProducts, updateProduct } from "../controllers/product.controller.js";

export const router = express.Router();

router.post("/products", createProduct);

router.get("/products", getProducts);
// router.get('/:id', getProductById)
router.put('/:id', updateProduct)
