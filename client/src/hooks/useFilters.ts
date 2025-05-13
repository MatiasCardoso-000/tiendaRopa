import { Product } from "../types/product.interface";


export const filterProducts = (products:Product[],value:string) => {
  
    return products.filter((p:Product) => {
      if (p.title.toLowerCase().includes(value.toLowerCase())) return p;
    });


}