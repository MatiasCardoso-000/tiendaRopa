import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AuthProvider } from "./context/AuthContext/AuthProvider";
import { ProductProvider } from "./context/ProductContext/ProductProvider";

export const AppHookContainer = () => {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <ProductProvider>
            <App />
          </ProductProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
};
