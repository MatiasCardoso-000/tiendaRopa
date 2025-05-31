import { Header } from "../Header/Header";
import { ProductsList } from "../ProductsList/ProductsList";
import { useState } from "react";
import { Footer } from "../Footer/Footer";
import { Aside } from "../Aside/Menu";

export const Home = () => {
  const [isActive, setIsActive] = useState(false);

  const showSideMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <main
      className={`min-h-screen w-full flex flex-wrap  ${
        isActive ? "md:bg-gray-200 opacity-100 transition-all duration-700 ease-in-out" : "transition-all duration-700 ease-in-out"
      }`}
    >
      <Header showSideMenu={showSideMenu} />
      <Aside  showSideMenu={showSideMenu} isActive={isActive}/>
     
      <section className="flex-1 w-full flex flex-col items-center gap-8 mt-4 p-2 md:px-4">
        <ProductsList />
      </section>
      <Footer />
    </main>
  );
};