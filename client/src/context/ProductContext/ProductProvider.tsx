import { useEffect, useState } from "react";
import { Product } from "../../types/product.interface";
import { ProductContext } from "./ProductContext";
import { useFetch } from "../../hooks/useFetch";

interface Params {
  children: React.ReactNode;
}

export const ProductProvider = ({ children }: Params) => {
  const [products, setProduct] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const URL = `${BACKEND_URL}/products`;

  const { data } = useFetch<Product[]>(URL);

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
    <ProductContext.Provider value={{ products, loading }}>
      {children}
    </ProductContext.Provider>
  );
};
