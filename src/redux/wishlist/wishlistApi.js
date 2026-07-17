
import { apiSlice } from "../api/apiSlice";

export const wishlistApi =
  apiSlice.injectEndpoints({
    endpoints: (builder) => ({

      getWishlist: builder.query({
        query: () => "user/wishlist",

        providesTags: ["Wishlist"],
      }),

     toggleWishlist: builder.mutation({
  query: (productId) => ({
    url: "user/wishlist/toggle",
    method: "POST",
    body: {
      product_id: productId,
    },
  }),

  invalidatesTags: ["Wishlist"],
}),

removeWishlist: builder.mutation({
  query: (productId) => ({
    url: "user/wishlist/remove",
    method: "DELETE",
    body: {
      product_id: productId,
    },
  }),

  invalidatesTags: ["Wishlist"],
}),

    }),
  });

export const {
  useGetWishlistQuery,
  useToggleWishlistMutation,
    useRemoveWishlistMutation,

} = wishlistApi;

