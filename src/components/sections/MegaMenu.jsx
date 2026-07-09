import { Link } from "react-router-dom";

export default function MegaMenu({ menu }) {
  return (
    <div
      className="
        absolute
        top-full
        left-1/2
        -translate-x-1/2

        mt-0

        w-[1080px]
        max-w-[90vw]

        bg-white

        rounded-[24px]

        px-6
        py-5

        shadow-[0_20px_40px_rgba(48,34,69,0.08)]

        z-[1020]

        opacity-0
        invisible

        translate-y-[20px]

        group-hover:opacity-100
        group-hover:visible
        group-hover:translate-y-0

        transition-all
        duration-300
      "
    >
      <div className="grid grid-cols-[1fr_1fr_1fr_250px] gap-8">
        {menu.columns.map((column, index) => (
          <div
            key={column.title}
            className={`
              ${
                index !== menu.columns.length - 1
                  ? "border-r border-[#F0F0F0] pr-6"
                  : ""
              }
            `}
          >
            <h3
              className="
                text-[14px]
                font-semibold
                text-[#302245]
                mb-4
              "
            >
              {column.title}
            </h3>

            <ul className="space-y-3">
              {column.links.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="
                      text-[14px]
                      font-normal
                      text-[#6B6B6B]
                      hover:text-primary
                      transition-colors
                    "
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Promo Card */}
        <div
          className="
            bg-[#F7EFE9]
            rounded-[20px]

            px-5
            py-6

            flex
            flex-col
            justify-between

            min-h-[270px]
          "
        >
          <div>
            <div className="flex justify-end mb-4">
              <span
                className="
                  bg-white
                  text-[#302245]

                  text-[10px]
                  font-semibold

                  px-3
                  py-1

                  rounded-full
                "
              >
                NEW
              </span>
            </div>

            <h3
              className="
                text-[22px]
                font-bold
                text-[#302245]
                mb-2
              "
            >
              {menu.promo.title}
            </h3>

            <p
              className="
                text-[14px]
                text-[#6B6B6B]
              "
            >
              {menu.promo.text}
            </p>
          </div>

          <Link
            to={menu.promo.path}
            className="
              h-[44px]

              flex
              items-center
              justify-center

              rounded-full

              bg-primary
              text-white

              text-sm
              font-medium

              transition
              hover:opacity-90
            "
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
}