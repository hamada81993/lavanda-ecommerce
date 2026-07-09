import { apiSlice } from "../api/apiSlice";

export const addressApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAddresses: builder.query({
      query: () => "user/all-shipping-address",

      providesTags: ["Address"],
    }),

    addAddress: builder.mutation({
      query: (body) => ({
        url: "user/add-shipping-address",
        method: "POST",
        body,
      }),

      invalidatesTags: ["Address"],
    }),

    deleteAddress: builder.mutation({
      query: (shipping_id) => ({
        url: `user/shipping-address/delete/${shipping_id}`,
        method: "GET",
      }),

      invalidatesTags: ["Address"],
    }),
    getCountries: builder.query({
  query: () => "country",
}),

// countries
getStates: builder.query({
  query: (countryId) => `state/${countryId}`,
  // skip: !countryId,
}),

getCities: builder.query({
  query: (stateId) => `city/${stateId}`,
  // skip: !stateId,
}),



  }),
});

export const {
  useGetAddressesQuery,
  useAddAddressMutation,
  useDeleteAddressMutation,


    useGetCountriesQuery,
  useGetStatesQuery,
  useGetCitiesQuery,
} = addressApi;