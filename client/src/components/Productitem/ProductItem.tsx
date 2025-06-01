import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useProducts } from "../../hooks/useProducts";
import { Product } from "../../types/product.interface";
import { Button } from "../Button/Button";
import { useState } from "react";
import { FavoriteIcon, FavoriteIconBorder } from "../Icons/Icons";

interface Params {
  product?: Product;
}

export const ProductItem = ({ product }: Params) => {
  const { setFavoriteProduct } = useProducts();
  const [isActive, setIsActive] = useState(false);
  const { user } = useAuth();

  const saveFavoriteProduct = (product: Product) => {
    setIsActive(!isActive);
    if (isActive) {
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
          className="w-full  h-auto bg-white rounded-2xl flex flex-col items-center text-center gap-2 p-2 md:p-4 shadow m-auto"
          key={product?._id}
        >
          {product?.image ? (
            <img
              src={product?.image}
              alt={product?.title || "Producto"}
              className="w-full h-auto object-cover"
              onError={(e) => {
                e.currentTarget.src =
                  "https://via.placeholder.com/400x300?text=Imagen+no+disponible";
              }}
            />
          ) : (
            <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-400">Vista previa de imagen</span>
            </div>
          )}
          <h3 className="truncate w-full  p-2 font-semibold text-center">
            {product?.title ? product?.title : "Producto sin título"}
          </h3>
          <span className="font-bold md:text-2xl">
            $ {product?.price ? product?.price : "0.00"}
          </span>

          <Button
            className="w-full bg-zinc-950 text-zinc-50 font-semibold text-[10px] md:text-[12px] rounded-2xl py-2 px-1 md:p-2 cursor-pointer hover:bg-zinc-600"
            onClick={() =>
              handleUpdateProduct(product?._id ? product?._id : "")
            }
          >
            <Link to="/auth/admin">Modificar</Link>
          </Button>
        </div>
      ) : (
        <div
          className="w-full  h-auto bg-white rounded-2xl flex flex-col items-center text-center p-2 md:p-4 shadow m-auto"
          key={product?._id}
        >
          <img
            src={product?.image}
            alt={product?.title}
            className="w-full rounded-2xl object-cover block"
          />
          <h3 className="truncate w-full md:text-left p-2 font-semibold">
            {product?.title}
          </h3>

          <div className="w-full flex flex-wrap items-center justify-center md:justify-between gap-4 md:px-2">
            <span className="font-bold md:text-2xl">$ {product?.price}</span>
            <div className="flex items-center gap-2 md:gap-4">
              {!isActive ? (
                <FavoriteIconBorder
                  onClick={() =>
                    saveFavoriteProduct(product ? product : ({} as Product))
                  }
                />
              ) : (
                <FavoriteIcon
                  onClick={() =>
                    saveFavoriteProduct(product ? product : ({} as Product))
                  }
                />
              )}

              <Button className="bg-zinc-950 text-zinc-50 font-semibold text-[10px] md:text-[12px] rounded-3xl py-2 px-1 md:p-2 cursor-pointer hover:bg-zinc-600">
                Agregar al carrito
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
