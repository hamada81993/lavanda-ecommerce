import { useRef, useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight, FiHeart, FiShoppingCart } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import FlashDealsHeader from "../common/FlashDealsHeader";

export default function FlashDeals({ products }) {
  const sliderRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const slider = sliderRef.current;

    const interval = setInterval(() => {
      if (!slider || isPaused) return;

      slider.scrollLeft += 1;
    }, 15);

    return () => clearInterval(interval);
  }, [isPaused]);

  const scroll = (dir) => {
    sliderRef.current?.scrollBy({
      left: dir === "left" ? -350 : 350,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-10">

      {/* Header with Timer */}
      <FlashDealsHeader />

      {/* Slider */}
      <div
        className="relative group"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >

        {/* Left */}
        <button
          onClick={() => scroll("left")}
          className="
            absolute left-0 top-1/2 -translate-y-1/2 z-20
            bg-white shadow-lg rounded-full p-3
            opacity-0 group-hover:opacity-100
            transition
          "
        >
          <FiChevronLeft />
        </button>

        {/* Right */}
        <button
          onClick={() => scroll("right")}
          className="
            absolute right-0 top-1/2 -translate-y-1/2 z-20
            bg-white shadow-lg rounded-full p-3
            opacity-0 group-hover:opacity-100
            transition
          "
        >
          <FiChevronRight />
        </button>

        {/* Track */}
        <div
          ref={sliderRef}
          className="
            flex gap-5 overflow-x-auto
            scrollbar-hide scroll-smooth px-10
          "
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="
                min-w-[230px]
                bg-white rounded-2xl shadow-sm
                overflow-hidden flex-shrink-0
              "
            >

              {/* Image */}
              <div className="relative">
                <img
                  src={product.image}
                  className="w-full h-52 object-cover"
                />

                <span className="absolute top-3 left-3 bg-[#9B82C8] text-white text-xs px-2 py-1 rounded-full">
                  {product.discount}
                </span>

                <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow">
                  <FiHeart />
                </button>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex items-center gap-1 text-sm">
                  <FaStar className="text-yellow-400" />
                  {product.rating}
                </div>

                <p className="text-xs text-gray-500 mt-2">
                  {product.brand}
                </p>

                <h3 className="text-sm font-medium mt-1 line-clamp-2">
                  {product.title}
                </h3>

                <div className="flex justify-between mt-3">
                  <div>
                    <span className="text-xs line-through text-gray-400">
                      ${product.oldPrice}
                    </span>
                    <p className="font-bold text-[#9B82C8]">
                      ${product.price}
                    </p>
                  </div>

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