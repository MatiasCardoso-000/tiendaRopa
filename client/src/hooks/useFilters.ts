import { Product } from "../types/product.interface";

export const useFilters = () => {
  const filterProducts = (products: Product[], value: string) => {
    if (!products) return [];

    return products.filter((product) => {
      return product.title.toLowerCase().includes(value.toLowerCase());
    });
  };


  return { filterProducts };
};
