import { useRef, useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function InfiniteSlider({
  children,
  speed = 1,
}) {
  const sliderRef = useRef(null);
  const animationRef = useRef(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;

    const animate = () => {
      if (!paused) {
        const half = el.scrollWidth / 2;

        if (el.scrollLeft >= half) {
          el.scrollLeft = 0;
        }

        el.scrollLeft += speed;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationRef.current);
  }, [paused, speed]);

  const scroll = (dir) => {
    sliderRef.current?.scrollBy({
      left: dir === "left" ? -350 : 350,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="relative group"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Left */} 
      <button
        onClick={() => scroll("left")}
        className="
          absolute left-2 top-1/2 -translate-y-1/2 z-20
          bg-white shadow-lg rounded-full p-2
          opacity-0 group-hover:opacity-100
          transition
        "
      >
        <FiChevronLeft size={20} />
      </button>

      {/* Right */}
      <button
        onClick={() => scroll("right")}
        className="
          absolute right-2 top-1/2 -translate-y-1/2 z-20
          bg-white shadow-lg rounded-full p-2
          opacity-0 group-hover:opacity-100
          transition
        "
      >
        <FiChevronRight size={20} />
      </button>

      {/* Track */}
      <div
        ref={sliderRef}
        className="
         flex gap-4
    overflow-x-auto
    no-scrollbar
    px-10
    scroll-smooth
        "
      >
        {children}
        {children}
      </div>
    </div>
  );
}