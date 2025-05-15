import { Link } from "react-router-dom";
import { useProducts } from "../../hooks/useProducts";
import { Product } from "../../types/product.interface";
import { ProductItem } from "../Productitem/ProductItem";

interface Params {
  filteredProducts: Product[];
  valueInput: string;
}

export const ProductsList = ({ filteredProducts, valueInput }: Params) => {
  const { products, randomProduct, loading} = useProducts();

  return (
    <div className="w-full flex flex-col gap-8">
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

            <h1 className="w-full md:text-2xl md:w-max md:ml-14 md:text-left text-center font-semibold">
              Algunos de nuestros productos ...
            </h1>
            <section className="w-full md:w-3/4  grid grid-cols-2 md:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] justify-center items-center gap-2 md:gap-4 m-auto mb-14">
              {randomProduct.map((product) => (
                <ProductItem product={product} />
              ))}
            </section>
          </div>
          <div className="w-full flex flex-col gap-14">
            <h1 className="text-xl  w-full text-center md:text-left md:w-max md:text-2xl md:ml-14 font-semibold ">
              Camisas con botones para hombres
            </h1>
            <div className="flex flex-col text-right gap-8">
              <section className="w-full md:w-4/5  grid  grid-cols-2 md:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] justify-center items-center gap-2 md:gap-4 m-auto">
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
              <div className="w-full text-center md:text-right">
                <p>
                  Ver más{" "}
                  <Link to={`/camisas-con-botones-para-hombres`}>
                    <span className="font-semibold hover:underline  md:mr-52">
                      Camisas con botones para hombres
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col gap-4 md:gap-14">
            <h1 className="text-xl  w-full md:w-3/4 md:text-2xl ml-14 font-semibold">
              Pantalones Hombre
            </h1>
            <div className="w-full flex flex-col text-right gap-8">
              <section className="w-full md:w-4/5  grid grid-cols-2 md:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] justify-center items-center gap-2 md:gap-4 m-auto">
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
              <div className="w-full mb-10">
                <p>
                  Ver más{" "}
                  <Link to={`/pantalones-para-hombres`}>
                    <span className="font-semibold hover:underline mr-10 md:mr-52">
                      Pantalones hombre
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
