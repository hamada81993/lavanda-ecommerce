// services/cartApi.js

import api from "./axios";

export const getCart = async () => {
  const response = await api.get("/user/cart");
  return response.data;
};

export const addToCart = async ({
  productId,
  quantity = 1,
}) => {
  const response = await api.post("/user/cart/add", {
    product_id: productId,
    quantity,
  });

  return response.data;
};

export const removeFromCart = async (rowId) => {
  const response = await api.delete(
    "/user/cart/remove",
    {
      data: {
        row_id: rowId,
      },
    }
  );

  return response.data;
};