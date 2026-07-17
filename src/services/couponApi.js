import api from "./axios";

export const applyCoupon = async ({
  coupon,
  total_amount,
  ids,
}) => {
  const response = await api.post("/coupon", {
    coupon,
    total_amount,
    ids,
  });

  return response.data;
};