import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import ProductCard from "../../components/common/ProductCard";

import {
  useGetWishlistQuery,
  useToggleWishlistMutation,
} from "../../redux/wishlist/wishlistApi";
import ProductCard from "../../components/common/ProductCard";

export default function Wishlist() {


  const clearAllWishlist = async () => {
  try {
    await Promise.all(
      wishlistItems.map((item) =>
        toggleWishlist(item.id)
      )
    );
  } catch (err) {
    console.log(err);
  }
};
const {
  data,
  isLoading,
  error,
} = useGetWishlistQuery();

const [toggleWishlist] =
  useToggleWishlistMutation();

const wishlistItems =
  data?.data ?? [];


if (isLoading) {
  return (
    <div className="py-20 text-center">
      Loading...
    </div>
  );
}
if (error) {
  return (
    <div className="py-20 text-center">
      Failed to load wishlist
    </div>
  );
}
  return (
    <div className="pt-4 pb-8 min-h-[60vh] bg-white">
      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <nav className="mb-4 text-sm text-gray-500">
          <Link
            to="/"
            className="transition-colors hover:text-violet-500"
          >
            {/* {t("breadcrumb.home")} */}
          </Link>

          <span className="mx-2">/</span>

          <span className="font-medium text-violet-500">
            {/* {t("breadcrumb.wishlist")} */}
          </span>
        </nav>

        {/* Header */}
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between mb-5 pb-3 border-b-2 border-gray-200">
          <div className="flex items-baseline gap-2">
            <h1 className="text-[26px] md:text-[32px] font-semibold text-[#302245]">
              {/* {t("title")} */}
            </h1>

            <span className="text-lg text-gray-500">
              ({wishlistItems.length}{" "}
              {wishlistItems.length === 1 ? "item" : "items"}
                {/* // ? t("item")
                // : t("items")} */}
              )
            </span>
          </div>

          {/* {wishlistItems.length > 0 && (
            <button
              onClick={clearAllWishlist}
              aria-label={("clearWishlistAria")}
              className="
                flex items-center justify-center gap-2
                w-full md:w-auto
                px-4 py-2
                text-sm font-medium
                text-red-500
                bg-red-50
                border border-red-100
                rounded-md
                transition-all
                hover:bg-red-100
                hover:border-red-200
                hover:shadow-sm
              "
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="3 6 5 6 21 6"></polyline>

                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>

                <line x1="10" y1="11" x2="10" y2="17"></line>

                <line x1="14" y1="11" x2="14" y2="17"></line>
              </svg>

              clearWishlist
            </button>
          )} */}
        </div>

  {wishlistItems.length === 0 ? (
  <div className="text-center py-20">
    <h2 className="text-2xl font-semibold">
      Wishlist is Empty
    </h2>
    <p className="text-gray-500 mt-2">
      Add your favorite products ❤️
    </p>
  </div>
) : (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {wishlistItems.map((product) => (
      <ProductCard key={product.id}  product={product} />
    ))}
  </div>
)}
      </div>
    </div>
  );
}