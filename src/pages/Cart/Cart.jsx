import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// import { useTranslation } from 'react-i18next';
import ProductCard from '../../components/common/ProductCard';

import { toast } from 'react-toastify';
import { FiHeart } from 'react-icons/fi';
import { useWishlist } from '../../hooks/useWishlist';
import { setCoupon } from "../../redux/checkout/checkoutSlice";
import {
  useGetCartQuery,
  useRemoveCartItemMutation,
  useUpdateCartItemMutation,
} from "../../redux/cart/cartApi";
import { useDispatch, useSelector } from 'react-redux';
import { useApplyCouponMutation } from '../../redux/coupon/couponApi';
// Load skincare images dynamically for recommendation cards
const skinCareImages = Object.values(
  import.meta.glob('../assets/img/skinCare/*.{jpg,jpeg,png}', { eager: true, import: 'default' })
);
const placeholderImage = (text) => `https://placehold.co/300x300/E6DFEE/333333?text=${encodeURIComponent(text)}`;
 
export default function CartPage() {
  const navigate = useNavigate();
  const [giftWrap, setGiftWrap] = useState(false);
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoMessage, setPromoMessage] = useState('');
  const [couponCode, setCouponCode] = useState("");
  const [added, setAdded] = useState(false);
const { handleWishlist, isWishlisted } = useWishlist();

const [updateCartItem] =
  useUpdateCartItemMutation();
const [shippingCost, setShippingCost] = useState(0);

const [tax, setTax] = useState(0);

const [shippingOptions, setShippingOptions] = useState([]);
// const { t } = useTranslation("cart");
  // Fetch data on mount and subscribe to cart/wishlist sync updates


const {
  data: cart,
  isLoading: loading,
} = useGetCartQuery();

const cartItems = cart?.items || [];
const subtotal = cart?.subtotal || 0;
const total = cart?.total || 0;
const count = cart?.count || 0;

const dispatch=useDispatch()
const [
  applyCoupon,
  {
    data: couponData,
    isLoading: couponLoading,
    error,
  },
] = useApplyCouponMutation();

const discountedPrice =
  couponData?.discounted_price
    ? Number(couponData.discounted_price)
    : null;

const finalTotal =
  discountedPrice ?? total;


const handleQuantityChange = async (
  productId,
  qty
) => {
  if (qty < 1) return;

  try {
    const res = await updateCartItem({
      product_id: productId,
      quantity: qty,
    }).unwrap();

    toast.success(
      res.msg || "Cart updated successfully"
    );
  } catch (err) {
    toast.error(
      err?.data?.msg ||
        "Failed to update cart"
    );
  }
};

const [removeCartItem] =
  useRemoveCartItemMutation();

const handleRemoveItem = async (
  rowId
) => {
  try {
    const res = await removeCartItem(
      rowId
    ).unwrap();

    toast.success(res.msg);
  } catch (err) {
    toast.error(
      err?.data?.msg ||
        "Failed to remove item"
    );
  }
};

  const handleGiftWrapToggle = () => {
    const updatedVal = !giftWrap;
    setGiftWrap(updatedVal);
    cartService.setGiftWrap(updatedVal);
  };
const handleApplyCoupon = async () => {
  if (!couponCode.trim()) {
    toast.error("Enter coupon code");
    return;
  }

  try {
    const ids = cartItems.map(
      (item) => item.options.product_id
    );

    const res = await applyCoupon({
      coupon: couponCode,
      total_amount: total,
      ids,
    }).unwrap();
dispatch(
  setCoupon({
    coupon: couponCode,
    discountedPrice: Number(
      res.discounted_price
    ),
  })
  
);
toast.success("Coupon Applied Successfully");

  } catch (err) {
    toast.error(
      err?.data?.msg || "Invalid Coupon"
    );
  }
};
  const getRawId = (itemId) => {
    if (!itemId) return '';
    const parts = String(itemId).split('-');
    if (parts[parts.length - 1].endsWith('ml')) {
      return parts.slice(0, -1).join('-');
    }
    return itemId;
  };




  // Checkout redirect
  const handleProceedCheckout = () => {
    navigate('/checkout');
  };

  // Recommends list matching design image exactly
  const recommendedProducts = Array.from({ length: 5 }).map((_, i) => ({
    id: `rec-product-${i}`,
    brand: 'LAMER',
    title: 'The Moisturizing Soft Cream',
    rating: 4.9,
    price: '$115.5',
    oldPrice: '$165',
    discount: '-30%',
    image: skinCareImages[i % (skinCareImages.length || 1)] || placeholderImage(`Skincare ${i + 1}`)
  }));
  console.log(cartItems[0]);
 return (
    <div className="min-h-screen bg-[#F8F6FB] py-10">
  <div className="container mx-auto px-4">

    <div className="grid grid-cols-1 lg:grid-cols-[2.2fr_1fr] gap-6">

      <div className="flex flex-col">

        <div className="flex items-baseline gap-2 mb-4">
          <h1 className="text-3xl font-semibold text-[#4a3f65]">
            {/* {t("title")} */}
            cart
          </h1>

          <span className="text-lg text-gray-500">
            {cartItems.length}{" "}
            {cartItems.length === 1 ? "item" :"items"}
            {/* t("item") : t("items")} */}
          </span>
        </div>

        {Number(subtotal) >= 50 && (
          <div className="flex items-center gap-2 px-4 py-3 mb-4 rounded-lg border border-green-200 bg-green-50 text-green-600 font-semibold shadow-sm">
                <svg className="shipping-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="3" width="15" height="13"></rect>
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                  <circle cx="5.5" cy="18.5" r="2.5"></circle>
                  <circle cx="18.5" cy="18.5" r="2.5"></circle>
                </svg>
                <span>{("freeShipping")}</span>
              </div>
            )}

            {cartItems.length === 0 ? (
<div className="flex flex-col items-center text-center bg-white border rounded-xl p-10 shadow-sm">               
     <div className="text-6xl mb-4">🛒</div>
                {/* <h2>{t("emptyCartTitle")}</h2> */}
                <h2>empty cart</h2>
                <p>empty decs</p>
                {/* <p>{t("emptyCartDesc")}</p> */}
               <Link
  to="/"
  className="mt-4 bg-primary  text-white px-8 py-3 rounded-full font-semibold transition"
>
                {/* {t("startShopping")}</Link> */}
              startShopping  </Link>
              </div>
            ) : (
<div className="bg-white rounded-2xl border border-[#E8E2F1] overflow-hidden">                
    {cartItems.map((item) => (
<div
  key={item.rowId}
  className="flex justify-between items-center py-6 px-6 border-b border-[#F3EFF8] last:border-0"
>
  {/* Product */}
  <div className="flex items-center gap-5 flex-1">
    <div className="w-28 h-28 rounded-2xl bg-[#F7F7F8] overflow-hidden border">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-full object-cover"
      />
    </div>

    <div className="flex flex-col gap-2">
      <span className="uppercase tracking-[3px] text-xs text-gray-400 font-semibold">
        {item.brand}
      </span>

      <h3 className="text-lg font-semibold text-[#3E2C63]">
        {item.name}
      </h3>

      <div className="flex items-center gap-2 text-sm text-gray-400">
        <span>{item.category}</span>

        {item.size && (
          <>
            <span>•</span>
            <span>{item.size}</span>
          </>
        )}
      </div>

      {/* Quantity */}
      <div className="flex items-center w-fit mt-2 rounded-full border border-gray-200 overflow-hidden">

        <button
onClick={() =>
  handleQuantityChange(
    item.options.product_id,
    item.qty - 1
  )
}          className="w-10 h-10 text-xl"
        >
          −
        </button>

        <span className="w-12 text-center font-semibold">
          {item.qty}
        </span>

        <button
onClick={() =>
  handleQuantityChange(
    item.options.product_id,
    item.qty + 1
  )
}          className="w-10 h-10  text-xl"
        >
          +
        </button>

      </div>
    </div>
  </div>

  {/* Price + Actions */}
  <div className="flex flex-col items-end gap-5">

    <div className="text-right">
      <p className="text-2xl font-bold text-primary">
        ${item.price}
      </p>

      {item.discount && (
        <p className="text-red-500 text-sm font-medium">
          {item.discount}
        </p>
      )}
    </div>

    <div className="flex gap-3">

<button
  onClick={(e) => handleWishlist(e, item.options.product_id)}
  className="w-8 h-8 rounded-full flex items-center justify-center"
>
<FiHeart
  className={
    isWishlisted(item.options.product_id)
      ? "text-red-500 fill-red-500"
      : "text-[#9b87bd]"
  }
/>
</button>

      <button
        onClick={() => handleRemoveItem(item.rowId)}
        className="w-11 h-11 rounded-full border border-gray-200 hover:bg-red-50 hover:text-red-500 transition"
      >
        🗑️
      </button>

    </div>
  </div>
</div>
                ))}

                {/* Add Gift Wrap Card Option */}
                {/* Gift Wrap */}

<div
  onClick={handleGiftWrapToggle}
  className={`mt-6 rounded-2xl border transition-all cursor-pointer
  ${
    giftWrap
      ? "border-primary bg-[#F7F3FF]"
      : "border-[#ECE8F3] bg-white hover:border-[#D8CCF5]"
  }`}
>
  <div className="flex items-center justify-between p-5">

    <div className="flex items-center gap-4">

      {/* Checkbox */}

      <div className="relative">

        <input
          type="checkbox"
          checked={giftWrap}
          readOnly
          className="peer sr-only"
        />

        <div
          className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition
          ${
            giftWrap
              ? "bg-primary border-primary"
              : "border-gray-300 bg-white"
          }`}
        >
          {giftWrap && (
            <svg
              width="14"
              height="14"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
              strokeWidth="3"
            >
              <path
                d="M5 13l4 4L19 7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>

      </div>

      {/* Gift Icon */}

      <div className="w-12 h-12 rounded-xl bg-[#F6F2FF] flex items-center justify-center">

        🎁

      </div>

      {/* Text */}

      <div>

        <h4 className="font-semibold text-[#3E2C63]">
          Gift Wrap
        </h4>

        <p className="text-sm text-gray-500">
          Add premium gift wrapping for your order
        </p>

      </div>

    </div>

    {/* Arrow */}

    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#7A3AED"
      strokeWidth="2"
    >
      <path d="M9 18l6-6-6-6" />
    </svg>

  </div>

</div>


              </div>
            )}

            {/* Back Navigation */}
          <div className="mt-4">
              <Link to="/" className="inline-flex items-center gap-2 text-primary

font-bold
 ">
                <svg className="back-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
                {/* {t("continueShopping")} */}
                continueShopping
              </Link>
            </div>
          </div>

          {/* Right Column: Order Summary Card */}
        <div className=" self-start top-24 bg-white rounded-3xl border border-[#ECE8F3] p-6 shadow-sm">

  <h2 className="text-2xl font-semibold text-[#3E2C63] mb-6">
    Order Summary
  </h2>

  {/* Coupon */}

  <div className="flex gap-3 mb-8">

    <input
      value={couponCode}
      onChange={(e) => setCouponCode(e.target.value)}
      placeholder="Promo code"
      className="flex-1 h-12 rounded-xl border border-[#E5E5E5] px-4 outline-none focus:border-violet-500"
    />

    <button
      onClick={handleApplyCoupon}
      disabled={couponLoading}
      className="px-6 rounded-xl bg-primary text-white font-medium transition"
    >
      {couponLoading ? "..." : "Apply"}
    </button>

  </div>

  {/* Summary */}

  <div className="space-y-4">

    <div className="flex justify-between text-[#666]">
      <span>Subtotal</span>

      <span className="font-medium">
        ${Number(subtotal).toFixed(2)}
      </span>
    </div>

    {discountedPrice&& (

      <>
        <div className="flex justify-between text-green-600">

          <span>Discount</span>

          <span>
            -$
            {(
              Number(total) -
              Number(discountedPrice)
            ).toFixed(2)}
          </span>

        </div>

        <div className="flex justify-between text-[#666]">

          <span>After Discount</span>

          <span className="font-medium">
            ${Number(discountedPrice).toFixed(2)}
          </span>

        </div>

      </>

    )}

    <div className="flex justify-between text-[#666]">

      <span>Shipping</span>

      <span className="text-green-600 font-medium">
        Free
      </span>

    </div>

  </div>

  <div className="my-6 border-t border-dashed"></div>

  {/* Total */}

  <div className="flex justify-between items-center mb-8">

    <span className="text-xl font-semibold text-[#3E2C63]">
      Total
    </span>

    <span className="text-3xl font-bold text-primary">
      ${Number(finalTotal).toFixed(2)}
    </span>

  </div>

  {/* Checkout */}

  <button
    onClick={handleProceedCheckout}
    
    disabled={cartItems.length === 0}
    className="w-full h-14 rounded-2xl bg-primary text-white font-semibold text-lg  transition"
  >
    Proceed to Checkout
    
  </button>

  {/* Payment */}

  <div className="mt-8">

    <p className="text-center text-sm text-gray-500 mb-3">
      Secure Payment
    </p>

    <div className="flex justify-center gap-3">

      <div className="px-3 py-2 rounded-lg border bg-white shadow-sm">
        VISA
      </div>

      <div className="px-3 py-2 rounded-lg border bg-white shadow-sm">
        Mastercard
      </div>

      <div className="px-3 py-2 rounded-lg border bg-white shadow-sm">
        PayPal
      </div>

    </div>

  </div>

</div>
        </div>

        {/* You May Also Like Slider Recommendation Section */}
        <div className="mt-12">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-[#4a3f65]">{("recommendations")}</h2>
            <Link to="/makeup" className="flex items-center gap-1 text-violet-600 font-semibold">
              {("viewAll")}
              <svg className="view-all-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
            {recommendedProducts.map((product) => (
              <ProductCard  key={product.id} id={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}