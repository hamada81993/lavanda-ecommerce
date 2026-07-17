// src/redux/profile/profileApi.js

import { apiSlice } from "../api/apiSlice";


export const profileApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    getProfile: builder.query({
      query: () => "user/profile",

      providesTags: ["Profile"],
    }),

    updateProfile: builder.mutation({
      query: (body) => ({
        url: "user/update-profile",
        method: "POST",
        body,
      }),

      invalidatesTags: ["Profile"],
    }),

    deleteAccount: builder.mutation({
      query: (id) => ({
        url: `user/account/delete/${id}`,
        method: "DELETE",
      }),

      invalidatesTags: ["Profile"],
    }),

    logout: builder.mutation({
      query: () => ({
        url: "user/logout",
        method: "POST",
      }),
    }),

  }),
});

export const {

  useGetProfileQuery,

  useUpdateProfileMutation,

  useDeleteAccountMutation,

  useLogoutMutation,

} = profileApi;