import {
  FiTruck,
  FiRefreshCcw,
  FiShield,
  FiCreditCard,
} from "react-icons/fi";

export default function FeatureBar() {
//   const { t } = useTranslation("common");

  const features = [
    {
      icon: <FiTruck size={28} />,
    //   title: t("freeShipping"),
      title: "freeShipping",
      description: "freeShippingDesc",
    },
    {
      icon: <FiRefreshCcw size={28} />,
      title: "securePayment",
      description: "securePaymentDesc"
    },
    {
      icon: <FiShield size={28} />,
      title: "securePayment",
      description: "securePaymentDesc"
    },
    {
      icon: <FiCreditCard size={28} />,
      title: "giftCards",
      description: "giftCardsDesc",
    },
  ];

  return (
    <>
    
      {/* Feature Cards */}
      <section className="w-full pb-8">
        <div
          className="
            container
            mx-auto
            px-6
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-6
          "
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="
                bg-white
                border
                border-[#E0E0E0]
                rounded-xl
                py-4
                px-4

                flex
                flex-col
                items-center
                gap-2

                hover:shadow-lg
                transition-all
                duration-300
              "
            >
              <div
                className="
                  text-[#a78bfa]
                  transition-transform
                  duration-300
                  hover:-translate-y-1
                "
              >
                {feature.icon}
              </div>

              <div className="text-center">
                <h4
                  className="
                    text-[#302245]
                    font-semibold
                    text-base
                  "
                >
                  {feature.title}
                </h4>

                <p
                  className="
                    text-[#94a3b8]
                    text-sm
                    mt-1
                  "
                >
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Subscribe Section */}
      <section
        className="
          w-full
          py-[100px]
          px-5
          bg-gradient-to-r
          from-[#884FB0]
          to-[#B65FA0]
        "
      >
        <div
          className="
            max-w-[900px]
            mx-auto
            text-center
          "
        >
          <h2
            className="
              text-white
              font-bold
              text-[40px]
              md:text-[54px]
              leading-[1]
              font-serif
            "
          >
            {/* {t("subscribeTitle")} */}
           Subscribe to Our Newsletter

          </h2>

          <p
            className="
              text-white/80
              text-lg
              md:text-[20px]
              leading-[31px]
              mt-5
              mb-10
            "
          >
            {/* {t("subscribeDesc")} */}
            Get 10% off your first order + exclusive beauty tips
          </p>

          <form
            className="
              flex
              flex-col
              md:flex-row
              justify-center
              items-center
              gap-4
            "
          >
            <input
  type="email"
  placeholder="Enter your email"
  className="
    w-full
    md:w-[450px]
    h-[60px]

    px-6

    rounded-full
    border
    border-white/50

    bg-transparent
    text-white

    outline-none

    placeholder:text-white/70

    focus:border-white
    focus:ring-2
    focus:ring-white/20
  "
/>

            <button
              type="submit"
              className="
                w-full
                md:w-auto

                h-[60px]
                px-10

                rounded-full

                bg-white
                text-[#2d2340]

                font-semibold
                text-lg

                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              {/* {t("subscribeBtn")} */}
              subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}