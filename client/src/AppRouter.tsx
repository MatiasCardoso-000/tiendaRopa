import { Route, Routes } from "react-router-dom";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { UserProfilePage } from "./pages/UserProfilePage/UserProfilePage";
import { ProtectedRoutes } from "./components/ProtectedRoutes/ProtectedRoutes";
import { useAuth } from "./hooks/useAuth";
import { HomePage } from "./pages/HomePage/HomePage";

export const AppRouter = () => {
  const { isAuthenticated } = useAuth();

  return (
    <main className="w-full">
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

        <Route path="/" element={<HomePage />} />
        <Route path="/registro" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </main>
  );
};
