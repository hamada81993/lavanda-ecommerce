import { Gift, Heart, Package } from "lucide-react";

export default function Dashboard(){
return (
  <div className="flex flex-col gap-6">

    {/* ================= Stats ================= */}

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      {/* Orders */}
      <div
        className="
        bg-white
        rounded-xl
        border border-[#E2E2E9]
        shadow-[0_4px_12px_rgba(0,0,0,.02)]
        h-[150px]
        flex
        flex-col
        items-center
        justify-center
        transition-all
        duration-200
        hover:-translate-y-1
        hover:shadow-[0_6px_16px_rgba(0,0,0,.04)]
      "
      >
        <div className="mb-3">
          <Package className="w-7 h-7 text-primary" />
        </div>

        <h3 className="text-[30px] font-bold text-text leading-none">
          2
        </h3>

        <p className="mt-2 text-[13px] font-medium text-[#7D7A8D]">
          {/* {t("dashboard.activeOrders")} */}
          Active Orders

        </p>
      </div>

      {/* Wishlist */}

      <div
        className="
        bg-white
        rounded-xl
        border border-[#E2E2E9]
        shadow-[0_4px_12px_rgba(0,0,0,.02)]
        h-[150px]
        flex
        flex-col
        items-center
        justify-center
        transition-all
        duration-200
        hover:-translate-y-1
        hover:shadow-[0_6px_16px_rgba(0,0,0,.04)]
      "
      >
        <div className="mb-3">
          <Heart className="w-7 h-7 text-primary" />
        </div>

        <h3 className="text-[30px] font-bold text-text leading-none">
          6
        </h3>

        <p className="mt-2 text-[13px] font-medium text-[#7D7A8D]">
          {/* {t("dashboard.wishlist")} */}
          Wishlist
        </p>
      </div>

      {/* Points */}

      <div
        className="
        bg-white
        rounded-xl
        border border-[#E2E2E9]
        shadow-[0_4px_12px_rgba(0,0,0,.02)]
        h-[150px]
        flex
        flex-col
        items-center
        justify-center
        transition-all
        duration-200
        hover:-translate-y-1
        hover:shadow-[0_6px_16px_rgba(0,0,0,.04)]
      "
      >
        <div className="mb-3">
          <Gift className="w-7 h-7 text-primary" />
        </div>

        <h3 className="text-[30px] font-bold text-text leading-none">
          1,500
        </h3>

        <p className="mt-2 text-[13px] font-medium text-[#7D7A8D]">
          {/* {t("dashboard.points")} */}
          Points
        </p>
      </div>
    </div>

    {/* ================= Recent Orders ================= */}

    <div
      className="
      bg-white
      rounded-xl
      border border-[#E2E2E9]
      shadow-[0_4px_12px_rgba(0,0,0,.02)]
      p-8
    "
    >
      <h2
        className="
        text-[22px]
        font-bold
        text-[#1A1A1A]
        mb-6
      "
      >
        {/* {t("dashboard.recentOrders")} */}
        Recent Orders
 
      </h2>

      <div className="space-y-4">

        {/* Row */}

        <div
          className="
          flex
          items-center
          justify-between
          bg-[#F9F9FC]
          rounded-lg
          px-6
          py-5
          transition
          hover:bg-[#F3F3F8]
        "
        >
          <div className="flex items-center gap-5">

            <span className="font-bold text-[15px] text-[#1A1A1A]">
              #LAV-001
            </span>

            <span className="text-sm text-[#7D7A8D]">
              2026-03-25
            </span>

          </div>

          <div className="flex items-center gap-6">

            <span
              className="
              px-4
              py-1.5
              rounded-full
              bg-[#EEF8F3]
              text-[#27AE60]
              text-xs
              font-semibold
            "
            >
              {/* {t("dashboard.delivered")} */}
              Delivered
            </span>

            <span className="font-bold text-[15px] text-[#1A1A1A]">
              $285.50
            </span>

          </div>
        </div>

        {/* Row */}

        <div
          className="
          flex
          items-center
          justify-between
          bg-[#F9F9FC]
          rounded-lg
          px-6
          py-5
          transition
          hover:bg-[#F3F3F8]
        "
        >
          <div className="flex items-center gap-5">

            <span className="font-bold text-[15px] text-[#1A1A1A]">
              #LAV-001
            </span>

            <span className="text-sm text-[#7D7A8D]">
              2026-03-25
            </span>

          </div>

          <div className="flex items-center gap-6">

            <span
              className="
              px-4
              py-1.5
              rounded-full
              bg-[#FDF3E8]
              text-[#B77C3E]
              text-xs
              font-semibold
            "
            >
              {/* {t("dashboard.processing")} */}
              Processing
            </span>

            <span className="font-bold text-[15px] text-[#1A1A1A]">
              $285.50
            </span>

          </div>
        </div>

      </div>
    </div>

  </div>
);
}