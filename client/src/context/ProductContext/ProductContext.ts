import React, { createContext } from "react";
import { Product } from "../../types/product.interface";

interface ProductContextType { 
  products : Product[],
  favoriteProduct: Product[],
  randomProduct: Product[],
  setFavoriteProduct: React.Dispatch<React.SetStateAction<Product[]>>,
  setProduct: React.Dispatch<React.SetStateAction<Product[]>>,
  loading: boolean,
}

export const ProductContext = createContext<ProductContextType>({
  products: [],
  favoriteProduct: [],
  randomProduct: [],
  setFavoriteProduct: () => {},
  setProduct: () => {},
  loading: true
})