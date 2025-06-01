import { Header } from "../Header/Header";
import { ProductsList } from "../ProductsList/ProductsList";
import { Footer } from "../Footer/Footer";

export const Home = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen w-full flex ">
        <ProductsList />
      </main>
      <Footer />
    </>
  );
};
