import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  getRecentProducts,
  searchProducts,
} from "../../services/productApi";
import {
  getCategoryProducts,
} from "../../services/categoryApi";

import {
  getProductDetails,
//   getRelatedProducts,
} from "../../services/productApi";



export const fetchSearchProducts =
createAsyncThunk(
  "products/fetchSearchProducts",

  async ({
    keyword,
    page = 1,
  }) => {

    return await searchProducts(
      keyword,
      page
    );
  }
);

// export const fetchRelatedProducts =
// createAsyncThunk(

// "products/fetchRelatedProducts",

// async(id)=>{

// return await getRelatedProducts(id);

// }

// );


export const fetchCategoryProducts =
createAsyncThunk(

"products/fetchCategoryProducts",

async(id)=>{

return await getCategoryProducts(id);

}

);