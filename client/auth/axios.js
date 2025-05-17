import axios from "axios";
const baseURL = import.meta.url.VITE_BACKEND_AUTH_URL || "http://localhost:5000/auth"
const instance = axios.create({
 baseURL,
  withCredentials: true,
});

export default instance;
