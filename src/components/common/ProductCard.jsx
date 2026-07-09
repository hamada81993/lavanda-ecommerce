import { useEffect, useState } from "react";
import {
  FiHeart,
  FiShoppingCart,
  FiCheck,
} from "react-icons/fi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { useWishlist } from "../../hooks/useWishlist";

import { useAddToCartMutation } from "../../redux/cart/cartApi";

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  const [addToCart] = useAddToCartMutation();
const { handleWishlist, isWishlisted } = useWishlist();


  const [added, setAdded] = useState(false);
const id =
  product.prd_id || product.id;
const image =
  product.img_url ||
  product.image;
const title =
  product.title ||
  product.name;
 const brand =
  product.badge?.badge_name ||
  product.brand ||
  "Lavanda";

 const rating =
  product.avg_ratting ??
  product.rating ??
  5;
const price =
  product.discount_price ??
  product.sale_price ??
  product.price;

  const oldPrice =
    product.price;

  const discount =
  product.campaign_percentage > 0
    ? `${Math.round(product.campaign_percentage)}% OFF`
    : product.discount || null;

  // 



const handleAddToCart = async (e) => {
  e.stopPropagation();

  try {
    const res = await addToCart({
  product_id: id,
  quantity: 1,
}).unwrap();

    setAdded(true);

    toast.success(res.msg || "Product added successfully");
  } catch (err) {
    toast.error(
      err?.data?.msg || "Failed to add product"
    );
  }
};


  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer">

      <div className="relative h-[250px] bg-gray-50 overflow-hidden">

        {discount && (
          <span className="absolute top-3 left-3 z-10 bg-[#9b87bd] text-white text-xs font-semibold px-3 py-1 rounded-full">
            {discount}
          </span>
        )}

        <button
onClick={(e) => handleWishlist(e, id)}          
className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white shadow flex items-center justify-center"
        >
          <FiHeart
        className={
            isWishlisted(id)
                ? "text-red-500 fill-red-500"
                : "text-[#9b87bd]"
        }
    />
        </button>

        <img
          src={image}
          alt={title}
          onClick={() =>
            navigate(`/product/${id}`)
          }
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-3">

        <div className="flex justify-between items-center mb-2">

          <div className="flex items-center gap-1 text-sm text-gray-600">

            <span className="text-yellow-400">
              ★
            </span>

            <span>{rating}</span>

          </div>

          <button
            onClick={handleAddToCart}
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
              added
                ? "bg-green-500 text-white"
                : "bg-[#f4eff9] text-[#7b6ba1]"
            }`}
          >
            {added ? (
              <FiCheck size={18} />
            ) : (
              <FiShoppingCart size={18} />
            )}
          </button>
        </div>

        <p className="uppercase text-[11px] tracking-wider text-gray-400 font-bold">
          {brand}
        </p>

        <h3 className="text-sm font-semibold text-gray-700 line-clamp-2 h-10 mt-1">
          {title}
        </h3>

        <div className="flex justify-between items-center mt-3">

          <span className="text-gray-400 line-through text-sm">
            {oldPrice}
          </span>

          <span className="text-[#9b87bd] font-bold text-xl">
            {price}
          </span>

        </div>

      </div>

    </div>
  );
}