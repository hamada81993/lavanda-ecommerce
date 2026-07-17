import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",

  baseQuery: fetchBaseQuery({
   baseUrl: import.meta.env.VITE_API_BASE_URL || "/api/tenant/v1/",

    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");

      if (token) {
        headers.set(
          "Authorization",
          `Bearer ${token}`
        );
      }
headers.set(
  "x-api-key",
  import.meta.env.VITE_API_KEY
);

      return headers;
    },
  }),

  tagTypes: [
  "Orders",
  "Profile",
  "Address",
  "Refund",
  "Auth",
   "Wishlist",
   "Cart",
   
],

  endpoints: () => ({}),
});
