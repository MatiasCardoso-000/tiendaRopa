import { Link } from "react-router-dom";
import { useProducts } from "../../hooks/useProducts";
import { Product } from "../../types/product.interface";
import { ProductItem } from "../Productitem/ProductItem";

interface Params {
  filteredProducts: Product[];
  valueInput: string;
}

export const ProductsList = ({ filteredProducts, valueInput }: Params) => {
  const { products, randomProduct, loading } = useProducts();

  return (
    <div className="w-full flex flex-col gap-8 pb-8">
      {!loading ? (
        <>
          <div className="w-full flex flex-col gap-14">
            {valueInput && (
              <div className="flex flex-col gap-8">
                <h1 className="w-full md:text-2xl  md:w-max md:ml-14 text-center md:text-left">
                  Resultado busqueda:{" "}
                  <span className="font-semibold">{valueInput}</span>
                </h1>

                <section className="w-full md:w-3/4  grid grid-cols-2 md:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] justify-center items-center gap-2 md:gap-4 m-auto ">
                  {filteredProducts.map((product) => (
                    <ProductItem product={product} />
                  ))}
                </section>
              </div>
            )}
          </div>

          <div className="flex items-center justify-center gap-8 mt-10">
            <div className="md:w-1/3  flex flex-col gap-4">
              <h2 className="text-5xl font-bold">Remeras</h2>
              <img
                src="../../../products/Black and White Minimalist T-Shirt Mockup Instagram Post.png"
                alt=""
                className="w-full"
              />
              <Link to={"/products"}>
                {" "}
                <span className="w-max hover:underline">Ver Más</span>
              </Link>
            </div>
            <div className="md:w-1/3 flex flex-col gap-4">
              <h2 className="text-5xl font-bold">Packs</h2>
              <img
                src="../../../products/Black and White Modern T-Shirt Sale Facebook Post.png "
                alt=""
                className="w-full"
              />
              <Link to={"/products"}>
                {" "}
                <span className="w-max hover:underline">Ver Más</span>
              </Link>
            </div>
          </div>

          <section className="w-full md:w-3/4  grid grid-cols-2 md:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] justify-center items-center gap-2 md:gap-4 m-auto ">
            {products.slice(0,4).map((product) => (
              <ProductItem product={product} />
            ))}
          </section>
        </>
      ) : (
        <div className="w-full h-screen flex  justify-center">
          <h1 className="text-xl font-semibold">Cargando productos...</h1>
        </div>
      )}
    </div>
  );
};
