export default function NewsletterSection() {
  return (
    <section
      className="
        relative
        w-full
        min-h-[400px]
        flex
        items-center
        justify-center
        bg-cover
        bg-center
        md:bg-fixed
        px-6
        py-20
      "
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=2000&auto=format&fit=crop')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-[1]" />

      {/* Content */}
      <div
        className="
          relative
          z-[2]
          text-center
          max-w-[600px]
          w-full
        "
      >
        <h2
          className="
            text-white
            font-bold
            text-[36px]
            md:text-[48px]
            mb-4
            drop-shadow-md
          "
        >
          Join Our Beauty Community
        </h2>

        <p
          className="
            text-slate-200
            text-base
            md:text-lg
            mb-8
            md:mb-10
            drop-shadow-sm
          "
        >
          Subscribe for exclusive offers and beauty tips
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex justify-center"
        >
          <div
            className="
              w-full
              max-w-[500px]
              relative

              md:flex

              border
              border-white/40
              bg-white/10
              backdrop-blur-md

              rounded-md
              overflow-hidden

              flex
              flex-col
              md:flex-row

              gap-3
              md:gap-0

              md:bg-white/10
            "
          >
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="
                flex-1
                px-5
                py-4

                md:pr-[140px]

                text-white
                bg-white/15
                md:bg-transparent

                rounded-lg
                md:rounded-none

                outline-none

                placeholder:text-white/70

                focus:bg-white/25
                focus:ring-2
                focus:ring-violet-500/30
              "
            />

            <button
              type="submit"
              className="
                md:absolute
                md:top-1
                md:right-1
                md:bottom-1

                w-full
                md:w-auto

                px-6

                bg-violet-400
                hover:bg-violet-500

                text-white
                font-medium
                text-sm

                rounded-lg
                md:rounded-md

                transition-colors
              "
            >
              Subscribe Now
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}