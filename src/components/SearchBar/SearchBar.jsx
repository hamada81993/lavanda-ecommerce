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
          placeholder="Search by Category,Product ,offers ....."
          className="
            flex-1
            bg-transparent
            outline-none

          "
        />

      <div className="w-px h-[29px] bg-[#302245] mx-2">

</div>
        <svg className="hover:text-[#9b87bd] cursor-pointer"    onClick={() =>
            onFilterClick?.()
          }  xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <g clip-path="url(#clip0_368_1883)">
    <path d="M6.41304 1.06884C5.74966 1.06849 5.1025 1.2739 4.56076 1.65676C4.01901 2.03962 3.60935 2.58108 3.38822 3.20652H0V5.3442H3.38822C3.60905 5.97004 4.01856 6.51198 4.56031 6.89531C5.10206 7.27864 5.74938 7.4845 6.41304 7.4845C7.07669 7.4845 7.72401 7.27864 8.26577 6.89531C8.80752 6.51198 9.21703 5.97004 9.43785 5.3442H17.1014V3.20652H9.43785C9.21673 2.58108 8.80706 2.03962 8.26532 1.65676C7.72357 1.2739 7.07642 1.06849 6.41304 1.06884ZM5.3442 4.27536C5.3442 3.99189 5.45681 3.72002 5.65725 3.51958C5.8577 3.31913 6.12956 3.20652 6.41304 3.20652C6.69651 3.20652 6.96838 3.31913 7.16882 3.51958C7.36927 3.72002 7.48188 3.99189 7.48188 4.27536C7.48188 4.55883 7.36927 4.8307 7.16882 5.03114C6.96838 5.23159 6.69651 5.3442 6.41304 5.3442C6.12956 5.3442 5.8577 5.23159 5.65725 5.03114C5.45681 4.8307 5.3442 4.55883 5.3442 4.27536ZM10.6884 9.61956C10.025 9.61921 9.37786 9.82462 8.83612 10.2075C8.29437 10.5903 7.88471 11.1318 7.66358 11.7572H0V13.8949H7.66358C7.88441 14.5208 8.29392 15.0627 8.83567 15.446C9.37742 15.8294 10.0247 16.0352 10.6884 16.0352C11.3521 16.0352 11.9994 15.8294 12.5411 15.446C13.0829 15.0627 13.4924 14.5208 13.7132 13.8949H17.1014V11.7572H13.7132C13.4921 11.1318 13.0824 10.5903 12.5407 10.2075C11.9989 9.82462 11.3518 9.61921 10.6884 9.61956ZM9.61956 12.8261C9.61956 12.5426 9.73217 12.2707 9.93261 12.0703C10.1331 11.8698 10.4049 11.7572 10.6884 11.7572C10.9719 11.7572 11.2437 11.8698 11.4442 12.0703C11.6446 12.2707 11.7572 12.5426 11.7572 12.8261C11.7572 13.1096 11.6446 13.3814 11.4442 13.5819C11.2437 13.7823 10.9719 13.8949 10.6884 13.8949C10.4049 13.8949 10.1331 13.7823 9.93261 13.5819C9.73217 13.3814 9.61956 13.1096 9.61956 12.8261Z" fill="currentColor"/>
  </g>
  <defs>
    <clipPath id="clip0_368_1883">
      <rect width="17.1014" height="17.1014" fill="white"/>
    </clipPath>
  </defs>
</svg>
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