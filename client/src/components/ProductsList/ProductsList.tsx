import { Link } from "react-router-dom";
import { useProducts } from "../../hooks/useProducts";
import { ProductItem } from "../Productitem/ProductItem";
import { useFilters } from "../../hooks/useFilters";
import { useSearch } from "../../hooks/useSearch";

export const ProductsList = () => {
  const { products, loading } = useProducts();
  const { filterProducts } = useFilters();
  const { valueInput } = useSearch();
  const filteredProducts = filterProducts(products, valueInput);

    console.log(valueInput);

  return (
    <div className="w-full flex flex-col gap-8 pb-8 items-center">
      {!loading ? (
        <>
          <div className="w-full flex flex-col gap-14 ">
            {valueInput && (
              <div className="flex flex-col gap-8 ">
                <h1 className="w-full md:text-2xl  md:w-max md:ml-14 text-center md:text-left">
                  Resultado busqueda:{" "}
                  <span className="font-semibold">{filterProducts.length}</span>
                </h1>

                <section className="w-full  grid grid-cols-2 md:grid-cols-[repeat(auto-fit,minmax(200px,350px))] justify-center items-center gap-4  ">
                  {filteredProducts.map((product) => (
                    <ProductItem product={product} />
                  ))}
                </section>
              </div>
            )}
          </div>

          <div className="flex flex-wrap w-full items-center justify-center gap-8 md:mt-10">
            <div className="flex flex-col gap-4">
              <h2 className="text-5xl font-bold">Remeras</h2>
              <div className="w-full   flex flex-col gap-4 relative overflow-hidden group md:h-[600px]">
                <img
                  src="../../../products/remeras-banner.png"
                  alt=""
                  className="w-full group-hover:scale-150 origin-center  object-cover transition-all duration-500 hover:scale-125"
                />
                <Link to={"/products"}>
                  {" "}
                  <span className="w-max underline">Ver Más</span>
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-5xl font-bold">Packs</h2>
              <div className="w-full flex flex-col gap-4 relative overflow-hidden group md:h-[600px]">
                <img
                  src="../../../products/packs-banner.png"
                  alt=""
                  className="w-full  group-hover:scale-150 origin-center  object-cover transition-all duration-500 hover:scale-125"
                />
                <Link to={"/products"}>
                  {" "}
                  <span className="w-max underline">Ver Más</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full gap-14 ">
            <h3 className="w-1/3 text-3xl font-bold text-center ">Remeras</h3>
            <section className="w-full md:w-3/4  grid grid-cols-2 md:grid-cols-[repeat(auto-fit,minmax(300px,400px))] justify-center gap-2 m-auto ">
              {products.map((product) => (
                <ProductItem product={product} />
              ))}
            </section>
          </div>
        </>
      ) : (
        <div className="w-full h-screen flex  justify-center">
          <h1 className="text-xl font-semibold">Cargando productos...</h1>
        </div>
      )}
    </div>
  );
};
