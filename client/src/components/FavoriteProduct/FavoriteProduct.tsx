import { useProducts } from "../../hooks/useProducts";
import { ProductItem } from "../Productitem/ProductItem";

export const FavoriteProduct = () => {
  const { favoriteProduct } = useProducts();

  return (
    <section className="w-full flex flex-col items-center gap-10 m-auto">
      <h1 className="text-4xl font-semibold w-1/2 ml-8 text-left">Tus favoritos</h1>
      <div className="w-full md:w-1/2 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] justify-center items-center gap-2 ">
        {favoriteProduct.map((product) => (
          <div>
            <ProductItem product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};
