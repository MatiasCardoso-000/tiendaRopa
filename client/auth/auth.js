import axios from "./axios.js";
import Cookies from "js-cookie";

export const registerRequest = async (user) => {
  return await axios.post("/register", user);
};

export const loginRequest = async (user) => {
  return await axios.post("/login", user);
};

export const verifyToken = async (token) => {
  Cookies.set("token", token, { sameSite: "None", secure: true });

  return await axios.get("/verify", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
