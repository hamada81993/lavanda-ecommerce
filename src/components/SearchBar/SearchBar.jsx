import { useEffect, useRef, useState } from "react";
import SearchDropdown from "./SearchDropdown";
import useDebounce from "../../hooks/useDebounce";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchProducts } from "../../redux/products/productsThunk";
import { setSearchKeyword } from "../../redux/products/productsSlice";

export default function SearchBar({
  onFilterClick,
}) {

const [showDropdown, setShowDropdown] =
  useState(false);


const searchRef = useRef(null);
 
const navigate = useNavigate();
const dispatch = useDispatch();

const {
  keyword,
  searchProducts,
  loading,
} = useSelector(
  (state) => state.products
);

const debouncedKeyword =useDebounce(keyword);
useEffect(() => {
  if (!debouncedKeyword.trim()) {
    setShowDropdown(false);
    return;
  }

  dispatch(
    fetchSearchProducts({
      keyword: debouncedKeyword,
      page: 1,
    })
  );

  setShowDropdown(true);
}, [debouncedKeyword]);


useEffect(() => {

  if (!debouncedKeyword.trim()) {

    setShowDropdown(false);

    return;
  }

  dispatch(

fetchSearchProducts({

keyword: debouncedKeyword,

page:1,

})

);

  setShowDropdown(true);

},[
debouncedKeyword
]);
 

  return (
    <div ref={searchRef}
      className="
      order-3 lg:order-none
      w-full
      lg:flex-1
      flex
      justify-center
      relative
    "
    >
      <div
        className="
        flex items-center
        w-full
        max-w-[553px]
        h-[46px]
        px-4
        rounded-xl
        bg-[#F5F5F7]
      "
      >
        <input
          value={keyword}
 onChange={(e)=>
dispatch(
setSearchKeyword(
e.target.value
)
)
}
  onKeyDown={(e) => {
    if (e.key === "Enter") {
      setShowDropdown(false);
 navigate(
      `/search?query=${keyword}`
    );
      
    }
  }}
          placeholder="Search products..."
          className="
            flex-1
            bg-transparent
            outline-none
          "
        />

        <button
          onClick={() =>
            onFilterClick?.()
          }
        >
          Filter
        </button>
      </div>

<SearchDropdown
  products={searchProducts}

loading={loading}
  keyword={keyword}
  showDropdown={showDropdown}
  setShowDropdown={setShowDropdown}
/>
    </div>
  );
}