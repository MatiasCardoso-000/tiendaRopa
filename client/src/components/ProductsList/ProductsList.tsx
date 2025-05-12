import { useProducts } from "../../hooks/useProducts";
import { ProductItem } from "../Productitem/ProductItem";

export const ProductsList = () => {
  const { products,randomProduct, loading } = useProducts();

  return (
    <section className="w-full md:w-1/2 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] justify-center items-center gap-2">
      {!loading ? (
        randomProduct.map((product) => <ProductItem product={product} />)
      ) : (
        <div className="w-full h-screen flex  justify-center">
          <h1 className="text-xl font-semibold">Cargando productos...</h1>
        </div>
      )}
    </section>
  );
};
