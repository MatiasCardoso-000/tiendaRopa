import { useProducts } from "../../hooks/useProducts";
import { Header } from "../Header/Header";
import { ProductItem } from "../Productitem/ProductItem";

export const UserProfile = () => {
  const { favoriteProduct } = useProducts();

  return (
    <div className="w-full flex flex-col gap-40">
      <Header />
      <section className="w-full flex flex-col items-center gap-10 m-auto">
        <h1 className="text-4xl font-semibold w-1/2 ml-8 text-left">
          Tus favoritos
        </h1>
        <div className="w-full md:w-1/2 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] justify-center items-center gap-2 ">
          {favoriteProduct.map((product) => (
            <div>
              <ProductItem product={product} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
