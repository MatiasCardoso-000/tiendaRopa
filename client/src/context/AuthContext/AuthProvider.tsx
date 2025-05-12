import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import type { User } from "../../types/user.interface";
import {
  registerRequest,
  loginRequest,
  verifyToken,
} from "../../../../server/api/auth.js";
import Cookies from "js-cookie";

interface Params {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: Params) => {
  const [user, setUser] = useState<User>({} as User);
  const [errors, setErrors] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  const signUp = async (user: User): Promise<void> => {
    try {
      const res = await registerRequest(user);

      if (res.status !== 200) {
        throw new Error("Hubo un error al registrarse");
      }

      setUser(res.data);
    } catch (error: any) {
      setErrors(error.response.data.message);
    }
  };

  const signIn = async (user: User): Promise<void> => {
    try {
      const res = await loginRequest(user);

      if (res.status !== 200) {
        throw new Error("Hubo un error al iniciar sesion");
      }

      setUser(res.data);
      setIsAuthenticated(true);
    } catch (error: any) {
      console.error(error);
      setErrors(error.response.data.message);
    }
  };

  const logout = () => {
    Cookies.remove("token");
    setUser({} as User);
    setIsAuthenticated(false);
  };

  useEffect(() => {
    const checkLogin = async () => {
      const cookies = Cookies.get();

      if (!cookies.token) {
        setIsAuthenticated(false);
        setLoading(false);
        return setUser({} as User);
      }

      try {
        const res = await verifyToken(cookies.token);

        if (!res.data) {
          setIsAuthenticated(false);
          setLoading(false);
          return;
        }

        setIsAuthenticated(true);
        setUser(res.data);
        setLoading(false);
      } catch (error: any) {
        setIsAuthenticated(false);
        setUser({} as User);
        setLoading(false);
        setErrors(error.response.data.message);
      }
    };

    checkLogin();
  }, [isAuthenticated]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setErrors([]);
    }, 3000);
    return () => clearTimeout(timer);
  });

  return (
    <AuthContext.Provider
      value={{ user, loading, errors, isAuthenticated, signUp, signIn, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
