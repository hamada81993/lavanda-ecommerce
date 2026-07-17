import { useNavigate } from "react-router-dom";
import SearchItem from "./SearchItem";
import { useDispatch } from "react-redux";
import { setSearchKeyword } from "../../redux/products/productsSlice";

export default function SearchDropdown({
  loading,
  products,
  keyword,
  showDropdown,
  setShowDropdown,
}) {
  if (!keyword.trim() || !showDropdown)
    return null;
const navigate = useNavigate();
const dispatch =useDispatch();
  return (
    <div
  className="
    absolute
    top-full
    left-0
    right-0
    mt-3
    bg-white
    rounded-2xl
    border border-gray-200
    shadow-2xl
    overflow-hidden
    z-50
  "
>
  {/* Header */}
  {!loading && products.length > 0 && (
    <div
      className="
        px-5
        py-3
     border border-gray-200
        bg-[#FAF9FC]
        text-sm
        text-gray-500
      "
    >
      {products.length} Results Found
    </div>
  )}

  {/* Loading */}
  {loading && (
    <div className="py-10 text-center text-gray-500">
      Searching...
    </div>
  )}

  {/* Empty */}
  {!loading && products.length === 0 && (
    <div className="py-10 text-center">
      <p className="text-lg font-semibold text-[#302245]">
        No products found
      </p>

      <p className="text-sm text-gray-500 mt-1">
        Try searching with another keyword.
      </p>
    </div>
  )}

  {/* Products */}
  {!loading && products.length > 0 && (
    <div className="max-h-[420px] overflow-y-auto">
      {products.map((product) => (
        <SearchItem
          key={product.prd_id}
          product={product}
          closeDropdown={() => setShowDropdown(false)}
        />
      ))}
    </div>
  )}

  {/* Footer */}
  {!loading && products.length > 0 && (
    <div className=" border border-gray-200 bg-[#FAF9FC] p-3">
      <button
        onClick={() => {
          setShowDropdown(false);
          dispatch(setSearchKeyword(keyword));
          navigate(`/search?query=${keyword}`);
        }}
        className="
          w-full
          h-11
          rounded-lg
          bg-primary-btn
          text-white
          font-semibold
          hover:opacity-90
          transition
        "
      >
        View all results
      </button>
    </div>
  )}
</div>
  );
}