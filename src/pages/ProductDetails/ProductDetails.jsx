import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../../services/productApi";
import ProductCard from "../../components/common/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { useGetProductDetailsQuery } from "../../redux/products/productsApi";
import { useAddToCartMutation } from "../../redux/cart/cartApi";
import { toast } from "react-toastify";
import { useWishlist } from "../../hooks/useWishlist";
import { FiHeart } from "react-icons/fi";

export default function ProductDetails() {
 
const dispatch=useDispatch();
  const navigate = useNavigate();

const [quantity, setQuantity] = useState(1);
const { id } = useParams();

const {
  data: productDetails,
  isLoading,
  error,
} = useGetProductDetailsQuery(id);
console.log(productDetails);

const product = productDetails?.product;
const relatedProducts = productDetails?.related_products;
const [addToCart] = useAddToCartMutation();
const {
  handleWishlist,
  isWishlisted,
} = useWishlist();

const [activeTab, setActiveTab] = useState("description");

const handleAddToCart = async () => {
const token = localStorage.getItem("token");
    if (!token) {
      toast.info("Please login to add products to your cart");
      navigate("/login");
      return;
    }

  try {
    const res = await addToCart({
  product_id: id,
  quantity: 1,
}).unwrap();

 

    toast.success(res.msg || "Product added successfully");
  } catch (err) {
    toast.error(
      err?.data?.msg || "Failed to add product"
    );
  }
};

if (!product) {
  return <div>No Product Found</div>;
}
  

  return (
    
    <div className="container mx-auto max-w-[1320px] px-4 py-8">

  {/* Breadcrumb */}
  <div className="text-[12px] text-[#777] mb-6">
    Home / {product.category?.name} / {product.name}
  </div>

  {/* Main */}
  <div className="grid lg:grid-cols-2 gap-12">

    {/* LEFT */}
    <div>

      {/* Main Image */}
      <div className="
      bg-[#F6F3F8]
      rounded-xl
      overflow-hidden
      h-[540px]
      flex
      items-center
      justify-center
      ">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gallery */}
      <div className="grid grid-cols-4 gap-3 mt-4">

        {[1,2,3,4].map((item)=>(
          <div
          key={item}
          className="
          h-[100px]
          rounded-lg
          overflow-hidden
          cursor-pointer
          border 
          hover:border-[#8F7AAE]
          "
          >
            <img
            src={product.image}
            className="w-full h-full object-cover"
            />
          </div>
        ))}

      </div>

    </div>

    {/* RIGHT */}
    <div>

      {/* Title */}
      <h1 className="
      text-[30px]
      font-bold
      text-[#302245]
      leading-[42px]
      ">
        {product.name}
      </h1>

      {/* Rating */}
      <div className="flex items-center gap-3 mt-3">

        <div className="text-[#FFC107] text-lg">
          ★★★★★
        </div>

        <span className="text-sm text-gray-500">
          4.5
        </span>

      </div>

      {/* Stock */}
      <div className="mt-2 text-[#2ECA7F] text-sm font-medium">
        In Stock
      </div>

      {/* Price */}
      <div className="flex items-center gap-4 mt-6">

        <span className="
        text-[34px]
        font-bold
        text-[#8F7AAE]
        ">
          {product.price} EGP
        </span>

        {product.sale_price && (
          <span className="
          line-through
          text-[#888]
          text-lg
          ">
            {product.sale_price}
          </span>
        )}

      </div>

      {/* Summary */}
      <p className="
      mt-6
      text-[#666]
      leading-8
      ">
        {product.summary}
      </p>

      {/* Sizes */}
      <div className="mt-8">

        <p className="font-semibold mb-3">
          Size
        </p>

        <div className="flex gap-3">

          {["30ml","50ml","100ml"].map((size)=>(

            <button
            key={size}
            className="
            px-5
            h-[40px]
            rounded-md
            border
            border-[#E6E2E9]
            hover:bg-[#8F7AAE]
            hover:text-white
            "
            >
              {size}
            </button>

          ))}

        </div>

      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-8">
 {/* Quantity */}
  <div
    className="
      flex
      items-center
      h-[44px]
      border
      border-[#E9E5EE]
      rounded-md
      overflow-hidden
      bg-[var(--color-bg-button)] 
      curs
    "
  >
    <button
      onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
      className="
        w-[36px]
        h-full
        flex
        items-center
        justify-center
        text-[#666]
        hover:bg-[#F7F5FA]
        transition
      "
    >
      −
    </button>

    <span
      className="
        w-[40px]
        text-center
        text-[15px]
        font-medium
        text-[#302245]
      "
    >
      {quantity}
    </span>

    <button
      onClick={() => setQuantity((prev) => prev + 1)}
      className="
        w-[36px]
        h-full
        flex
        items-center
        justify-center
        text-[#666]
        hover:bg-[#F7F5FA]
        transition
      "
    >
      +
    </button>
  </div>
        <button onClick={handleAddToCart}
        className="
        flex-1
        h-[48px]
        rounded-md
        bg-[#8F7AAE]
        text-white
        font-semibold
        hover:bg-[#7c6b98]
        "
        >
          Add To Cart
        </button>

        <button
        onClick={() => navigate("/cart")}

        className="
        flex-1
        h-[48px]
        rounded-md
        border
        border-[#8F7AAE]
        text-[#8F7AAE]
        font-semibold
        hover:bg-[#8F7AAE]
        hover:text-white
        "
        >
          Buy Now
        </button>

      </div>

      {/* Wishlist */}
      <button   onClick={(e) =>
    handleWishlist(e, product.id)
  } className="
      mt-6
      flex
      items-center
      gap-2
      text-[#8F7AAE]
      font-medium
      ">
  {/* {isWishlisted(product.id) ? "♥" : "♡"}

  {isWishlisted(product.id)
    ? "Added to Wishlist"
    : "Add to Wishlist"} */}
    <FiHeart
  className={
    isWishlisted(product.id)
      ? "fill-red-500 text-red-500"
      : ""
  }
  
/>
Add to Wishlist
          </button>

      {/* Info Box */}
      <div className="
      mt-8
      rounded-xl
      border
      border-[#ECECEC]
      p-6
      space-y-5
      ">

        <div>
          <h3 className="font-semibold text-[#302245]">
            Ideal For
          </h3>

          <p className="text-sm text-[#777]">
            All skin types, Dry & Combination skin
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-[#302245]">
            Treats
          </h3>

          <p className="text-sm text-[#777]">
            Dryness, Dark spots, Fine lines
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-[#F5A623]">
            Caution
          </h3>

          <p className="text-sm text-[#F5A623]">
            Patch test advised for sensitive skin.
          </p>
        </div>

      </div>

    </div>

  </div>


  <div className="mt-12 border border-[var(--color-border)]  bg-white  rounded-xl p-8">

  {/* Tabs */}
  <div className="flex items-center gap-5 border-b border-[#ECECEC] pb-5">

    {[
      "description",
      "ingredients",
      "how to use",
      "reviews",
    ].map((tab) => (

      <button
        key={tab}
        onClick={() => setActiveTab(tab)}
        className={`
          relative
          text-[18px]
          font-semibold
          capitalize
          transition
          ${
            activeTab === tab
              ? "text-[#8F7AAE]"
              : "text-[#555] hover:text-[#8F7AAE]"
          }
        `}
      >
        {tab}

        {activeTab === tab && (
          <span
            className="
              absolute
              -bottom-[22px]
              left-0
              w-full
              h-[2px]
              bg-[#8F7AAE]
            "
          />
        )}
      </button>

    ))}

  </div>

  {/* CONTENT */}
  <div className="mt-8">

  {activeTab === "description" && (
  <div className="mt-8">

    <h3 className="text-[22px] font-semibold text-[#302245] mb-5">
      About This Product
    </h3>

      <div
      className="
      product-description

      [&_ul]:list-disc
      [&_ul]:pl-5
      [&_ul]:space-y-3

      [&_li]:text-[15px]
      [&_li]:leading-7

      [&_p]:mb-4
      [&_span]:text-[#666]
      [&_span]:leading-7

      [&_h1]:hidden
      [&_h2]:hidden
      [&_h3]:hidden
      "
      dangerouslySetInnerHTML={{
        __html: product.description,
      }}
    />

  </div>
)}

    {activeTab === "ingredients" && (

      <div>

        <h3 className="text-[22px] font-semibold text-[#302245] mb-4">
        </h3>

        <p className="text-[#666] leading-8">
       
        </p>

      </div>

    )}

    {activeTab === "how to use" && (

      <div>

        <h3 className="text-[22px] font-semibold text-[#302245] mb-4">
        
        </h3>

      </div>

    )}

  {activeTab === "reviews" && (

<div className="mt-8">

<h3 className="text-[22px] font-semibold text-[#302245] mb-6">
Reviews
</h3>

{product.reviews?.length > 0 ? (

<div className="space-y-5">

{product.reviews.map((review)=>(

<div
key={review.id}
className="border rounded-xl p-4"
>

<p className="font-semibold">
{review.name}
</p>

<p className="text-gray-500 mt-2">
{review.review}
</p>

</div>

))}

</div>

):(

<p className="text-gray-500">
No Reviews Yet
</p>

)}

</div>

)}
{activeTab === "return policy" && (

<div className="mt-8">

<h3 className="text-[22px] font-semibold text-[#302245] mb-5">
Return Policy
</h3>

<div
className="prose max-w-none"
dangerouslySetInnerHTML={{
__html: productDetails.return_policy.shipping_return_description,
}}
/>

</div>

)}
{activeTab === "tags" && (

<div className="mt-8">

<h3 className="text-[22px] font-semibold text-[#302245] mb-5">
Tags
</h3>

<div className="flex flex-wrap gap-3">

{product.tag.map((tag)=>(

<span
key={tag.id}
className="
px-4
py-2
rounded-full
bg-[#F6F3F8]
text-[#302245]
text-sm
"
>
{tag.tag_name}
</span>

))}

</div>

</div>

)}

  </div>

</div>


{/* Related Products */}
{relatedProducts?.length > 0 && (
  <div className="mt-16">

    <div className="flex items-center justify-between mb-6">
      <h2 className="text-[28px] font-bold text-[#302245]">
        Related Products
      </h2>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {relatedProducts.map((item) => (
        <ProductCard
          key={item.prd_id}
          product={{
            id: item.prd_id,
            name: item.title,
            image: item.img_url,
            price: item.price,
            sale_price: item.discount_price,
            campaign_product: item.campaign_product,
            rating: item.avg_ratting,
          }}
        />
      ))}
    </div>

  </div>
)}
</div>
  );
}