import { apiSlice } from "../api/apiSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: "login",
        method: "POST",
        body,
      }),
    }),

    register: builder.mutation({
      query: (body) => ({
        url: "register",
        method: "POST",
        body,
      }),
    }),

    socialLogin: builder.mutation({
      query: (body) => ({
        url: "social/login",
        method: "POST",
        body,
      }),
    }),

    sendOtp: builder.mutation({
      query: (body) => ({
        url: "send-otp-in-mail",
        method: "POST",
        body,
      }),
    }),

    verifyOtp: builder.mutation({
      query: (body) => ({
        url: "otp-success",
        method: "POST",
        body,
      }),
    }),

    resetPassword: builder.mutation({
      query: (body) => ({
        url: "reset-password",
        method: "POST",
        body,
      }),
    }),

    logout: builder.mutation({
      query: () => ({
        url: "user/logout",
        method: "POST",
      }),

      invalidatesTags: ["Profile", "Orders", "Address"],
    }),

    deleteAccount: builder.mutation({
      query: (id) => ({
        url: `user/account/delete/${id}`,
        method: "POST",
      }),

      invalidatesTags: ["Profile", "Orders", "Address"],
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useSocialLoginMutation,
  useSendOtpMutation,
  useVerifyOtpMutation,
  useResetPasswordMutation,
  useLogoutMutation,
  useDeleteAccountMutation,
} = authApi;