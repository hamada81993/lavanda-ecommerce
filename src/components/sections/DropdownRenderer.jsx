import { Link } from "react-router-dom";

export default function DropdownRenderer({
  category,
}) {
  if (
    !category?.sub_categories?.length
  ) {
    return null;
  }

  return (
    <div
  className="
    absolute
    top-full
    left-1/2
    -translate-x-1/2

    w-[1080px]
    max-w-[90vw]

    mt-0

    bg-white
    rounded-[24px]

    px-6
    py-5

    shadow-[0_20px_40px_rgba(48,34,69,0.08)]

    opacity-0
    invisible
    translate-y-5

    group-hover:opacity-100
    group-hover:visible
    group-hover:translate-y-0

    transition-all
    duration-300

    z-50
  "
>
     <div className="grid grid-cols-[1fr_1fr_1fr_250px] gap-8">
        {category.sub_categories.map(
          (sub) => (
            <div
  key={sub.id}
  className="border-r border-[#F0F0F0] pr-6"
>
              <Link
                to={`/subcategory/${sub.id}`}
                className="
               text-[14px] font-semibold text-[#302245] mb-4
                "
              >
                {sub.name}
              </Link>

              {/* <div className="space-y-2">
                <ul className="space-y-3">
    {sub.child_categories?.map(child => (
        <li key={child.id}>
            <Link
                to={`/child-category/${child.id}`}
                className="
                    text-[14px]
                    text-[#6B6B6B]
                    hover:text-primary
                    transition-colors
                "
            >
                {child.name}
            </Link>
        </li>
    ))}
</ul>
              </div> */}
              
            </div>
          )
        )}
        <div
  className="
    bg-[#F7EFE9]
    rounded-[20px]
    px-5
    py-6
    flex
    flex-col
    justify-between
    min-h-[270px]
  "
>
  <div>
    <div className="flex justify-end mb-4">
      <span
        className="
          bg-white
          text-[#302245]
          text-[10px]
          font-semibold
          px-3
          py-1
          rounded-full
        "
      >
        NEW
      </span>
    </div>

    <h3 className="text-[22px] font-bold text-[#302245] mb-2">
      Shop Collection
    </h3>

    <p className="text-[14px] text-[#6B6B6B]">
      Discover the latest arrivals from Lavanda.
    </p>
  </div>

  <Link
    to="/shop"
    className="
      h-[44px]
      flex
      items-center
      justify-center
      rounded-full
      bg-primary
      text-white
      text-sm
      font-medium
      hover:opacity-90
    "
  >
    Shop Now
  </Link>
</div>
      </div>
      
    </div>
  );
}