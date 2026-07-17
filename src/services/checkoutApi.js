import axios from "axios";
import api from "./axios";

const API_KEY = "b8f4a0ba4537ad6c3ee41ec0a43549d1";

const checkoutApi = {
  checkout(data) {
    return api.post("/checkout", data);
  },

  shippingCharge(data) {
    return api.post("/shipping-charge", data);
  },

  updatePayment(data) {
    return api.post("/update-payment", data);
  },

paymentGateways() {
  return axios.get("/api/tenant/v1/payment-gateway-list", {
    params: {
      x_api_key: API_KEY,
    },
  });
}
};

export default checkoutApi;