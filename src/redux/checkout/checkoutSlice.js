import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shipping: {
    full_name: "",
  phone: "",
  email: "",
  address: "",
  country: 1,
state: 1,
city: 1,
  shipping_method: "",
  shippingCost: 0,
  tax: 0
  },

  payment: {
    payment_method: "",
    card_name: "",
    card_number: "",
    expiry_date: "",
    cvv: "",
  },


  review: {},

  shippingCost: 0,
  tax: 0,


  selectedGateway: "",

  coupon: null,
  discountedPrice: null,

  order: null,

  loading: false,
  error: null,
};

const checkoutSlice = createSlice({
  name: "checkout",

  initialState,

  reducers: {

  saveShipping(state, action) {
    state.shipping = action.payload;
  },

  savePayment(state, action) {
    state.selectedGateway = action.payload;
  },

  setCoupon(state, action) {
    state.coupon = action.payload.coupon;
    state.discountedPrice =
      action.payload.discountedPrice;
  },

  clearCoupon(state) {
    state.coupon = null;
    state.discountedPrice = null;
  },

  clearCheckout(state) {
    state.shipping = {};
    state.payment = {};
    state.shippingCost = 0;
    state.tax = 0;

    state.coupon = null;
    state.discountedPrice = null;

    state.order = null;
  },


    setPaymentGateway(state, action) {
      state.paymentGateway = action.payload;
    },


    clearCheckout(state) {
      state.shipping = {};
      state.paymentGateway = "cash_on_delivery";
      state.shippingCost = 0;
      state.tax = 0;
      state.orderId = null;
      state.orderDetails = null;
    },
savePayment(state, action) {
  state.selectedGateway = action.payload;
},
saveOrder(state, action) {
  state.order = action.payload;
  
}
  },


});

export const {
  saveShipping,
  setPaymentGateway,
  setCoupon,
  clearCoupon,
  clearCheckout,
  savePayment,
  saveOrder,
} = checkoutSlice.actions;


export default checkoutSlice.reducer;