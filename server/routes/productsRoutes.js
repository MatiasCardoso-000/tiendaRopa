import express from "express";
import { createProduct, getProductByName, getProducts } from "../controllers/product.controller.js";

export const router = express.Router();

router.post("/", createProduct);

router.get("/", getProducts);
router.get('/product/search', getProductByName)

