import axios from "axios";

 const API_URL = "https://tiendaropa-production-3d40.up.railway.app" || "http://localhost:5000";

const instance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

export default instance;
