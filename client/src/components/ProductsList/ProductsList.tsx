import { Link } from "react-router-dom";
import { useProducts } from "../../hooks/useProducts";
import { Product } from "../../types/product.interface";
import { ProductItem } from "../Productitem/ProductItem";

interface Params {
  filteredProducts: Product[];
  valueInput: string;
}

export const ProductsList = ({ filteredProducts, valueInput }: Params) => {
  const { products, randomProduct, loading, searchQuery } = useProducts();

  return (
    <div className="flex flex-col w-full gap-2">
      {!loading ? (
        <>
          {searchQuery && <h2>Resultado para: {searchQuery}</h2>}
          <div className="flex flex-col gap-14">
            {valueInput && (
              <div className="flex flex-col gap-8">
                <h1 className=" text-2xl  w-3/4 ml-14">
                  Resultado busqueda:{" "}
                  <span className="font-semibold">{valueInput}</span>
                </h1>

                <section className="w-full md:w-3/4  grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] justify-center items-center gap-4 m-auto ">
                  {filteredProducts.map((product) => (
                    <ProductItem product={product} />
                  ))}
                </section>
              </div>
            )}

            <h1 className="text-2xl w-3/4 ml-14">
              Algunos de nuestros productos ...
            </h1>
            <section className="w-full md:w-3/4  grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] justify-center items-center gap-4 m-auto mb-14">
              {randomProduct.map((product) => (
                <ProductItem product={product} />
              ))}
            </section>
          </div>
          <div className="flex flex-col gap-14">
            <h1 className="text-2xl  w-3/4 ml-14">
              Camisas con botones para hombres
            </h1>
            <div className="flex flex-col text-right gap-8">
              <section className="w-full md:w-4/5  grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] justify-center items-center gap-4 m-auto">
                {products
                  .slice(1, -5)
                  .map((product) =>
                    product.category === "Camisas con botones para hombres" ? (
                      <ProductItem product={product} key={product.id} />
                    ) : (
                      ""
                    )
                  )}
              </section>
              <div className="w-10/12 ml-10">
                <p>
                  Ver más{" "}
                  <Link to={`/camisas-con-botones-para-hombres`}>
                    <span className="font-semibold hover:underline">
                      Camisas con botones para hombres
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-14">
            <h1 className="text-2xl  w-3/4 ml-14">Pantalones Hombre</h1>
            <div className="flex flex-col text-right gap-8">
              <section className="w-full md:w-4/5  grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] justify-center items-center gap-4 m-auto">
                {products
                  .slice(1, -5)
                  .map((product) =>
                    product.category === "Vestir" ||
                    product.category === "Casual" ? (
                      <ProductItem product={product} key={product.id} />
                    ) : (
                      ""
                    )
                  )}
              </section>
              <div className="w-10/12 ml-10">
                <p>
                  Ver más{" "}
                  <Link to={`/pantalones-para-hombres`}>
                    <span className="font-semibold hover:underline">
                      Pantalones hombres
                    </span>
                  </Link>
                </p>
              </div>
            </div>
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
