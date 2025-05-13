import { useEffect, useState } from "react";
import { Product } from "../../types/product.interface";
import { ProductContext } from "./ProductContext";
import { useFetch } from "../../hooks/useFetch";
import { useLocation } from "react-router-dom";

interface Params {
  children: React.ReactNode;
}

export const ProductProvider = ({ children }: Params) => {
  const [products, setProduct] = useState<Product[]>([]);
  const [favoriteProduct, setFavoriteProduct] = useState<Product[]>([]);
  const [randomProduct, setRandomProduct] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("q") || "";

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const { data } = useFetch<Product[]>(
    searchQuery ? `${BACKEND_URL}/product/search?q=${encodeURIComponent(searchQuery)}` : `${BACKEND_URL}/products`
  );



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
        searchQuery,
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
