export default function Newsletter() {
  return (
    <section
      className="
        w-full
        bg-[linear-gradient(180deg,#FFF7F8_0%,#FDF2F4_100%)]
        py-20
      "
    >
      <div className="max-w-[1323px] mx-auto">

        <div className="flex flex-col items-center">

          {/* Title */}

         <h2
  className="
    font-['Playfair_Display']
    text-[54px]
    leading-[54px]
    font-bold
    text-[#302245]
    text-center
  "
>
  Get Beauty Tips in Your Inbox
</h2>
          {/* Description */}

          <p
            className="
              mt-4
              text-[20px]
              text-[#6B6B6B]
              text-center
               font-['Poppins']
            "
          >
            Subscribe and get 10% off your first order
          </p>

          {/* Form */}

          <form
            className="
              mt-10
              flex
              items-center
              gap-4
            "
          >
            <input
              type="email"
              placeholder="your email"
              className="
                w-[480px]
                h-[64px]
                rounded-full
                bg-[#9993A01A]
                px-8
                text-[18px]
                outline-none
                border
                border-[#ECE6F4]
                placeholder:text-[#B5B5B5]
              "
            />

            <button
              className="
                h-[64px]
                px-10
                rounded-full
                bg-[#101828]
                text-white
                text-[18px]
                font-semibold
                hover:opacity-90
                transition
              "
            >
              Subscribe
            </button>
          </form>

        </div>

      </div>
    </section>
  );
}