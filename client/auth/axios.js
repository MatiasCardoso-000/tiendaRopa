import axios from "axios";
const baseURL = import.meta.url.VITE_BACKEND || 'http://localhost:8080/api'
const instance = axios.create({
 baseURL,
  withCredentials: true,
});

export default instance;
