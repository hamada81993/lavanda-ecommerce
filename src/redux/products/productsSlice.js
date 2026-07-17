import { createSlice } from "@reduxjs/toolkit";

import {

  fetchSearchProducts,
  fetchCategoryProducts,
} from "./productsThunk";

const initialState = {
  keyword: "",

  recentProducts: [],

  searchProducts: [],

  categoryProducts: [],

  productDetails: null,

  relatedProducts: [],

  searchPagination: {
    currentPage: 1,
    lastPage: 1,
    total: 0,
    nextPage: null,
    previousPage: null,
  },

  loading: false,

  error: null,
};

const productsSlice = createSlice({
  name: "products",

  initialState,

  reducers: {
    setSearchKeyword: (state, action) => {
      state.keyword = action.payload;
    },

    clearSearch: (state) => {
      state.keyword = "";

      state.searchProducts = [];

      state.searchPagination = {
        currentPage: 1,
        lastPage: 1,
        total: 0,
        nextPage: null,
        previousPage: null,
      };
    },
  },

  extraReducers: (builder) => {
    builder

      // ===========================
      // Recent Products
      // ===========================


      // ===========================
      // Search Products
      // ===========================

      .addCase(fetchSearchProducts.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchSearchProducts.fulfilled, (state, action) => {
        state.loading = false;

        state.searchProducts = action.payload.data;

        state.searchPagination = {
          currentPage: action.payload.current_page,
          lastPage: action.payload.last_page,
          total: action.payload.total_items,
          nextPage: action.payload.next_page,
          previousPage: action.payload.previous_page,
        };
      })

      .addCase(fetchSearchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // ===========================
      // Product Details
      // ===========================

      // ===========================
      // Category Products
      // ===========================

      .addCase(fetchCategoryProducts.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchCategoryProducts.fulfilled, (state, action) => {
        state.loading = false;

        state.categoryProducts =
          action.payload.products.data;
      })

      .addCase(fetchCategoryProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {
  setSearchKeyword,
  clearSearch,
} = productsSlice.actions;

export default productsSlice.reducer;