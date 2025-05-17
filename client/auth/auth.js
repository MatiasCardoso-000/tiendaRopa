import axios from "./axios.js";

export const registerRequest =  async(user) => {
  return await  axios.post("/register", user);
};

export const loginRequest = async (user) => {
  return await axios.post("/login", user);
};

export const verifyToken = async (token) => {
  return await axios.get("/verify", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
