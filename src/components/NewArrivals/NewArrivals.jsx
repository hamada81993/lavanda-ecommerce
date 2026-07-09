import { useEffect, useRef, useState } from "react";
import {
  FiHeart,
  FiShoppingCart,
  FiChevronRight,
  FiChevronLeft,
} from "react-icons/fi";
import { FaStar } from "react-icons/fa";

const products = [
  {
    id: 1,
    image: "https://placehold.co/400x400",
    title: "The Moisturizing Soft Cream",
    brand: "LAMER",
    oldPrice: 165,
    price: 115.5,
    rating: 4.9,
    discount: "-30%",
  },
  {
    id: 2,
    image: "https://placehold.co/400x400",
    title: "Rare Beauty Blush",
    brand: "RARE",
    oldPrice: 90,
    price: 60,
    rating: 4.8,
    discount: "-25%",
  },
  {
    id: 3,
    image: "https://placehold.co/400x400",
    title: "Fenty Gloss Bomb",
    brand: "FENTY",
    oldPrice: 40,
    price: 25,
    rating: 4.7,
    discount: "-30%",
  },
  {
    id: 4,
    image: "https://placehold.co/400x400",
    title: "Drunk Elephant Cream",
    brand: "DE",
    oldPrice: 120,
    price: 95,
    rating: 4.6,
    discount: "-20%",
  },
  {
    id: 4,
    image: "https://placehold.co/400x400",
    title: "Drunk Elephant Cream",
    brand: "DE",
    oldPrice: 120,
    price: 95,
    rating: 4.6,
    discount: "-20%",
  },
  {
    id: 4,
    image: "https://placehold.co/400x400",
    title: "Drunk Elephant Cream",
    brand: "DE",
    oldPrice: 120,
    price: 95,
    rating: 4.6,
    discount: "-20%",
  },
  {
    id: 4,
    image: "https://placehold.co/400x400",
    title: "Drunk Elephant Cream",
    brand: "DE",
    oldPrice: 120,
    price: 95,
    rating: 4.6,
    discount: "-20%",
  },
  {
    id: 4,
    image: "https://placehold.co/400x400",
    title: "Drunk Elephant Cream",
    brand: "DE",
    oldPrice: 120,
    price: 95,
    rating: 4.6,
    discount: "-20%",
  },
  {
    id: 4,
    image: "https://placehold.co/400x400",
    title: "Drunk Elephant Cream",
    brand: "DE",
    oldPrice: 120,
    price: 95,
    rating: 4.6,
    discount: "-20%",
  },
  {
    id: 4,
    image: "https://placehold.co/400x400",
    title: "Drunk Elephant Cream",
    brand: "DE",
    oldPrice: 120,
    price: 95,
    rating: 4.6,
    discount: "-20%",
  },
  {
    id: 4,
    image: "https://placehold.co/400x400",
    title: "Drunk Elephant Cream",
    brand: "DE",
    oldPrice: 120,
    price: 95,
    rating: 4.6,
    discount: "-20%",
  },
  {
    id: 4,
    image: "https://placehold.co/400x400",
    title: "Drunk Elephant Cream",
    brand: "DE",
    oldPrice: 120,
    price: 95,
    rating: 4.6,
    discount: "-20%",
  },
  {
    id: 4,
    image: "https://placehold.co/400x400",
    title: "Drunk Elephant Cream",
    brand: "DE",
    oldPrice: 120,
    price: 95,
    rating: 4.6,
    discount: "-20%",
  },
];

export default function NewArrivals() {
  const sliderRef = useRef(null);
  const [paused, setPaused] = useState(false);

  // Auto Scroll (same Flash Deals logic)
  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;

    const interval = setInterval(() => {
      if (!paused) {
        el.scrollLeft += 1;

        // loop smooth
        if (el.scrollLeft >= el.scrollWidth - el.clientWidth) {
          el.scrollLeft = 0;
        }
      }
    }, 15);

    return () => clearInterval(interval);
  }, [paused]);

  const scroll = (dir) => {
    sliderRef.current?.scrollBy({
      left: dir === "left" ? -350 : 350,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-10">
      {/* HEADER (Same Flash Deals Style) */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-[#302245]">
          New Arrivals
        </h2>

        <button className="flex items-center gap-2 font-semibold text-[#302245] hover:text-[#9B82C8]">
          View All <FiChevronRight />
        </button>
      </div>

      {/* SLIDER */}
      <div
        className="relative group"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20
          bg-white shadow-lg rounded-full p-3
          opacity-0 group-hover:opacity-100 transition"
        >
          <FiChevronLeft />
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20
          bg-white shadow-lg rounded-full p-3
          opacity-0 group-hover:opacity-100 transition"
        >
          <FiChevronRight />
        </button>
        {/* SCROLL AREA */}
        <div
          ref={sliderRef}
          className="flex gap-5 overflow-x-auto scroll-smooth px-10 scrollbar-hide"
        >
          {products.map((p) => (
            <div
              key={p.id}
              className="min-w-[230px] bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition"
            >
              {/* IMAGE */}
              <div className="relative">
                <img
                  src={p.image}
                  className="w-full h-52 object-cover"
                />

                <span className="absolute top-3 left-3 bg-[#9B82C8] text-white text-xs px-2 py-1 rounded-full">
                  {p.discount}
                </span>

                <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow">
                  <FiHeart />
                </button>
              </div>

              {/* CONTENT */}
              <div className="p-4">
                <div className="flex items-center gap-1 text-sm">
                  <FaStar className="text-yellow-400" />
                  {p.rating}
                </div>

                <p className="text-xs text-gray-500 mt-2">
                  {p.brand}
                </p>

                <h3 className="font-medium text-sm mt-1 line-clamp-2">
                  {p.title}
                </h3>

                <div className="flex items-center justify-between mt-3">
                  <div>
                    <span className="text-xs text-gray-400 line-through">
                      ${p.oldPrice}
                    </span>
                    <p className="font-bold text-[#9B82C8]">
                      ${p.price}
                    </p>
                  </div>

                  <button className="w-9 h-9 rounded-full bg-[#F4EFFA] flex items-center justify-center">
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