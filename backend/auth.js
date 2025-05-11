import axios from "./api/axios";

export const registerRequest = async (user) => {
  return await axios.post("/registro", user);
};

export const loginRequest = async (user) => {
  return await axios.post("/login", user);
};

export const verifyToken = (token) => {
  return axios.get("/perfil", token);
};
