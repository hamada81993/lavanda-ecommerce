export default function FlashDealDetails({
  leftImage,
  logoImage,
  rightImage,
}) {
  return (
    <section className="container mx-auto my-10 px-4">
      <div
        className="
          relative
          h-[198px]
          overflow-hidden
          rounded-[17.1px]
          bg-gradient-to-r
          from-[#E0E0E0]
          via-[#B7ADC7]
          to-[#D0C2E6]
          shadow-[0_3px_12px_rgba(0,0,0,.08)]
          flex
          items-center

          max-md:h-auto
          max-md:py-10
        "
      >
        {/* Left Bottles */}
        {leftImage && (
          <img
            src={leftImage}
            alt=""
            className="
              absolute
              w-[205px]
              h-[368px]
              object-cover
              rotate-[14.5deg]
              -left-[45px]
              -top-[88px]
              pointer-events-none
              select-none
              z-10

              max-md:w-[120px]
              max-md:h-[215px]
              max-md:-left-8
              max-md:-top-10
            "
          />
        )}

        {/* Content */}
        <div
          className="
            relative
            z-20
            grid
            grid-cols-[500px_1fr]
            items-center
            w-full
            px-[38px]

            max-md:grid-cols-1
            max-md:px-5
            max-md:gap-8
          "
        >
          {/* LEFT */}
          <div className="max-md:flex max-md:flex-col max-md:items-center">
            <div className="flex items-center justify-between h-full">
              {logoImage && (
                <img
                  src={logoImage}
                  alt="Loreal"
                  className="
                    h-[112px]
                    w-[454px]
                    object-cover
                    object-left
                    shrink-0
                    max-w-none

                    max-md:w-[240px]
                    max-md:h-auto
                  "
                />
              )}
            </div>

            <p
              className="
                -mt-2
                ml-3
                text-[20px]
                font-['Montserrat']
                font-medium
                text-right
                text-[#302245]

                max-md:ml-0
                max-md:mt-2
                max-md:text-center
                max-md:text-[15px]
                max-md:leading-7
              "
            >
              Experience the ultimate Parisian beauty ritual
            </p>
          </div>

          {/* RIGHT */}
          <div
            className="
              flex
              flex-col
              items-center

              max-md:pb-12
            "
          >
            <h2
              className="
                text-[26px]
                font-bold
                text-[#302245]
                mt-6

                max-md:mt-0
                max-md:text-[20px]
                max-md:text-center
              "
            >
              Because You're Worth It
            </h2>

            <button
              className="
                mt-5
                h-[46px]
                px-8
                rounded-[9px]
                bg-white
                flex
                items-center
                gap-3
                text-[15px]
                font-bold
                text-[#302245]
                shadow-sm
                transition
                hover:shadow-[2.137px_2.137px_2.137px_rgba(0,0,0,0.25)]

                max-md:px-5
                max-md:text-[13px]
                max-md:h-[42px]
              "
            >
              SHOP THE COLLECTION

              <svg
                width="12"
                height="20"
                viewBox="0 0 13 26"
                fill="none"
              >
                <path
                  d="M1 1L11.5 13L1 25"
                  stroke="#302245"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Jar */}
        {rightImage && (
          <img
            src={rightImage}
            alt=""
            className="
              absolute
              w-[220px]
              h-[215px]
              object-cover
              right-[-15px]
              bottom-[-22px]
              pointer-events-none
              select-none
              z-10

              max-md:w-[120px]
              max-md:h-[118px]
              max-md:right-[-10px]
              max-md:bottom-[-10px]
            "
          />
        )}
      </div>
    </section>
  );
}