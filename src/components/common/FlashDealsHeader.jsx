import { FiChevronRight } from "react-icons/fi";

export default function FlashDealsHeader({
  title = "Flash Deals",
  hours = "04",
  minutes = "07",
  seconds = "24",
  onViewAll,
}) {
  return (
    <div className="flex items-center justify-between mb-6">
      
      <h2 className="text-3xl font-bold text-text">
        {title}
      </h2>

      <div className="flex items-center gap-6">

        {/* Timer */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">
            Ends in:
          </span>

          {[hours, minutes, seconds].map((item, i) => (
            <div
              key={i}
              className="
                w-10 h-10
                rounded-lg
                bg-[#9B82C8]
                text-white
                flex items-center justify-center
                font-semibold
              "
            >
              {item}
            </div>
          ))}
        </div>

        {/* View All */}
        <button
          onClick={onViewAll}
          className="flex items-center gap-2 font-semibold text-[#302245] hover:text-[#9B82C8]"
        >
          View All
          <FiChevronRight />
        </button>

      </div>
    </div>
  );
}