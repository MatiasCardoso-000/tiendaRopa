import { useState } from "react";
import { useProducts } from "../../hooks/useProducts";
import { Header } from "../Header/Header";
import { ProductItem } from "../Productitem/ProductItem";

export const UserProfile = () => {
  const { favoriteProduct } = useProducts();
  const [isActive, setIsActive] = useState(false);

  const showSideMenu = () => {
    setIsActive(!isActive);
  };
  return (
    <div
      className={
        isActive
          ? " w-full min-h-screen transition-all duration-700 ease-linear bg-white opacity-100"
          : " w-full min-h-screen transition-all duration-700 ease-linear"
      }
    >
      <aside
        className={` ${
          isActive
            ? "w-full min-h-screen transition-all duration-700 ease-in-out fixed top-0 left-0 bg-white  md:w-[350px] border-r-4 z-10"
            : "w-full  min-h-screen transition-all duration-1000 ease-in-out  absolute top-0 left-[-100%]  md:w-[350px] z-10"
        }  `}
      >
        <ul className="flex flex-col">
          <div className=" text-right text-2xl border-b-4 p-4 cursor-pointer">
            <span className="w-max" onClick={showSideMenu}>
              X
            </span>
          </div>
          <div className="p-2">
            <li className="text-4xl p-4 cursor-pointer border-b-4 ">
              <h3 className="w-max hover:text-zinc-400 transition-all duration-500 font-bold">
                Inicio
              </h3>
            </li>
            <li className="text-4xl p-4 cursor-pointer border-b-4">
              <h3 className="w-max hover:text-zinc-400 transition-all duration-500 font-bold">
                Productos
              </h3>
            </li>
            <li className="text-4xl p-4 cursor-pointer border-b-4 ">
              <h3 className="w-max hover:text-zinc-400 transition-all duration-500 font-bold">
                Contactos
              </h3>
            </li>
          </div>
        </ul>
      </aside>
      <div>
        <Header showSideMenu={showSideMenu} />

        <section className="w-full  flex flex-col gap-10 m-auto">
          <h1 className="text-4xl font-semibold w-1/2 ml-8 text-left">
            Tus favoritos
          </h1>
          <div className="w-full  grid grid-cols-[repeat(auto-fit,minmax(200px,350px))] justify-center items-center gap-2 ">
            {favoriteProduct.length > 0 ? (
              favoriteProduct.map((product) => (
                <section className="w-full  grid grid-cols-2 md:grid-cols-[repeat(auto-fit,minmax(200px,350px))] justify-center items-center gap-4  ">
                  <ProductItem product={product} key={product._id} />
                </section>
              ))
            ) : (
              <p className="text-center text-2xl font-semibold text-gray-500 mt-32">
                No tienes productos favoritos
              </p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};
