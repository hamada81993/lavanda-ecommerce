import { apiSlice } from "../api/apiSlice";

export const productsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getRecentProducts: builder.query({
      query: (limit = 10) => ({
        url: `recent/product/${limit}`,
        method: "GET",
      }),

      transformResponse: (response) => response.data,
    }),

    getProductDetails: builder.query({
      async queryFn(id) {
        try {
          const res = await fetch(
            `/api/tenant/v1/product/${id}`,
            {
              headers: {
                "x-api-key": import.meta.env.VITE_API_KEY,
              },
            }
          );

          const data = await res.json();

          if (!res.ok) {
            return { error: data };
          }

          return { data };
        } catch (error) {
          return { error };
        }
      },
    }),
  }),
});

export const {
  useGetRecentProductsQuery,
   useGetProductDetailsQuery,
} = productsApi;