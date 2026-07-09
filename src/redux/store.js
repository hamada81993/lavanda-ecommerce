import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../redux/products/productsSlice";
import checkoutReducer from "../redux/checkout/checkoutSlice";

import { apiSlice } from "../redux/api/apiSlice";

export const store = configureStore({
  reducer: {
    
    products: productsReducer,
    checkout: checkoutReducer,



    // RTK Query
    [apiSlice.reducerPath]: apiSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});