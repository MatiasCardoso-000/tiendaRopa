import { Header } from "../Header/Header";
import { ProductsList } from "../ProductsList/ProductsList";
import { useState } from "react";
import { Footer } from "../Footer/Footer";
import { Link } from "react-router-dom";

export const Home = () => {
  const [isActive, setIsActive] = useState(false);

  const showSideMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <main
      className={
        isActive
          ? "transition-all duration-700 ease-linear bg-gray-200 opacity-100"
          : "transition-all duration-700 ease-linear"
      }
    >
      <Header showSideMenu={showSideMenu} />
      <aside
        className={` ${
          isActive
            ? "w-full min-h-screen transition-all duration-700 ease-in-out fixed top-0 left-0 bg-white  md:w-[350px] border-r-4 z-10"
            : "w-full  min-h-screen transition-all duration-1000 ease-in-out  fixed top-0 left-[-100%]  md:w-[350px] z-10"
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
               <Link to={'/'}> Inicio</Link>
              </h3>
            </li>
            <li className="text-4xl p-4 cursor-pointer border-b-4">
              <h3 className="w-max hover:text-zinc-400 transition-all duration-500 font-bold">
               <Link to={'/productos'}>
                Productos
               </Link>
              </h3>
            </li>
            <li className="text-4xl p-4 cursor-pointer border-b-4 ">
              <h3 className="w-max hover:text-zinc-400 transition-all duration-500 font-bold">
               <Link to={'/contacto'}>
                Contacto
               </Link>
              </h3>
            </li>
          </div>
        </ul>
      </aside>
      <section className="w-full flex flex-col items-center  gap-8 mt-4 p-2 md:px-4">
        <ProductsList />
      </section>

      <Footer />
    </main>
  );
};
