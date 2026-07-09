import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/productApi";
import ProductCard from "../../components/common/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { useGetProductDetailsQuery } from "../../redux/products/productsApi";

export default function ProductDetails() {
 
const dispatch=useDispatch();

const { id } = useParams();

const {
  data: productDetails,
  isLoading,
  error,
} = useGetProductDetailsQuery(id);
console.log(productDetails);

const product = productDetails?.product;
const relatedProducts = productDetails?.related_products;



if (!product) {
  return <div>No Product Found</div>;
}
  

  return (
    <div className="container mx-auto px-4 py-10">

      {/* TOP SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* IMAGE */}
        <div className="bg-white rounded-2xl shadow-sm p-4 border">
          <img
            src={product.image}
            className="w-full h-[450px] object-cover rounded-xl"
          />
        </div>

        {/* INFO */}
        <div>

          {/* TITLE */}
          <h1 className="text-2xl font-bold text-gray-800">
            {product.name}
          </h1>

          {/* CATEGORY */}
          <p className="text-sm text-gray-400 mt-1">
            {product.category?.name} / {product.sub_category?.name}
          </p>

          {/* PRICE */}
          <div className="flex items-center gap-3 mt-4">
            <span className="text-2xl font-bold text-[#9b87bd]">
              {product.price} EGP
            </span>

            {product.sale_price && (
              <span className="line-through text-gray-400">
                {product.sale_price} EGP
              </span>
            )}
          </div>

          {/* SUMMARY */}
          <p className="text-gray-600 mt-4 leading-relaxed">
            {product.summary}
          </p>

          {/* BUTTONS */}
          <div className="flex gap-3 mt-6">

            <button className="bg-[#9b87bd] text-white px-6 py-3 rounded-full hover:opacity-90 transition">
              Add to Cart
            </button>

            <button className="border border-[#9b87bd] text-[#9b87bd] px-6 py-3 rounded-full hover:bg-[#9b87bd] hover:text-white transition">
              Wishlist
            </button>

          </div>

          {/* BADGE */}
          {product.campaign_product && (
            <p className="mt-4 text-sm text-green-600 font-medium">
            Product Available
            </p>
          )}
        </div>
      </div>

      {/* DESCRIPTION */}
      <div className="mt-10 bg-white p-6 rounded-xl border shadow-sm">
        <h2 className="text-lg font-semibold mb-3">
          Description
        </h2>

        <div
          className="text-gray-600"
          dangerouslySetInnerHTML={{
            __html: product.description,
          }}
        />
      </div>

      {/* RELATED PRODUCTS */}
      {relatedProducts.length > 0 && (
        <div className="mt-12">

          <h2 className="text-xl font-semibold mb-5">
            Related Products
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

            {relatedProducts.map((product) => (
              <ProductCard
             key={product.prd_id}
                 product={product}
              />
            ))}

          </div>
        </div>
      )}

    </div>
  );
}