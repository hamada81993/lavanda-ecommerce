import { apiSlice } from "../api/apiSlice";

export const cartApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCart: builder.query({
      query: () => ({
        url: "user/cart",
      }),

      providesTags: ["Cart"],
    }),

    addToCart: builder.mutation({
  query: ({ product_id, quantity }) => ({
    url: "user/cart/add",
    method: "POST",
    body: {
      product_id,
      quantity,
    },
  }),

  invalidatesTags: ["Cart"],
}),

removeCartItem: builder.mutation({
  query: (row_id) => ({
    url: "user/cart/remove",
    method: "DELETE",
    body: {
      row_id,
    },
  }),

  invalidatesTags: ["Cart"],
}),

updateCartItem: builder.mutation({
  query: ({ product_id, quantity }) => ({
    url: "user/cart/update",
    method: "POST",
    body: {
      product_id,
      quantity,
    },
  }),

  invalidatesTags: ["Cart"],
}),

  }),
});

export const {
  useGetCartQuery,
  useAddToCartMutation,
  useRemoveCartItemMutation,
  useUpdateCartItemMutation
} = cartApi;