import { apiSlice } from "../api/apiSlice";

export const couponApi =
  apiSlice.injectEndpoints({
    endpoints: (builder) => ({
      applyCoupon: builder.mutation({
        query: (body) => ({
          url: "coupon",
          method: "POST",
          body,
        }),
      }),
    }),
  });

export const {
  useApplyCouponMutation,
} = couponApi;