import { apiSlice } from "../api/apiSlice";

export const categoriesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => ({
        url: "category",
        method: "GET",
      }),

      transformResponse: (response) => response.categories,
    }),
    getCategoriesWithProducts: builder.query({
  query: () => ({
    url: "categories-with-products",
    method: "GET",
  }),

  transformResponse: (response) => response.data,
}),
getAllCategories: builder.query({
  query: () => ({
    url: "all-categories",
    method: "GET",
  }),

  transformResponse: (response) => response.data,
}),
getChildCategories: builder.query({
      query: (subCategoryId) => ({
        url: `child-category/${subCategoryId}`,
        method: "GET",
      }),

      transformResponse: (response) =>
        response.childCategories,
    }),
getCategoryProducts: builder.query({
  query: (categoryId) => ({
    url: `category/${categoryId}`,
    method: "GET",
  }),
    transformResponse: (response) => response,

}),


  }),
});

export const {
  useGetCategoriesQuery,
  useGetCategoriesWithProductsQuery,
  useGetAllCategoriesQuery,
   useGetCategoryProductsQuery,
   useGetChildCategoriesQuery
} = categoriesApi;