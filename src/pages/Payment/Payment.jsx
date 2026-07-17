// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";

// import CheckoutLayout from "../../components/checkout/CheckoutLayout";
// import OrderSummary from "../../components/checkout/OrderSummary";

// import {
//   savePayment,
// } from "../../redux/checkout/checkoutSlice";
// import { useGetPaymentGatewaysQuery,useCheckoutMutation, useUpdatePaymentMutation } from "../../redux/checkout/checkoutApi";
// import { useGetCartQuery } from "../../redux/cart/cartApi";
// import { toast } from "react-toastify";

// ;

// export default function Payment() {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
// const [checkout] =useCheckoutMutation();
//  const { data: cartData } = useGetCartQuery();
 
//  const items = cartData?.items ?? [];
//  const subtotal = Number(cartData?.subtotal ?? 0);
//  const total = Number(cartData?.total ?? 0);
//   const { coupon } =
// useSelector(state => state.checkout);
// // const [updatePayment] =
// //   useUpdatePaymentMutation();
//   const {
//     shipping,
   
//     selectedGateway,
//      discountedPrice,
//   shippingCost,
//   tax
//   } = useSelector((state) => state.checkout);


// const { data , isLoading } = useGetPaymentGatewaysQuery();

// const paymentGateways = data?.data || [];
//   const handleSelect = (gateway) => {
//     dispatch(savePayment(gateway));
//   };

// const handleNext = async () => {
//   try {
//     const res = await checkout(
//       body
//     ).unwrap();
// dispatch(
//     saveOrder(res.order_details)
// );
//     console.log(res);

//     navigate("/review", {
//       state: {
//         order: res.order_details,
//       },
//     });

//   } catch (err) {
//     toast.error(
//       err?.data?.message ??
//       "Checkout Failed"
//     );
//   }
// };
// const body = {
//   name: shipping.full_name,
//   email: shipping.email,
//   phone: shipping.phone,

//   country: 1,
//   state: 1,
//   city: 1, 

//   address: shipping.address,

//   payment_gateway: selectedGateway,

//   used_coupon: coupon ?? null,

//   shipping_method: shipping.shipping_method,

//   message: null,

//   cart: JSON.stringify(
//     items.map((item) => ({
//       id: item.id,
//       name: item.name,
//       price: item.price,
//       qty: item.qty,
//       options: {
//         variant_id: item.options.variant_id,
//         image: item.options.image,
//       },
//     }))
//   ),
// };
// console.log(body);
//   return (
//     <CheckoutLayout
//       step={2}
//       summary={
//        <OrderSummary
//     items={items}
//     subtotal={subtotal}
//     shipping={shippingCost}
//     tax={tax}
//     discount={
//         discountedPrice
//             ? total - discountedPrice
//             : 0
//     }
//     total={
//         discountedPrice ??
//         total + shippingCost + tax
//     }
// />
//       }
//     >
//       <div className="bg-white rounded-2xl border border-[#ECE8F3] p-8">

//         <h2 className="text-2xl font-bold mb-6">
//           Payment Method
//         </h2>

//         <div className="space-y-4">

//           {paymentGateways
//             ?.filter((item) => item.status === 1)
//             .map((item) => (
//               <label
//                 key={item.name}
//                 className={`flex items-center justify-between p-5 rounded-xl border cursor-pointer transition
//                 ${
//                   selectedGateway === item.name
//                     ? "border-primary bg-[#F7F4FF]"
//                     : "border-[#ECE8F3]"
//                 }`}
//               >
//                 <div className="flex items-center gap-4">

//                   <input
//                     type="radio"
//                     checked={
//                       selectedGateway === item.name
//                     }
//                     onChange={() =>
//                       handleSelect(item.name)
//                     }
//                   />

//                   <img
//                     src={item.image}
//                     alt={item.name}
//                     className="w-12 h-12 object-contain"
//                   />

//                   <div>

//                     <h3 className="font-semibold capitalize">
//                       {item.name.replaceAll("_", " ")}
//                     </h3>

//                     <p className="text-sm text-gray-500">
//                       {item.description}
//                     </p>

//                   </div>

//                 </div>

//               </label>
//             ))}

//         </div>

//         <button
//           onClick={handleNext}
//           disabled={!selectedGateway}
//           className="mt-8 w-full h-14 rounded-xl bg-primary text-white font-semibold disabled:opacity-50"
//         >
//           Continue To Review →
//         </button>

//       </div>
//     </CheckoutLayout>
//   );
// }

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import CheckoutLayout from "../../components/checkout/CheckoutLayout";
import OrderSummary from "../../components/checkout/OrderSummary";

import {
  savePayment,
  saveOrder,
} from "../../redux/checkout/checkoutSlice";
import {
  useGetPaymentGatewaysQuery,
  useCheckoutMutation,
} from "../../redux/checkout/checkoutApi";
import { useGetCartQuery } from "../../redux/cart/cartApi";
import { toast } from "react-toastify";

export default function Payment() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [checkout, { isLoading: isCheckingOut }] = useCheckoutMutation();
  const { data: cartData } = useGetCartQuery();

  const items = cartData?.items ?? [];
  const subtotal = Number(cartData?.subtotal ?? 0);
  const total = Number(cartData?.total ?? 0);

  const { coupon, shipping, selectedGateway, discountedPrice, shippingCost, tax } =
    useSelector((state) => state.checkout);

  const { data, isLoading } = useGetPaymentGatewaysQuery();
  const paymentGateways = data?.data || [];

  const handleSelect = (gateway) => {
    dispatch(savePayment(gateway));
  };

  const finalTotal =
    Number(discountedPrice ?? total) + Number(shippingCost) + Number(tax);

  const handlePlaceOrder = async () => {
    if (!selectedGateway) {
      toast.error("Please select a payment method");
      return;
    }

    const body = {
      name: shipping?.full_name || "",
      email: shipping?.email || "",
      phone: shipping?.phone || "",
      country: shipping?.country || 1,
      state: shipping?.state || 1,
      city: shipping?.city || 1,
      address: shipping?.address || "",
      payment_gateway: selectedGateway,
      used_coupon: coupon ?? null,
      shipping_method: shipping?.shipping_method || "standard",
      message: null,
      cart: JSON.stringify(
        items.map((item) => ({
          id: item.id,
          name: item.name || item.options?.name,
          price: item.price,
          qty: item.qty,
          options: {
            variant_id: item.options?.variant_id,
            image: item.options?.image,
          },
        }))
      ),
    };

    try {
      const res = await checkout(body).unwrap();
      dispatch(saveOrder(res.order_details));
      toast.success("Order placed successfully!");
      navigate("/profile-layout/orders");
    } catch (err) {
      toast.error(err?.data?.message ?? "Checkout Failed. Please try again.");
    }
  };

  return (
    <CheckoutLayout
      step={2}
      summary={
        <OrderSummary
          items={items}
          subtotal={subtotal}
          shipping={shippingCost}
          tax={tax}
          discount={discountedPrice ? total - discountedPrice : 0}
          total={finalTotal}
        />
      }
    >
      <div className="bg-white rounded-2xl border border-[#ECE8F3] p-8">
        <h2 className="text-2xl font-bold mb-2 text-[#302245]">Payment Method</h2>
        <p className="text-sm text-gray-400 mb-6">Select how you'd like to pay</p>

        {isLoading ? (
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-20 bg-gray-100 animate-pulse rounded-xl" />
            ))}
          </div>
        ) : paymentGateways.filter((g) => g.status === 1).length === 0 ? (
          <div className="text-center py-10 text-gray-400">
            No payment methods available.
          </div>
        ) : (
          <div className="space-y-4">
            {paymentGateways
              ?.filter((item) => item.status === 1)
              .map((item) => (
                <label
                  key={item.name}
                  className={`flex items-center justify-between p-5 rounded-xl border cursor-pointer transition ${
                    selectedGateway === item.name
                      ? "border-[#8A77A9] bg-[#F7F4FF] shadow-sm"
                      : "border-[#ECE8F3] hover:border-[#8A77A9]/50"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <input
                      type="radio"
                      checked={selectedGateway === item.name}
                      onChange={() => handleSelect(item.name)}
                      className="accent-[#8A77A9]"
                    />

                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 object-contain"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-lg bg-purple-50 flex items-center justify-center text-[#8A77A9] font-bold text-xs">
                        PAY
                      </div>
                    )}

                    <div>
                      <h3 className="font-semibold capitalize text-[#302245]">
                        {item.name.replaceAll("_", " ")}
                      </h3>
                      {item.description && (
                        <p className="text-sm text-gray-500">{item.description}</p>
                      )}
                    </div>
                  </div>

                  {selectedGateway === item.name && (
                    <span className="text-[#8A77A9] font-bold text-xs">✓ Selected</span>
                  )}
                </label>
              ))}
          </div>
        )}

        <button
          onClick={handlePlaceOrder}
          disabled={!selectedGateway || isCheckingOut}
          className="mt-8 w-full h-14 rounded-xl bg-[#8A77A9] hover:bg-[#302245] disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-base transition-all duration-300 shadow-lg shadow-purple-100"
        >
          {isCheckingOut ? "Placing Order..." : "Place Order →"}
        </button>
      </div>
    </CheckoutLayout>
  );
}