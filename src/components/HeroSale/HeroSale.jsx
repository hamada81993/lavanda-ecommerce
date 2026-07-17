
export default function HeroSale({image}) {
  return (
    <section className="relative flex items-center justify-end py-16 my-10 min-h-[480px]">

      {/* Image */}
      <div
        className="
          absolute
          left-0
          top-0
          bottom-0
          w-[35%]
          z-20
          drop-shadow-[15px_0px_25px_rgba(0,0,0,0.1)]

          md:w-[35%]

          max-md:relative
          max-md:w-full
          max-md:h-[350px]
          max-md:drop-shadow-[0px_10px_15px_rgba(0,0,0,0.1)]
        "
      >
        <div
          className="
            w-full
            h-full
            overflow-hidden
            rounded-2xl
            bg-[var(--color-primary-light)]

            max-md:rounded-t-2xl
          "
          style={{
            clipPath:
              "polygon(0 0, 100% 0, 80% 100%, 0 100%)",
          }}
        >
          <img
            src={image}
            alt="Sale Promotion"
            className="w-full h-full object-cover object-[center_20%]"
          />
        </div>
      </div>

      {/* Card */}
      <div
        className="
          w-[90%]
          bg-[#f6f5fb]
          rounded-xl
          flex
          justify-center
          z-10

          px-10
          py-16
          pl-[34%]

          lg:pl-[40%]

          max-md:w-full
          max-md:px-5
          max-md:pt-16
          max-md:pb-10
          max-md:pl-5
          max-md:-mt-16
          max-md:rounded-b-2xl
        "
      >
        <div
          className="
            flex
            flex-col
            items-start
            max-w-[500px]

            max-md:items-center
          "
        >
          {/* Label */}
          <span
            className="
              uppercase
              tracking-[0.15em]
              font-bold
              text-[18px]
              text-[#9283a8]
              mb-3
            "
          >
            Sale
          </span>

          {/* Title */}
          <h2
            className="
              text-[46px]
              font-extrabold
              text-[#2d2a3f]
              leading-tight
              mb-5

              lg:text-[38px]
              md:text-[34px]
              max-md:text-center
              max-md:text-[32px]
            "
          >
            Enjoy up to{" "}
            <span className="text-[#9283a8]">
              70% off!
            </span>
          </h2>

          {/* Description */}
          <p
            className="
              text-[#5e5c6b]
              text-[18px]
              leading-7
              text-center
              mb-8
            "
          >
            Grab your limited-time discount and
            <br />
            enjoy 70% off on all our products
          </p>

          {/* Button */}
          <button
            className="
              bg-[#8b7ba8]
              text-white
              px-12
              py-4
              font-semibold
              tracking-wide
              transition-all
              duration-300
              hover:bg-[#7a6a96]
              hover:-translate-y-1
            "
            style={{
              clipPath:
                "polygon(0 0,100% 0,85% 100%,0 100%)",
            }}
          >
            SHOP NOW
          </button>
        </div>
      </div>
    </section>
  );
}