import { useContext } from "react";
import { ProductContext } from "../context/ProductContext/ProductContext";

export const useProducts = () => {
  const context = useContext(ProductContext);

  if (!context) throw new Error("useProducts must be within a provider");

  return context;
};
