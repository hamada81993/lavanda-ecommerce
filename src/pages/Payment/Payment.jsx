import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import CheckoutLayout from "../../components/checkout/CheckoutLayout";
import OrderSummary from "../../components/checkout/OrderSummary";

import {
  savePayment,
} from "../../redux/checkout/checkoutSlice";
import { useGetPaymentGatewaysQuery,useCheckoutMutation, useUpdatePaymentMutation } from "../../redux/checkout/checkoutApi";
import { useGetCartQuery } from "../../redux/cart/cartApi";
import { toast } from "react-toastify";

;

export default function Payment() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
const [checkout] =useCheckoutMutation();
 const { data: cartData } = useGetCartQuery();
 
 const items = cartData?.items ?? [];
 const subtotal = Number(cartData?.subtotal ?? 0);
 const total = Number(cartData?.total ?? 0);
  const { coupon } =
useSelector(state => state.checkout);
// const [updatePayment] =
//   useUpdatePaymentMutation();
  const {
    shipping,
   
    selectedGateway,
     discountedPrice,
  shippingCost,
  tax
  } = useSelector((state) => state.checkout);


const { data , isLoading } = useGetPaymentGatewaysQuery();

const paymentGateways = data?.data || [];
  const handleSelect = (gateway) => {
    dispatch(savePayment(gateway));
  };

const handleNext = async () => {
  try {
    const res = await checkout(
      body
    ).unwrap();
dispatch(
    saveOrder(res.order_details)
);
    console.log(res);

    navigate("/review", {
      state: {
        order: res.order_details,
      },
    });

  } catch (err) {
    toast.error(
      err?.data?.message ??
      "Checkout Failed"
    );
  }
};
const body = {
  name: shipping.full_name,
  email: shipping.email,
  phone: shipping.phone,

  country: 1,
  state: 1,
  city: 1, 

  address: shipping.address,

  payment_gateway: selectedGateway,

  used_coupon: coupon ?? null,

  shipping_method: shipping.shipping_method,

  message: null,

  cart: JSON.stringify(
    items.map((item) => ({
      id: item.id,
      name: item.name,
      price: item.price,
      qty: item.qty,
      options: {
        variant_id: item.options.variant_id,
        image: item.options.image,
      },
    }))
  ),
};
console.log(body);
  return (
    <CheckoutLayout
      step={2}
      summary={
       <OrderSummary
    items={items}
    subtotal={subtotal}
    shipping={shippingCost}
    tax={tax}
    discount={
        discountedPrice
            ? total - discountedPrice
            : 0
    }
    total={
        discountedPrice ??
        total + shippingCost + tax
    }
/>
      }
    >
      <div className="bg-white rounded-2xl border border-[#ECE8F3] p-8">

        <h2 className="text-2xl font-bold mb-6">
          Payment Method
        </h2>

        <div className="space-y-4">

          {paymentGateways
            ?.filter((item) => item.status === 1)
            .map((item) => (
              <label
                key={item.name}
                className={`flex items-center justify-between p-5 rounded-xl border cursor-pointer transition
                ${
                  selectedGateway === item.name
                    ? "border-primary bg-[#F7F4FF]"
                    : "border-[#ECE8F3]"
                }`}
              >
                <div className="flex items-center gap-4">

                  <input
                    type="radio"
                    checked={
                      selectedGateway === item.name
                    }
                    onChange={() =>
                      handleSelect(item.name)
                    }
                  />

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 object-contain"
                  />

                  <div>

                    <h3 className="font-semibold capitalize">
                      {item.name.replaceAll("_", " ")}
                    </h3>

                    <p className="text-sm text-gray-500">
                      {item.description}
                    </p>

                  </div>

                </div>

              </label>
            ))}

        </div>

        <button
          onClick={handleNext}
          disabled={!selectedGateway}
          className="mt-8 w-full h-14 rounded-xl bg-primary text-white font-semibold disabled:opacity-50"
        >
          Continue To Review →
        </button>

      </div>
    </CheckoutLayout>
  );
}