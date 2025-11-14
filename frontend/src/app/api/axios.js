import axios from "axios";
import { ROUTES } from "../constants";

const api = axios.create({
  baseURL: import.meta.env.BACKEND_URL || "https://revisory-alethia-unmotorised.ngrok-free.dev",
  timeout: 10000, // optional
});

// Optional: add interceptors
api.interceptors.request.use(
  (config) => {
    // Example: attach token if exists
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else if (
      config.url !== ROUTES.signIn() &&
      config.url !== ROUTES.signUp()
    ) {
      // window.location.href = ROUTES.signIn();
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      const url = error.config?.url;

      // ---- LOGOUT LOGIC ----
      localStorage.removeItem("token"); // Clear token
      if (url !== ROUTES.signIn() && url !== ROUTES.signUp()) {
        // Redirect to login (React Router)
        // window.location.href = ROUTES.signIn();
        // -----------------------
      }
    }

    return Promise.reject(error);
  }
);

export default api;
