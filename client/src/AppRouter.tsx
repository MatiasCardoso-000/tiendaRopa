import { Route, Routes } from "react-router-dom";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { UserProfilePage } from "./pages/UserProfilePage/UserProfilePage";
import { ProtectedRoutes } from "./components/ProtectedRoutes/ProtectedRoutes";
import { useAuth } from "./hooks/useAuth";
import { HomePage } from "./pages/HomePage/HomePage";
import { UpdateProductPage } from "./pages/UpdateProductPage/UpdateProductPage";
import { ContactPage } from "./pages/ContactPage/ContactPage";

export const AppRouter = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route
        element={
          <ProtectedRoutes
            redirectTo={"/login"}
            isAuthenticated={isAuthenticated}
          />
        }
      >
        <Route path="/perfil" element={<UserProfilePage />} />
      </Route>
      <Route path="/update" element={<UpdateProductPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/auth/register" element={<RegisterPage />} />
      <Route path="/auth/login" element={<LoginPage />} />
      <Route path="/contacto" element={<ContactPage />} />
    </Routes>
  );
};
