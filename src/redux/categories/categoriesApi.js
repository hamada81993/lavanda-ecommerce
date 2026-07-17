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
    getBrands: builder.query({
      query: () => ({
        url: "brands",
        method: "GET",
      }),

      transformResponse: (response) => response.data,
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
getSubCategories: builder.query({
      query: (category_id) => ({
        url: `subcategory/${category_id}`,
        method: "GET",
      }),

      transformResponse: (response) =>
        response.subcategories,
    }),


getCategoryProducts: builder.query({
  query: (id) => ({
    url: `category/${id}`,
    method: "POST",
  }),

  transformResponse: (response) => ({
    title: response.category_name,
    products: response.products.data,
    pagination: response.products.meta,
  }),
}),
getFilteredProducts: builder.query({
  query: (filters) => ({
    url: "product",
    method: "GET",
    params: filters,
  }),

  transformResponse: (response) => ({
    products: response.data,
    pagination: {
      currentPage: response.current_page,
      totalItems: response.total_items,
      totalPages: response.total_page,
    },
  }),
}),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetBrandsQuery,
  useGetCategoriesWithProductsQuery,
  useGetAllCategoriesQuery,
   useGetChildCategoriesQuery,
   useGetSubCategoriesQuery,
   useGetCategoryProductsQuery,
   useGetFilteredProductsQuery
} = categoriesApi;