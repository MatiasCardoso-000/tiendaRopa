import { createContext } from "react";
import type { User } from "../../types/user.interface";

interface AuthContextType {
  user: User;
  loading:boolean,
  errors: string[],
  isAuthenticated:boolean,
  signUp: (user: User) => void;
  signIn: (user:User) => void
}

export const AuthContext = createContext<AuthContextType>({
  user: {} as User,
  loading:false,
  errors: [],
  isAuthenticated:false,
  signUp: (user: User) => user,
  signIn: (user: User) => user,
});
