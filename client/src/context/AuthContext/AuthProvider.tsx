import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import type { User } from "../../types/user.interface";
import {
  registerRequest,
  loginRequest,
  verifyToken,
} from "../../../../backend/api/auth";
import Cookies from "js-cookie";

interface Params {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: Params) => {
  const [user, setUser] = useState<User>({} as User);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const signUp = async (user: User) => {
    try {
      const res = await registerRequest(user);

      if (res.status !== 200) {
        throw new Error("ERROR EN LA PETICION DE USUARIO");
      }

      setUser(user);
      setLoading(false);
    } catch (error: any) {
      setErrors(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (user: User) => {
    try {
      const res = await loginRequest(user);

      if (res.status !== 200) {
        throw new Error("ERROR EN LA PETICION DE USUARIO");
      }

      setUser(res.data);
    } catch (error: any) {
      console.error(error);
      setErrors(error.response.data.message);
    }
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
        setErrors(error.response.data.message);
        setLoading(false);
      }
    };

    checkLogin();
  }, [isAuthenticated]);

  return (
    <AuthContext.Provider
      value={{ user, loading, errors, isAuthenticated, signUp, signIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};
