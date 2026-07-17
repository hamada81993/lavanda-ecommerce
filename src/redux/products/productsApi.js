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
       getFilteredProducts: builder.query({
      query: ({ search = "", category_id, sub_category_id, child_category_id, min_price, max_price, page = 1 } = {}) => ({
        url: "product",
        params: {
          ...(search && { search }),
          ...(category_id && { category_id }),
          ...(sub_category_id && { sub_category_id }),
          ...(child_category_id && { child_category_id }),
          ...(min_price && { from_price: min_price }),
          ...(max_price && { to_price: max_price }),
          page,
        },
      }),
      transformResponse: (response) => response,
    }),

    searchProducts: builder.query({
      query: (keyword) => ({
        url: "search-items",
        params: { keyword },
      }),
      transformResponse: (response) => response.data ?? response,
    }),
  }),
});

export const {
  useGetRecentProductsQuery,
   useGetProductDetailsQuery,
    useGetFilteredProductsQuery,
  useSearchProductsQuery,
} = productsApi;