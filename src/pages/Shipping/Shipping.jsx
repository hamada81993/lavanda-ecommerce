import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { saveShipping } from "../../redux/checkout/checkoutSlice";
import CheckoutLayout from "../../components/checkout/CheckoutLayout";
import OrderSummary from "../../components/checkout/OrderSummary";
import { useGetShippingChargeMutation } from "../../redux/checkout/checkoutApi";
import { useGetCartQuery } from "../../redux/cart/cartApi";

export default function Shipping() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

const { data: cartData } = useGetCartQuery();

const items = cartData?.items ?? [];
const subtotal = Number(cartData?.subtotal ?? 0);
const total = Number(cartData?.total ?? 0);
const [getShippingCharge] =
  useGetShippingChargeMutation();
const [shippingCost, setShippingCost] =
  useState(0);

const [tax, setTax] =
  useState(0);

const [shippingOptions, setShippingOptions] =
  useState([]);

  const [formData, setFormData] = useState({
    full_name: "",
    phone: "",
    email: "",
    address: "",
    building: "",
    floor: "",
    postal_code: "",
    city: "",
    shipping_method: "standard",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const shipping = Number(shippingCost);
const location = useLocation();

const { discountedPrice } =
useSelector(state => state.checkout);

const finalTotal =
  Number(discountedPrice ?? total) +
  Number(shippingCost) +
  Number(tax);




const handleNext = () => {
dispatch(
    saveShipping({
       
          ...formData,
    shippingCost,
    tax,
    })
);  navigate("/payment");
};


useEffect(() => {
  if (!items.length) return;

  const loadShipping = async () => {
    try {
      const res = await getShippingCharge({
        country: 1,
        state: 1,
        city: 1,
        product_ids: items.map(
          (item) => item.options.product_id
        ),
      }).unwrap();

      setShippingOptions(
        res.shipping_options || []
      );

      setTax(
        res.product_tax_info?.reduce(
          (sum, item) => sum + Number(item.tax_amount),
          0
        ) || 0
      );

      setShippingCost(
        Number(res.default_shipping_options?.cost) || 0
      );
    } catch (err) {
      console.log(err);
    }
  };

  loadShipping();
}, [items, getShippingCharge]);
  return (
   
<CheckoutLayout

step={1}

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
  total={finalTotal}
/>
}

>

          <div className="bg-white rounded-2xl shadow-sm  p-8">

            <div className="grid md:grid-cols-2 gap-5">

              <div>

                <label className="text-sm font-medium">
                  Full Name
                </label>

                <input
                  type="text"
                  name="full_name"
                  onChange={handleChange}
                  className="mt-2 w-full h-12 rounded-lg border border-[#E6E2E9] bg-[#FAF9FB] px-4 outline-none focus:border-primary "
                />

              </div>
              <div>

                <label className="text-sm font-medium">
                  Email
                </label>

                <input
                  type="text"
                  name="email"
                  onChange={handleChange}
                  className="mt-2 w-full h-12 rounded-lg border border-[#E6E2E9] bg-[#FAF9FB] px-4 outline-none focus:border-primary "
                />

              </div>

              <div>

                <label className="text-sm font-medium">
                  Phone
                </label>

                <input
                  type="text"
                  name="phone"
                  onChange={handleChange}
                  className="mt-2 w-full h-12 rounded-lg border border-[#E6E2E9] bg-[#FAF9FB] px-4 outline-none focus:border-primary"
                />

              </div>

            </div>

            <div className="mt-5">

              <label className="text-sm font-medium">
                Street Address
              </label>

              <input
                type="text"
                name="address"
                onChange={handleChange}
                className="mt-2 w-full h-12 rounded-lg border border-[#E6E2E9] bg-[#FAF9FB] px-4 outline-none focus:border-primary"
              />

            </div>

            <div className="grid md:grid-cols-2 gap-5 mt-5">

              <div>

                <label className="text-sm font-medium">
                  Building (Optional)
                </label>

                <input
                  type="text"
                  name="building"
                  onChange={handleChange}
                  className="mt-2 w-full h-12 rounded-lg border border-[#E6E2E9] bg-[#FAF9FB] px-4 outline-none"
                />

              </div>

              <div>

                <label className="text-sm font-medium">
                  Floor (Optional)
                </label>

                <input
                  type="text"
                  name="floor"
                  onChange={handleChange}
                  className="mt-2 w-full h-12 rounded-lg border border-[#E6E2E9] bg-[#FAF9FB] px-4 outline-none"
                />

              </div>

            </div>

            <div className="grid md:grid-cols-2 gap-5 mt-5">

              <div>

                <label className="text-sm font-medium">
                  Postal Code
                </label>

                <input
                  type="text"
                  name="postal_code"
                  onChange={handleChange}
                  className="mt-2 w-full h-12 rounded-lg border border-[#E6E2E9] bg-[#FAF9FB] px-4 outline-none"
                />

              </div>

              <div>

                <label className="text-sm font-medium">
                  City
                </label>

                <input
                  type="text"
                  name="city"
                  onChange={handleChange}
                  className="mt-2 w-full h-12 rounded-lg border border-[#E6E2E9] bg-[#FAF9FB] px-4 outline-none"
                />

              </div>

            </div>

            {/* SHIPPING */}

            <h3 className="font-semibold mt-8 mb-4">
              Shipping Method
            </h3>

            <div className="space-y-3">

              <label
                className={`flex justify-between items-center border border-[#E6E2E9] bg-[#FAF9FB] rounded-xl p-4 cursor-pointer ${
                  formData.shipping_method === "standard"
                    ? "border-primary bg-[#F7F4FF]"
                    : ""
                }`}
              >
                <div className="flex gap-3">

                  <input
                    type="radio"
                    name="shipping_method"
                    value="standard"
                    checked={
                      formData.shipping_method === "standard"
                    }
                    onChange={handleChange}
                  />

                  <span>
                    Standard Shipping (3-5 days)
                  </span>

                </div>

                <span className="text-green-600 font-semibold">
                  FREE
                </span>

              </label>

              <label
                className={`flex justify-between items-center border border-[#E6E2E9] bg-[#FAF9FB] rounded-xl p-4 cursor-pointer ${
                  formData.shipping_method === "express"
                    ? "border-primary bg-[#F7F4FF]"
                    : ""
                }`}
              >
                <div className="flex gap-3">

                  <input
                    type="radio"
                    name="shipping_method"
                    value="express"
                    checked={
                      formData.shipping_method === "express"
                    }
                    onChange={handleChange}
                  />

                  <span>
                    Express Shipping (1-2 days)
                  </span>

                </div>

                <span className="font-semibold">
                  $25
                </span>

              </label>

            </div>

            <button
              onClick={handleNext}
              className="mt-8 w-full h-14 rounded-xl bg-primary text-white font-semibold "
            >
              Continue To Payment →
            </button>
          </div>

         </CheckoutLayout>

       

   

 
  );
}
  
          