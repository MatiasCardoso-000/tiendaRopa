import axios from "./axios";
import {User} from '../../client/src/types/user.interface'

export const registerRequest = async (user: User) => {
  return await axios.post("/registro", user);
};

export const loginRequest = async (user: User) => {
  return await axios.post("/login", user);
};

export const verifyToken = (token) => {
  return axios.get("/perfil", token);
};
