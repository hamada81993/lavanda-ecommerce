export default function CategoryHeader({
  title,
  onFilterClick,
}) {
  return ( 
    <div className="mb-6">
      <h2 className="text-3xl font-bold mb-4">
        {title}
      </h2>

      <div className="flex flex-col sm:flex-row justify-between gap-4 category-border pb-4">

<div className="flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <g clipPath="url(#filterIcon)">
      <path
  d="M9 1.5C8.06902 1.49951 7.16081 1.78778 6.40053 2.32508C5.64025 2.86239 5.06533 3.62227 4.755 4.5H0V7.5H4.755C5.0649 8.3783 5.63961 9.13885 6.3999 9.67682C7.16019 10.2148 8.06863 10.5037 9 10.5037C9.93137 10.5037 10.8398 10.2148 11.6001 9.67682C12.3604 9.13885 12.9351 8.3783 13.245 7.5H24V4.5H13.245C12.9347 3.62227 12.3598 2.86239 11.5995 2.32508C10.8392 1.78778 9.93098 1.49951 9 1.5ZM7.5 6C7.5 5.60218 7.65803 5.22064 7.93934 4.93934C8.22064 4.65804 8.60217 4.5 9 4.5C9.39782 4.5 9.77935 4.65804 10.0607 4.93934C10.342 5.22064 10.5 5.60218 10.5 6C10.5 6.39783 10.342 6.77936 10.0607 7.06066C9.77935 7.34196 9.39782 7.5 9 7.5C8.60217 7.5 8.22064 7.34196 7.93934 7.06066C7.65803 6.77936 7.5 6.39783 7.5 6ZM15 13.5C14.069 13.4995 13.1608 13.7878 12.4005 14.3251C11.6402 14.8624 11.0653 15.6223 10.755 16.5H0V19.5H10.755C11.0649 20.3783 11.6396 21.1388 12.3999 21.6768C13.1602 22.2148 14.0686 22.5037 15 22.5037C15.9314 22.5037 16.8398 22.2148 17.6001 21.6768C18.3604 21.1388 18.9351 20.3783 19.245 19.5H24V16.5H19.245C18.9347 15.6223 18.3598 14.8624 17.5995 14.3251C16.8392 13.7878 15.931 13.4995 15 13.5ZM13.5 18C13.5 17.6022 13.658 17.2206 13.9393 16.9393C14.2206 16.658 14.6022 16.5 15 16.5C15.3978 16.5 15.7794 16.658 16.0607 16.9393C16.342 17.2206 16.5 17.6022 16.5 18C16.5 18.3978 16.342 18.7794 16.0607 19.0607C15.7794 19.342 15.3978 19.5 15 19.5C14.6022 19.5 14.2206 19.342 13.9393 19.0607C13.658 18.7794 13.5 18.3978 13.5 18Z"
  fill="#8F7AAE"
/>
    </g>
    <defs>
      <clipPath id="filterIcon">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>

  <button
    onClick={onFilterClick}
    className="font-semibold text-[#302245]"
  >
    Filter By
  </button>
</div>
<div className="flex items-center gap-3">
  <p className="text-[#302245] text-[20px] font-semibold leading-[20px]">
    Sort by
  </p>

  <select
    className="
      h-10
      px-4
      border
      border-gray-200
      rounded-md
      text-[#302245]
      text-base
      font-medium
      outline-none
      cursor-pointer
    "
  >
    <option>Newest</option>
    <option>Price Low</option>
    <option>Price High</option>
  </select>
</div>
      </div>
    </div> 
  );
}







