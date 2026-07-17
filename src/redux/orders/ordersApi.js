import { apiSlice } from "../api/apiSlice";

export const ordersApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // ===============================
    // Get All Orders
    // ===============================

    getOrders: builder.query({
      query: (page = 1) =>
        `user/order?page=${page}`,

      providesTags: ["Orders"],
    }),

    // ===============================
    // Get Single Order
    // ===============================

    getOrderDetails: builder.query({
      query: (id) =>
        `user/order/${id}`,

      providesTags: (result, error, id) => [
        {
          type: "Orders",
          id,
        },
      ],
    }),

    // ===============================
    // Refund Order
    // ===============================

    refundOrder: builder.mutation({
      query: (body) => ({
        url: "user/order/refund",

        method: "POST",

        body,
      }),

      invalidatesTags: [
        "Orders",
        "Refund",
      ],
    }),

    // ===============================
    // Refund History
    // ===============================

    getRefundHistory: builder.query({
      query: () =>
        "user/refund",

      providesTags: ["Refund"],
    }),
  }),
});

export const {
  useGetOrdersQuery,
  useGetOrderDetailsQuery,
  useRefundOrderMutation,
  useGetRefundHistoryQuery,
} = ordersApi;