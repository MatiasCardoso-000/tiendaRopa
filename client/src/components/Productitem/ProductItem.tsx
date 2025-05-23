import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useProducts } from "../../hooks/useProducts";
import { Product } from "../../types/product.interface";
import { Button } from "../Button/Button";
import { FavoriteIconCard } from "../FavoriteIconCard/FavoriteIconCard";

interface Params {
  product: Product;
}

export const ProductItem = ({ product }: Params) => {
  const { setFavoriteProduct, favoriteProduct } = useProducts();
  const { user } = useAuth();
  const saveFavoriteProduct = (product: Product) => {
    if (!favoriteProduct.includes(product)) {
      setFavoriteProduct((prevState) => [...prevState, product]);
    }
  };


  

  const handleUpdateProduct = (id: string) => {
    // Aquí puedes implementar la lógica para actualizar el producto
    console.log("Actualizando producto:", id);
  };

  return (
    <>
      {user.role === "admin" ? (
        <div
          className="w-full md:w-[350px] h-[320px] flex flex-col items-center text-center justify-around p-2 shadow  m-auto"
          key={product._id}
        >
          <h3 className="truncate w-3/4 font-semibold">{product.title}</h3>
          <img
            src={product.image}
            alt={product.title}
            className="w-[100%] h-[150px] md:w-1/2 md:h-1/2 object-cover"
          />
          <span>$ {product.price}</span>

          <div className="flex items-center gap-4">
            <FavoriteIconCard
              widthValue="10"
              onClick={() => saveFavoriteProduct(product)}
            />
            <Button
              className="bg-zinc-950 text-zinc-50 font-semibold text-[12px] md:p-2 cursor-pointer hover:bg-zinc-600"
              onClick={() => handleUpdateProduct(product._id)}
            >
              <Link to="/update">Modificar</Link>
            </Button>
          </div>
        </div>
      ) : (
        <div
          className="w-full md:w-[350px] h-[320px] flex flex-col items-center text-center justify-around p-2 shadow  m-auto"
          key={product._id}
        >
          <h3 className="truncate w-3/4 font-semibold">{product.title}</h3>
          <img
            src={product.image}
            alt={product.title}
            className="w-[100%] h-[150px] md:w-1/2 md:h-1/2 object-cover"
          />
          <span>$ {product.price}</span>

          <div className="flex items-center gap-4">
            <FavoriteIconCard
              widthValue="10"
              onClick={() => saveFavoriteProduct(product)}
            />
            <Button className="bg-zinc-950 text-zinc-50 font-semibold text-[12px] md:p-2 cursor-pointer hover:bg-zinc-600">
              Agregar al carrito
            </Button>
          </div>
        </div>
      )}
    </>
  );
};
