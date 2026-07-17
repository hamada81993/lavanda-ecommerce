// import { useLocation, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect, useState } from "react";
// import { saveShipping } from "../../redux/checkout/checkoutSlice";
// import CheckoutLayout from "../../components/checkout/CheckoutLayout";
// import OrderSummary from "../../components/checkout/OrderSummary";
// import { useGetShippingChargeMutation } from "../../redux/checkout/checkoutApi";
// import { useGetCartQuery } from "../../redux/cart/cartApi";

// export default function Shipping() {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

// const { data: cartData } = useGetCartQuery();

// const items = cartData?.items ?? [];
// const subtotal = Number(cartData?.subtotal ?? 0);
// const total = Number(cartData?.total ?? 0);
// const [getShippingCharge] =
//   useGetShippingChargeMutation();
// const [shippingCost, setShippingCost] =
//   useState(0);

// const [tax, setTax] =
//   useState(0);

// const [shippingOptions, setShippingOptions] =
//   useState([]);

//   const [formData, setFormData] = useState({
//     full_name: "",
//     phone: "",
//     email: "",
//     address: "",
//     building: "",
//     floor: "",
//     postal_code: "",
//     city: "",
//     shipping_method: "standard",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

// const shipping = Number(shippingCost);
// const location = useLocation();

// const { discountedPrice } =
// useSelector(state => state.checkout);

// const finalTotal =
//   Number(discountedPrice ?? total) +
//   Number(shippingCost) +
//   Number(tax);




// const handleNext = () => {
// dispatch(
//     saveShipping({
       
//           ...formData,
//     shippingCost,
//     tax,
//     })
// );  navigate("/payment");
// };


// useEffect(() => {
//   if (!items.length) return;

//   const loadShipping = async () => {
//     try {
//       const res = await getShippingCharge({
//         country: 1,
//         state: 1,
//         city: 1,
//         product_ids: items.map(
//           (item) => item.options.product_id
//         ),
//       }).unwrap();

//       setShippingOptions(
//         res.shipping_options || []
//       );

//       setTax(
//         res.product_tax_info?.reduce(
//           (sum, item) => sum + Number(item.tax_amount),
//           0
//         ) || 0
//       );

//       setShippingCost(
//         Number(res.default_shipping_options?.cost) || 0
//       );
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   loadShipping();
// }, [items, getShippingCharge]);
//   return (
   
// <CheckoutLayout

// step={1}

// summary={
// <OrderSummary
//   items={items}
//   subtotal={subtotal}
//   shipping={shippingCost}
//   tax={tax}
//   discount={
//     discountedPrice
//       ? total - discountedPrice
//       : 0
//   }
//   total={finalTotal}
// />
// }

// >

//           <div className="bg-white rounded-2xl shadow-sm  p-8">

//             <div className="grid md:grid-cols-2 gap-5">

//               <div>

//                 <label className="text-sm font-medium">
//                   Full Name
//                 </label>

//                 <input
//                   type="text"
//                   name="full_name"
//                   onChange={handleChange}
//                   className="mt-2 w-full h-12 rounded-lg border border-[#E6E2E9] bg-[#FAF9FB] px-4 outline-none focus:border-primary "
//                 />

//               </div>
//               <div>

//                 <label className="text-sm font-medium">
//                   Email
//                 </label>

//                 <input
//                   type="text"
//                   name="email"
//                   onChange={handleChange}
//                   className="mt-2 w-full h-12 rounded-lg border border-[#E6E2E9] bg-[#FAF9FB] px-4 outline-none focus:border-primary "
//                 />

//               </div>

//               <div>

//                 <label className="text-sm font-medium">
//                   Phone
//                 </label>

//                 <input
//                   type="text"
//                   name="phone"
//                   onChange={handleChange}
//                   className="mt-2 w-full h-12 rounded-lg border border-[#E6E2E9] bg-[#FAF9FB] px-4 outline-none focus:border-primary"
//                 />

//               </div>

//             </div>

//             <div className="mt-5">

//               <label className="text-sm font-medium">
//                 Street Address
//               </label>

//               <input
//                 type="text"
//                 name="address"
//                 onChange={handleChange}
//                 className="mt-2 w-full h-12 rounded-lg border border-[#E6E2E9] bg-[#FAF9FB] px-4 outline-none focus:border-primary"
//               />

//             </div>

//             <div className="grid md:grid-cols-2 gap-5 mt-5">

//               <div>

//                 <label className="text-sm font-medium">
//                   Building (Optional)
//                 </label>

//                 <input
//                   type="text"
//                   name="building"
//                   onChange={handleChange}
//                   className="mt-2 w-full h-12 rounded-lg border border-[#E6E2E9] bg-[#FAF9FB] px-4 outline-none"
//                 />

//               </div>

//               <div>

//                 <label className="text-sm font-medium">
//                   Floor (Optional)
//                 </label>

//                 <input
//                   type="text"
//                   name="floor"
//                   onChange={handleChange}
//                   className="mt-2 w-full h-12 rounded-lg border border-[#E6E2E9] bg-[#FAF9FB] px-4 outline-none"
//                 />

//               </div>

//             </div>

//             <div className="grid md:grid-cols-2 gap-5 mt-5">

//               <div>

//                 <label className="text-sm font-medium">
//                   Postal Code
//                 </label>

//                 <input
//                   type="text"
//                   name="postal_code"
//                   onChange={handleChange}
//                   className="mt-2 w-full h-12 rounded-lg border border-[#E6E2E9] bg-[#FAF9FB] px-4 outline-none"
//                 />

//               </div>

//               <div>

//                 <label className="text-sm font-medium">
//                   City
//                 </label>

//                 <input
//                   type="text"
//                   name="city"
//                   onChange={handleChange}
//                   className="mt-2 w-full h-12 rounded-lg border border-[#E6E2E9] bg-[#FAF9FB] px-4 outline-none"
//                 />

//               </div>

//             </div>

//             {/* SHIPPING */}

//             <h3 className="font-semibold mt-8 mb-4">
//               Shipping Method
//             </h3>

//             <div className="space-y-3">

//               <label
//                 className={`flex justify-between items-center border border-[#E6E2E9] bg-[#FAF9FB] rounded-xl p-4 cursor-pointer ${
//                   formData.shipping_method === "standard"
//                     ? "border-primary bg-[#F7F4FF]"
//                     : ""
//                 }`}
//               >
//                 <div className="flex gap-3">

//                   <input
//                     type="radio"
//                     name="shipping_method"
//                     value="standard"
//                     checked={
//                       formData.shipping_method === "standard"
//                     }
//                     onChange={handleChange}
//                   />

//                   <span>
//                     Standard Shipping (3-5 days)
//                   </span>

//                 </div>

//                 <span className="text-green-600 font-semibold">
//                   FREE
//                 </span>

//               </label>

//               <label
//                 className={`flex justify-between items-center border border-[#E6E2E9] bg-[#FAF9FB] rounded-xl p-4 cursor-pointer ${
//                   formData.shipping_method === "express"
//                     ? "border-primary bg-[#F7F4FF]"
//                     : ""
//                 }`}
//               >
//                 <div className="flex gap-3">

//                   <input
//                     type="radio"
//                     name="shipping_method"
//                     value="express"
//                     checked={
//                       formData.shipping_method === "express"
//                     }
//                     onChange={handleChange}
//                   />

//                   <span>
//                     Express Shipping (1-2 days)
//                   </span>

//                 </div>

//                 <span className="font-semibold">
//                   $25
//                 </span>

//               </label>

//             </div>

//             <button
//               onClick={handleNext}
//               className="mt-8 w-full h-14 rounded-xl bg-primary text-white font-semibold "
//             >
//               Continue To Payment →
//             </button>
//           </div>

//          </CheckoutLayout>

       

   

 
//   );
// }


import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { saveShipping } from "../../redux/checkout/checkoutSlice";
import CheckoutLayout from "../../components/checkout/CheckoutLayout";
import OrderSummary from "../../components/checkout/OrderSummary";
import { useGetShippingChargeMutation } from "../../redux/checkout/checkoutApi";
import { useGetCartQuery } from "../../redux/cart/cartApi";
import { useGetProfileQuery } from "../../redux/profile/profileApi";
import { setCoupon, clearCoupon } from "../../redux/checkout/checkoutSlice";
import { useApplyCouponMutation } from "../../redux/coupon/couponApi";
import { toast } from "react-toastify";

export default function Shipping() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { data: cartData } = useGetCartQuery();
  const { data: profileData } = useGetProfileQuery();

  const items = cartData?.items ?? [];
  const subtotal = Number(cartData?.subtotal ?? 0);
  const total = Number(cartData?.total ?? 0);

  const [getShippingCharge] = useGetShippingChargeMutation();
  const [applyCoupon, { isLoading: applyingCoupon }] = useApplyCouponMutation();

  const [shippingCost, setShippingCost] = useState(0);
  const [tax, setTax] = useState(0);
  const [shippingOptions, setShippingOptions] = useState([]);
  const [couponCode, setCouponCode] = useState("");

  const { coupon, discountedPrice } = useSelector((state) => state.checkout);

  const profile = profileData?.user_details;

  const [formData, setFormData] = useState({
    full_name: "",
    phone: "",
    email: "",
    address: "",
    building: "",
    floor: "",
    postal_code: "",
    city: "",
    country: 1,
    state: 1,
    shipping_method: "standard",
  });

  // Pre-fill form with profile data
  useEffect(() => {
    if (profile) {
      setFormData((prev) => ({
        ...prev,
        full_name: profile.name || "",
        email: profile.email || "",
        phone: profile.delivery_address?.phone || "",
        address: profile.delivery_address?.address || "",
      }));
    }
  }, [profile]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const finalTotal =
    Number(discountedPrice ?? total) + Number(shippingCost) + Number(tax);

  const handleNext = () => {
    if (!formData.full_name || !formData.email || !formData.phone || !formData.address) {
      toast.error("Please fill in all required fields");
      return;
    }
    dispatch(
      saveShipping({
        ...formData,
        shippingCost,
        tax,
      })
    );
    navigate("/payment");
  };

  const handleApplyCoupon = async () => {
    if (!couponCode.trim()) return;
    try {
      const res = await applyCoupon({ coupon_code: couponCode }).unwrap();
      dispatch(
        setCoupon({
          coupon: couponCode,
          discountedPrice: res.discounted_price ?? total - (res.discount_amount ?? 0),
        })
      );
      toast.success(res.message || "Coupon applied!");
    } catch (err) {
      toast.error(err?.data?.message || "Invalid coupon code");
    }
  };

  const handleRemoveCoupon = () => {
    dispatch(clearCoupon());
    setCouponCode("");
  };

  useEffect(() => {
    if (!items.length) return;

    const loadShipping = async () => {
      try {
        const res = await getShippingCharge({
          country: 1,
          state: 1,
          city: 1,
          product_ids: items.map((item) => item.options?.product_id).filter(Boolean),
        }).unwrap();

        setShippingOptions(res.shipping_options || []);
        setTax(
          res.product_tax_info?.reduce(
            (sum, item) => sum + Number(item.tax_amount),
            0
          ) || 0
        );
        setShippingCost(Number(res.default_shipping_options?.cost) || 0);
      } catch (err) {
        console.log("Shipping charge error:", err);
      }
    };

    loadShipping();
  }, [items, getShippingCharge]);

  const inputClass =
    "mt-2 w-full h-12 rounded-xl border border-[#E6E2E9] bg-[#FAF9FB] px-4 outline-none focus:border-[#8A77A9] transition text-sm";

  return (
    <CheckoutLayout
      step={1}
      summary={
        <div className="space-y-4">
          <OrderSummary
            items={items}
            subtotal={subtotal}
            shipping={shippingCost}
            tax={tax}
            discount={discountedPrice ? total - discountedPrice : 0}
            total={finalTotal}
          />

          {/* Coupon Section */}
          <div className="bg-white rounded-2xl border border-[#ECE8F3] p-4">
            <h3 className="font-semibold text-sm text-[#302245] mb-3">Promo Code</h3>
            {coupon ? (
              <div className="flex items-center justify-between bg-green-50 border border-green-200 rounded-xl px-4 py-3">
                <span className="text-green-700 font-bold text-sm">✓ "{coupon}" applied</span>
                <button
                  onClick={handleRemoveCoupon}
                  className="text-xs text-red-400 hover:text-red-600 font-bold"
                >
                  Remove
                </button>
              </div>
            ) : (
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter code"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="flex-1 h-10 px-3 border border-[#E6E2E9] rounded-xl text-sm focus:outline-none focus:border-[#8A77A9]"
                />
                <button
                  onClick={handleApplyCoupon}
                  disabled={applyingCoupon}
                  className="px-4 h-10 bg-[#8A77A9] text-white text-sm font-bold rounded-xl hover:bg-[#302245] transition disabled:opacity-50"
                >
                  Apply
                </button>
              </div>
            )}
          </div>
        </div>
      }
    >
      <div className="bg-white rounded-2xl shadow-sm p-8">
        <h2 className="text-2xl font-bold text-[#302245] mb-1">Shipping Details</h2>
        <p className="text-sm text-gray-400 mb-6">
          {profile ? "We've pre-filled your info. Please verify." : "Fill in your delivery address."}
        </p>

        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className="text-sm font-medium text-gray-700">
              Full Name <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
              className={inputClass}
              placeholder="Your full name"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Email <span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={inputClass}
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Phone <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={inputClass}
              placeholder="01xxxxxxxxx"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className={inputClass}
              placeholder="Cairo"
            />
          </div>
        </div>

        <div className="mt-5">
          <label className="text-sm font-medium text-gray-700">
            Street Address <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className={inputClass}
            placeholder="Street name, area..."
          />
        </div>

        <div className="grid md:grid-cols-3 gap-5 mt-5">
          <div>
            <label className="text-sm font-medium text-gray-700">Building (Optional)</label>
            <input
              type="text"
              name="building"
              value={formData.building}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Floor (Optional)</label>
            <input
              type="text"
              name="floor"
              value={formData.floor}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Postal Code</label>
            <input
              type="text"
              name="postal_code"
              value={formData.postal_code}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
        </div>

        {/* Shipping Method */}
        <h3 className="font-semibold mt-8 mb-4 text-[#302245]">Shipping Method</h3>

        <div className="space-y-3">
          {shippingOptions.length > 0 ? (
            shippingOptions.map((option) => (
              <label
                key={option.name}
                className={`flex justify-between items-center border rounded-xl p-4 cursor-pointer transition ${
                  formData.shipping_method === option.name
                    ? "border-[#8A77A9] bg-[#F7F4FF]"
                    : "border-[#E6E2E9] bg-[#FAF9FB]"
                }`}
              >
                <div className="flex gap-3 items-center">
                  <input
                    type="radio"
                    name="shipping_method"
                    value={option.name}
                    checked={formData.shipping_method === option.name}
                    onChange={handleChange}
                    className="accent-[#8A77A9]"
                  />
                  <div>
                    <span className="font-medium text-sm">{option.title}</span>
                    {option.duration && (
                      <p className="text-xs text-gray-400">{option.duration}</p>
                    )}
                  </div>
                </div>
                <span className="font-semibold text-[#8A77A9]">
                  {Number(option.cost) === 0 ? "FREE" : `EGP ${option.cost}`}
                </span>
              </label>
            ))
          ) : (
            <>
              <label
                className={`flex justify-between items-center border rounded-xl p-4 cursor-pointer transition ${
                  formData.shipping_method === "standard"
                    ? "border-[#8A77A9] bg-[#F7F4FF]"
                    : "border-[#E6E2E9] bg-[#FAF9FB]"
                }`}
              >
                <div className="flex gap-3">
                  <input
                    type="radio"
                    name="shipping_method"
                    value="standard"
                    checked={formData.shipping_method === "standard"}
                    onChange={handleChange}
                    className="accent-[#8A77A9]"
                  />
                  <div>
                    <span className="font-medium text-sm">Standard Shipping</span>
                    <p className="text-xs text-gray-400">3–5 business days</p>
                  </div>
                </div>
                <span className="text-green-600 font-semibold text-sm">FREE</span>
              </label>

              <label
                className={`flex justify-between items-center border rounded-xl p-4 cursor-pointer transition ${
                  formData.shipping_method === "express"
                    ? "border-[#8A77A9] bg-[#F7F4FF]"
                    : "border-[#E6E2E9] bg-[#FAF9FB]"
                }`}
              >
                <div className="flex gap-3">
                  <input
                    type="radio"
                    name="shipping_method"
                    value="express"
                    checked={formData.shipping_method === "express"}
                    onChange={handleChange}
                    className="accent-[#8A77A9]"
                  />
                  <div>
                    <span className="font-medium text-sm">Express Shipping</span>
                    <p className="text-xs text-gray-400">1–2 business days</p>
                  </div>
                </div>
                <span className="font-semibold text-sm">EGP 50</span>
              </label>
            </>
          )}
        </div>

        <button
          onClick={handleNext}
          className="mt-8 w-full h-14 rounded-xl bg-[#8A77A9] hover:bg-[#302245] text-white font-bold transition-all duration-300 shadow-lg shadow-purple-100 text-base"
        >
          Continue To Payment →
        </button>
      </div>
    </CheckoutLayout>
  );
}
  
          