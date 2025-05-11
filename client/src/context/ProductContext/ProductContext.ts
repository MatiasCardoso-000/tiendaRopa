import { createContext } from "react";
import { Product } from "../../types/product.interface";

interface ProductContextType { 
  products : Product[],
  loading: boolean
}

export const ProductContext = createContext<ProductContextType>({
  products: [],
  loading: true
})