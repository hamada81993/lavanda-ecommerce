import axios from "axios";

export const api = axios.create({
  baseURL: "/api/tenant/v1",
   headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
    
  },});

console.log(api);
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization =
      `Bearer ${token}`;
      console.log("TOKEN =", token);
  }

  return config;
});
api.interceptors.request.use((config) => {
  console.log("REQUEST URL =>", config.baseURL + config.url);
  return config;
});
api.interceptors.request.use((config) => {
  console.log(config);
  return config;
});
export default api;