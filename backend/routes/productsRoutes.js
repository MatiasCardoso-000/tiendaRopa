import express from "express";
import { createProduct,  getProducts, searchProduct, updateProduct } from "../controllers/product.controller.js";

export const router = express.Router();

router.post("/products", createProduct);
router.get("/products", getProducts);
router.get('/search', searchProduct)
router.put('/products/:id', updateProduct)

