import { Product } from "../../types/product.interface";
import { Button } from "../Button/Button";
import { FavIcon } from "../FavIcon/FavIcon";

interface Params {
  product: Product;
}

export const ProductItem = ({ product }: Params) => {
  return (
    <div
      className="w-full md:w-[200px] h-[350px] flex flex-col items-center justify-around  border border-slate-100 m-auto shadow"
      key={product.id}
    >
      <h3 className="truncate w-3/4 font-semibold">{product.title}</h3>
      <img src={product.image} alt={product.title} className="w-1/4 h-1/4 object-cover" />
      <span>$ {product.price}</span>

      <div className="flex items-center  gap-4">
        <FavIcon widthValue="10" />
        <Button className="bg-zinc-800 text-zinc-50 p-2 text-[12px] cursor-pointer hover:bg-zinc-700">
          Agregar al carrito
        </Button>
      </div>
    </div>
  );
};
