import { FiChevronRight } from "react-icons/fi";

export default function FlashDealDetails({
  leftImage,
  logoImage,
  rightImage,
}) { 
  return (
    <section className="w-full py-6 px-4">
      <div
        className="
          relative
          overflow-hidden
          rounded-2xl
          shadow-md
          bg-gradient-to-r
          from-gray-300
          via-[#b7adc7]
          to-[#d0c2e6]
          min-h-[200px]
          flex
          items-center
          justify-center
        "
      >
        {/* Left Image */}
        {leftImage && (
          <div
            className="
              absolute
              -left-5
              -top-14
              w-[290px]
              h-[407px]
              rotate-[14.5deg]
              z-10
              pointer-events-none
              hidden lg:block
            "
          >
            <img
              src={leftImage}
              alt=""
              className="w-full h-full object-contain opacity-95"
            />
          </div>
        )}

        {/* Content */}
        <div
          className="
            relative
            z-20
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            w-full
            max-w-5xl
            px-6
            md:px-10
            gap-8
            text-center
            md:text-left
          "
        >
          {/* Logo + Subtitle */}
          <div className="flex-1 flex flex-col items-center md:items-start">
            {logoImage && (
              <div className="max-w-[485px] mb-[-10px]">
                <img
                  src={logoImage}
                  alt="Logo"
                  className="w-full object-contain"
                />
              </div>
            )}
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-[#302245] text-xl md:text-3xl font-bold">
              Because You're Worth It
            </h2>

            <button
              className="
                flex
                items-center
                gap-3
                bg-white
                px-6
                py-3
                rounded-lg
                font-bold
                text-[#302245]
                shadow-sm
                hover:-translate-y-1
                hover:shadow-lg
                transition-all
                duration-300
              "
            >
              SHOP THE COLLECTION
              <FiChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Right Image */}
        {rightImage && (
          <div
            className="
              absolute
              -right-3
              -bottom-5
              w-[220px]
              h-[215px]
              z-10
              pointer-events-none
              hidden lg:block
            "
          >
            <img
              src={rightImage}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
        )}
      </div>
    </section>
  );
}