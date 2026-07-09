import { apiSlice } from "../api/apiSlice";

export const checkoutApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getShippingCharge: builder.mutation({
      query: (body) => ({
        url: "shipping-charge",
        method: "POST",
        body: {
          ...body,
          product_ids: JSON.stringify(body.product_ids),
        },
      }),
    }),
    checkout: builder.mutation({
  query: (body) => ({
    url: "checkout",
    method: "POST",
    body,
  }),
}),
getPaymentGateways: builder.query({
  query: () => ({
    url: "payment-gateway-list",
    method: "GET",
  }),
}),

updatePayment: builder.mutation({
  query: (body) => ({
    url: "update-payment",
    method: "POST",
    body,
  }),
}),
  }),


});

export const {
  useGetShippingChargeMutation,
  useCheckoutMutation,
  useUpdatePaymentMutation,
  useGetPaymentGatewaysQuery,
} = checkoutApi;