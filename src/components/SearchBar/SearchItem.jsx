import { Link } from "react-router-dom";

export default function SearchItem({
  product,
  closeDropdown,
}) {
  return (
    <Link
      to={`/product/${product.prd_id}`}
   onClick={closeDropdown}
      className="
        flex
        items-center
        gap-3
        p-3
        hover:bg-gray-100
        transition
      "
    >
      <img
        src={product.img_url}
        alt={product.title}
        className="w-12 h-12 rounded-lg object-cover"
      />

      <div className="flex-1">
        <h4 className="text-sm font-medium text-[#302245]">
          {product.title}
        </h4>

        <p className="text-primary font-semibold">
          ${product.discount_price}
        </p>
      </div>
    </Link>
  );
}