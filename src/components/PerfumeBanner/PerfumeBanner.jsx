import { motion } from "framer-motion";

export default function PerfumeBanner({ bgImage, bottleImage }) {
  return (
    <div
      className="
        relative
        flex flex-col md:flex-row
        bg-[#9080b0]
        rounded-xl
        shadow-[0_10px_30px_rgba(144,128,176,0.2)]
        overflow-hidden
        my-8
        min-h-[260px]
      "
    >
      {/* Left Side */}
      <div
        className="
          w-full md:w-1/2
          relative
          bg-[hsl(250,21%,95%)]
          h-[250px] md:h-auto
          overflow-hidden
        "
      >
        <img
          src={bgImage}
          alt="Model"
          className="
            absolute
            top-0 md:top-[50px]
            left-0
            w-full md:w-[70%]
            h-full
            object-cover
            scale-x-[-1]
            md:scale-[1.5]
          "
        />
      </div>

      {/* Right Side */}
      <div
        className="
          w-full md:w-1/2
          flex flex-col
          justify-center
          items-center
          text-center
          px-5 md:px-20
          pt-24 md:pt-5
          pb-10
          relative
          z-20
        "
      >
        <h3
          className="
            text-white
            font-extrabold
            text-2xl md:text-4xl
            mb-3
          "
        >
          Your Journey to Glass Skin Starts Here.
        </h3>

        <p
          className="
            text-white/95
            text-sm md:text-base
            leading-relaxed
            mb-6
          "
        >
          Unlock the secret to that dew-drenched, poreless Korean glow
          with our curated Bakuchiol essence.
        </p>

        <button
          className="
            bg-white
            text-[#9080b0]
            font-extrabold
            text-sm
            tracking-widest
            px-10 py-3
            uppercase
            shadow-md
            hover:-translate-y-1
            transition
          "
          style={{
            clipPath: "polygon(0 0,100% 0,85% 100%,0 100%)",
          }}
        >
          Reveal The Glow
        </button>
      </div>

      {/* Pill */}
      <div
        className="
          absolute
          left-1/2
          top-[250px] md:top-1/2
          -translate-x-1/2
          md:-translate-y-1/2
          z-30

          w-[85%] md:w-1/2

          flex flex-col md:flex-row
          items-center
          justify-between

          gap-2
          px-5 py-2 md:px-8 md:py-3

          rounded-2xl md:rounded-full

          bg-white/15
          backdrop-blur-md
          border border-white/80
        "
      >
        <span className="text-white font-extrabold text-sm md:text-lg">
          Glass Skin Loading
        </span>

        <svg
          className="animate-spin"
          style={{ animationDuration: "8s" }}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2.5"
          strokeDasharray="2 6"
          strokeLinecap="round"
        >
          <circle cx="12" cy="12" r="9" />
        </svg>
      </div>

      {/* Bottle */}
      <motion.img
  src={bottleImage}
  alt="Bottle"
  className="
    absolute
    left-1/2
    top-1/2

    -translate-x-1/2
    -translate-y-1/2

  w-auto
  h-[300px]
  md:h-[300px]


    z-30
object-contain

    drop-shadow-[15px_25px_20px_rgba(0,0,0,0.3)]
  "
  style={{ rotate: -15 }}
  animate={{ y: [0, -10, 0] }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: 'easeInOut',
  }}
/>
    </div>
  );
}