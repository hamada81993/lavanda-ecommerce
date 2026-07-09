


import { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function Categories({
  categories = [],
}) {
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);

  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider || isPaused) return;

    intervalRef.current = setInterval(() => {
      const maxScroll =
        slider.scrollWidth - slider.clientWidth;

      if (slider.scrollLeft >= maxScroll) {
        clearInterval(intervalRef.current);
        return;
      }

      slider.scrollLeft += 0.5;
    }, 20);

    return () => clearInterval(intervalRef.current);
  }, [isPaused]);

  const scroll = (direction) => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      left: direction === "left" ? -250 : 250,
      behavior: "smooth",
    });
  };
 
  if (!categories.length) {
    return (
      <section className="w-full py-8 bg-white">
        <div className="text-center py-10">
          Loading Categories...
        </div>
      </section>
    );
  }

  return (
    <section className="w-full py-8 bg-white">
      <div className="rounded-3xl relative">
        <h2 className="text-center text-2xl md:text-3xl font-semibold mb-10">
          Shop By Category
        </h2>

        <div
          className="relative group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="
              absolute
              left-0
              top-1/2
              -translate-y-1/2
              z-30
              bg-white
              shadow-lg
              rounded-full
              p-3
              opacity-0
              group-hover:opacity-100
              transition-all
              duration-300
            "
          >
            <FiChevronLeft size={22} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="
              absolute
              right-0
              top-1/2
              -translate-y-1/2
              z-30
              bg-white
              shadow-lg
              rounded-full
              p-3
              opacity-0
              group-hover:opacity-100
              transition-all
              duration-300
            "
          >
            <FiChevronRight size={22} />
          </button>

          {/* Categories */}
          <div
            ref={sliderRef}
            className="
              flex
              gap-8
              overflow-x-auto
              scrollbar-hide
              no-scrollbar
              px-16
              scroll-smooth
            "
          >
         {categories.map((cat) => {

  return (
    <Link
      key={cat.id}
      to={`/category/${cat.id}`}
      className="
        flex-shrink-0
        flex
        flex-col
        items-center
        text-center
        group/item
      "
    >
      <div
        className="
          w-[90px]
          h-[90px]
          rounded-full
          overflow-hidden
          border
          border-gray-200
          transition-transform
          duration-300
          group-hover/item:scale-105
        "
      >
        <img
src={cat.image_url}          
alt={cat.name}
          className="
            w-full
            h-full
            object-cover
          "
        />
      </div>

      <p
        className="
          mt-3
          text-sm
          text-gray-700
          transition-colors
          group-hover/item:text-primary
        "
      >
        {cat.name}
      </p>
    </Link>
  );
})}
          </div>
        </div>
      </div>
    </section>
  );
}