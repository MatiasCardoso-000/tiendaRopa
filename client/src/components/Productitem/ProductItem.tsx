import { useProducts } from "../../hooks/useProducts";
import { Product } from "../../types/product.interface";
import { Button } from "../Button/Button";
import { FavoriteIconCard } from "../FavoriteIconCard/FavoriteIconCard";

interface Params {
  product: Product;
}

export const ProductItem = ({ product}: Params) => {
  const { setFavoriteProduct, favoriteProduct } = useProducts();

  const saveFavoriteProduct = (product: Product) => {
    if (!favoriteProduct.includes(product)) {
      setFavoriteProduct((prevState) => [...prevState, product]);
    }
  };

  return (
    <div
      className="w-4/4 h-[280px] md:w-[200px] md:h-[350px] flex flex-col items-center justify-around  border border-slate-100 m-auto shadow p-2"
      key={product.id}
    >
      <h3 className="truncate w-3/4 font-semibold">{product.title}</h3>
      <img
        src={product.image}
        alt={product.title}
        className="w-1/4 h-1/4 object-cover"
      />
      <span>$ {product.price}</span>

      <div className="flex items-center gap-4">
        <FavoriteIconCard
          widthValue="10"
          onClick={() => saveFavoriteProduct(product)}
        />
        <Button className="bg-zinc-700 text-zinc-50  text-[12px] md:p-2 cursor-pointer hover:bg-zinc-600">
          Agregar al carrito
        </Button>
      </div>
    </div>
  );
};
