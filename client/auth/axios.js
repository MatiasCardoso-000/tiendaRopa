import axios from "axios";
const baseURL = import.meta.url.VITE_BACKEND || 'http://localhost:5000/api'
const instance = axios.create({
 baseURL,
  withCredentials: true,
});

export default instance;
