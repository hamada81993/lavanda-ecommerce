import api from "./axios";

export const getWishlist = async () => {
  const { data } = await api.get("/user/wishlist");
  return data;
};

export const toggleWishlist = async (productId) => {
  const { data } = await api.post("/user/wishlist/toggle", {
    product_id: productId,
  });

  return data;
};