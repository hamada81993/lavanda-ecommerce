import bannerImage from "../../assets/img/skinCare/7.png";

export default function SkincareSection() {
  return (
    <section className="py-10">
   <div
  className="
    relative
    h-[400px]
    overflow-hidden
    rounded-[24px]
    bg-gradient-to-r
    from-[#dff0df]
    to-[#edf7ee]
    px-16
    flex
    items-center
  "
>
        {/* Left Content */}
        <div className="max-w-[420px] relative z-20">
          <h2
            className="
              text-[#184d42]
              text-4xl
              font-extrabold
              leading-tight
              mb-6
            "
          >
            Nourish Your Skin,
            <br />
            Radiate Confidence
          </h2>

          <p
            className="
              text-[#355d51]
              text-lg
              leading-8
            "
          >
            Our carefully crafted skincare products are
            formulated with the finest natural ingredients
            to address your unique skin concerns.
          </p>
        </div>

        {/* Product Image */}
       <div
  className="
    absolute
    right-0
    bottom-0
    h-full
    w-[45%]
    flex
    items-end
    justify-center
  "
>
  <img
    src={bannerImage}
    alt=""
    className="
      h-[115%]
      object-contain
    "
  />
</div>

        {/* White Floating Card */}
    <div
  className="
    absolute
    right-[80px]
    top-1/2
    -translate-y-1/2

    bg-white
    rounded-2xl
    shadow-lg

    w-[700px]
    
   py-2

    z-20
  "
>
  <p
    className="
      text-center
      text-[#184d42]
      font-semibold
      text-xs

      leading-relaxed
      whitespace-nowrap
    "
  >
    Our carefully crafted skincare products are formulated with
    the finest natural ingredients to address your unique skin
    concerns.
  </p>

  <div className="flex justify-center ">
    <span className="text-[#184d42] text-xs font-bold">
      &gt;
    </span>
  </div>
</div>
      </div>
    </section>
  );
}