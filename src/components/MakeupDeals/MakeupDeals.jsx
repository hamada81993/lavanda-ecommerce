import { useEffect, useRef, useState } from "react";
import { FiHeart, FiShoppingCart, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

const exclusiveDealsProducts = [
  { id: 301, title: "Estee Lauder Advanced Night Repair", rating: 4.9, price: "$75.00", discount: "-15%", image: "https://placehold.co/400x400" },
  { id: 302, title: "Dior Lip Glow Oil", rating: 4.8, price: "$38.00", image: "https://placehold.co/400x400" },
  { id: 303, title: "Huda Beauty Nude Palette", rating: 4.7, price: "$65.00", discount: "-25%", image: "https://placehold.co/400x400" },
  { id: 304, title: "Tarte Shape Tape Concealer", rating: 4.6, price: "$30.00", image: "https://placehold.co/400x400" },
  { id: 305, title: "NARS Radiant Creamy Concealer", rating: 4.8, price: "$32.00", discount: "-10%", image: "https://placehold.co/400x400" },
];

export default function MakeupDeals() {
  const sliderRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // Auto Scroll (same Flash Deals logic)
  useEffect(() => {
    const slider = sliderRef.current;

    const interval = setInterval(() => {
      if (!slider || isPaused) return;

      const maxScroll = slider.scrollWidth - slider.clientWidth;

      if (slider.scrollLeft >= maxScroll) return; // stop at end

      slider.scrollLeft += 1;
    }, 15);

    return () => clearInterval(interval);
  }, [isPaused]);

  const scroll = (direction) => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      left: direction === "left" ? -350 : 350,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-10 bg-[#fdf3e8]">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-[#302245] px-10">
          Exclusive Makeup Deals
        </h2>

        <button className="text-sm font-semibold text-gray-600 hover:text-[#9B82C8] flex items-center gap-1">
          View All
          <FiChevronRight />
        </button>
      </div>

      {/* Slider */}
      <div
        className="relative group"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-3 opacity-0 group-hover:opacity-100 transition"
        >
          <FiChevronLeft size={22} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-3 opacity-0 group-hover:opacity-100 transition"
        >
          <FiChevronRight size={22} />
        </button>

        {/* Fade */}
        <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-[#fdf3e8] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-[#fdf3e8] to-transparent z-10 pointer-events-none" />

        {/* Products */}
        <div
          ref={sliderRef}
          className="flex gap-5 overflow-x-auto scroll-smooth scrollbar-hide px-10"
        >
          {exclusiveDealsProducts.map((p) => (
            <div
              key={p.id}
              className="min-w-[230px] bg-white rounded-2xl shadow-sm hover:shadow-md transition flex-shrink-0 overflow-hidden"
            >
              {/* Image */}
              <div className="relative">
                <img src={p.image} className="w-full h-52 object-cover" />

                {p.discount && (
                  <span className="absolute top-3 left-3 bg-[#9B82C8] text-white text-xs px-2 py-1 rounded-full">
                    {p.discount}
                  </span>
                )}

                <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow">
                  <FiHeart />
                </button>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex items-center gap-1 text-sm">
                  <FaStar className="text-yellow-400" />
                  {p.rating}
                </div>

                <h3 className="text-sm font-medium mt-2 line-clamp-2">
                  {p.title}
                </h3>

                <div className="flex items-center justify-between mt-3">
                  <p className="font-bold text-[#9B82C8]">{p.price}</p>

                  <button className="w-9 h-9 bg-[#F4EFFA] rounded-full flex items-center justify-center">
                    <FiShoppingCart />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}