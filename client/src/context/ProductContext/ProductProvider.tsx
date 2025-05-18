import { useEffect, useState } from "react";
import { Product } from "../../types/product.interface";
import { ProductContext } from "./ProductContext";
import { useFetch } from "../../hooks/useFetch";

interface Params {
  children: React.ReactNode;
}

export const ProductProvider = ({ children }: Params) => {
  const [products, setProduct] = useState<Product[]>([]);
  const [favoriteProduct, setFavoriteProduct] = useState<Product[]>([]);
  const [randomProduct, setRandomProduct] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const BACKEND_URL = import.meta.env.VITE_BACKEND;
  const URL = `${BACKEND_URL}/products`;
  const { data } = useFetch<Product[]>(URL);

  useEffect(() => {
    if (products.length > 0) {
      const shuffled = [...products]
        .sort(() => Math.random() - 0.5)
        .slice(0, 6);
      setRandomProduct(shuffled);
    }
  }, [products]);

  useEffect(() => {
    const getProducts = async () => {
      setProduct(data);
      setTimeout(() => {
        setLoading(false);
      }, 500);
    };

    getProducts();
  }, [data]);



  return (
    <ProductContext.Provider
      value={{
        products,
        favoriteProduct,
        randomProduct,
        setFavoriteProduct,
        setProduct,
        loading,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
