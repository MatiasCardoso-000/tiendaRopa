import { Header } from "../Header/Header";
import { Input } from "../Input/Input";
import { ProductsList } from "../ProductsList/ProductsList";
import { useProducts } from "../../hooks/useProducts";
import { filterProducts } from "../../hooks/useFilters";
import { useState } from "react";
import { Footer } from "../Footer/Footer";

export const Home = () => {
  const { products } = useProducts();
  const [valueInput, setValue] = useState("");

  const handleOnChange = (e) => {
    const value = e.target.value;
    setValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const filteredProducts = filterProducts(products, valueInput);

  return (
    <>
      <Header />
      <section className="px-4">
        <form className="w-full text-center" onSubmit={handleSubmit}>
          <Input
            type="text"
            id="search"
            className="w-full md:w-1/3 border border-slate-500 p-2 rounded focus:outline-none focus:ring-2 focus:ring-zinc-800"
            onChange={handleOnChange}
          />
        </form>

        <ProductsList
          filteredProducts={filteredProducts}
          valueInput={valueInput}
        />
      </section>

      <Footer />
    </>
  );
};
