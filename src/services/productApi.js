// services/productApi.js

import api from "./axios";

export const getRecentProducts = async (
  limit = 10
) => {
  const response = await api.get(
    `/recent/product/${limit}`
  );

  return response.data.data;
};

export const getProductDetails = async (id) => {
  const response = await api.get(`/product/${id}`);

  return response.data;
};
// get product details by id
export const getProductById = async (id) => {
  const response = await api.get(`/product/${id}`);
  return response.data;
};

// services/productApi.js

export const searchProducts = async (
  keyword,
  page = 1,
  signal
) => {
  const response = await api.get(
    "/product",
    {
      params: {
        search: keyword,
        page,
      },
      signal,
    }
  );

  return response.data;
};