import { createContext } from "react";
import { Product } from "../../types/product.interface";

interface ProductContextType { 
  products : Product[],
  favoriteProduct: Product[],
  setFavoriteProduct: React.Dispatch<React.SetStateAction<Product[]>>,
  loading: boolean,
}

export const ProductContext = createContext<ProductContextType>({
  products: [],
  favoriteProduct: [],
  setFavoriteProduct: () => {},
  loading: true
})