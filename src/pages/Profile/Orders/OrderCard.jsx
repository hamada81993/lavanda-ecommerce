import {
  FiTruck,
  FiRotateCcw,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const statusColors = {
  pending:
    "bg-[#FFF6E5] text-[#E8A317]",

  delivered:
    "bg-[#DFF6E5] text-[#26A65B]",

  processing:
    "bg-[#EAF2FF] text-[#4A90E2]",

  shipped:
    "bg-[#EAF2FF] text-[#4A90E2]",

  cancelled:
    "bg-[#FFE8E8] text-red-500",
};

export default function OrderCard({
  order,
}) {
  const navigate = useNavigate();

  return (
    <div
      className="
      bg-[#FAF9FD]
      rounded-2xl
      px-6
      py-5
      flex
      justify-between
      items-center
      border
      border-[#F2EEF8]
      hover:shadow-sm
      transition
    "
    >
      <div>
        <div className="flex items-center gap-3">
          <h3 className="font-bold text-[22px] text-[#35264B]">
            {order.order_number}
          </h3>

          <span
            className={`px-4 py-1 rounded-full text-sm capitalize font-medium ${
              statusColors[
                order.status
              ] ||
              "bg-gray-100 text-gray-600"
            }`}
          >
            {order.status}
          </span>
        </div>

        <p className="text-[#8E8AA3] text-[15px] mt-3">
          {order.date} • {order.items} Items
        </p>

        <p className="text-[#8E8AA3] mt-2 text-sm">
          Payment :
          <span className="ml-2 capitalize font-medium">
            {order.payment_status}
          </span>
        </p>
      </div>

      <div className="text-right">
        <h2 className="text-[32px] font-bold text-[#35264B]">
          ${order.total}
        </h2>

        <div className="flex items-center justify-end gap-6 mt-4">
          <button
            className="
            flex
            items-center
            gap-2
            text-[#8F7AAE]
            hover:text-[#6C4FB3]
            text-[15px]
          "
          >
            <FiTruck size={18} />
            Track
          </button>

          <button
            className="
            flex
            items-center
            gap-2
            text-[#8F7AAE]
            hover:text-[#6C4FB3]
            text-[15px]
          "
          >
            <FiRotateCcw size={18} />
            Re-order
          </button>

          <button
            onClick={() =>
              navigate(
                `/profile-layout/orders/${order.id}`
              )
            }
            className="
            h-11
            px-6
            rounded-full
            bg-[#8F7AAE]
            text-white
            hover:opacity-90
          "
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}