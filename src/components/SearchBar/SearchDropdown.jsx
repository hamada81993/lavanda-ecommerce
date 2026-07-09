import { useNavigate } from "react-router-dom";
import SearchItem from "./SearchItem";

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
  return (
    <div
      className="
        absolute
        left-0
        right-0
        top-full
        mt-2
        bg-white
        rounded-xl
        shadow-xl
        border
        overflow-hidden
        z-50
      "
    >
      {loading && (
        <div className="p-5 text-center">
          Loading...
        </div>
      )}

      {!loading && products.length === 0 && (
        <div className="p-5 text-center">
          No Products Found
        </div>
      )}

      {!loading &&
        products.map((product) => (
          <SearchItem
            key={product.prd_id}
            product={product}
            closeDropdown={() =>
              setShowDropdown(false)
            }
          />
        ))}
        {!loading &&
 products.length > 0 && (

<button
className="
w-full
py-3
border-t
text-primary
font-medium
hover:bg-gray-50
"
onClick={() => {
  setShowDropdown(false);
dispatch(
setSearchKeyword(keyword)
);

navigate(
`/search?query=${keyword}`
);
}}
>
View all results
</button>

)}
    </div>
  );
}