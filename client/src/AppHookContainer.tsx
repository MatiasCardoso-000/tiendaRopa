import App from "./App";
import { AppRouter } from "./AppRouter";
import { AuthProvider } from "./context/AuthContext/AuthProvider";
import { ProductProvider } from "./context/ProductContext/ProductProvider";

export const AppHookContainer = () => {
  return (
    <>
      <AuthProvider>
        <ProductProvider>
          <App>
            <AppRouter />
          </App>
        </ProductProvider>
      </AuthProvider>
    </>
  );
};
