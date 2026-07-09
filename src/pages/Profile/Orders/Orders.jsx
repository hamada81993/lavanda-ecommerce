import OrderCard from "./OrderCard";
import { useGetOrdersQuery } from "../../../redux/orders/ordersApi";

export default function Orders() {
  const {
    data,
    isLoading,
    error,
  } = useGetOrdersQuery();

  const orders = data?.data || [];

  const currentPage = data?.current_page || 1;
  const lastPage = data?.last_page || 1;

  const mappedOrders = orders.map((item) => ({
    id: item.id,

    order_number: `LAV-${String(item.id).padStart(
      3,
      "0"
    )}`,

    status: item.status,

    date: item.created_at.split("T")[0],

    items: JSON.parse(item.order_details).length,

    total: item.total_amount,
  }));

  if (isLoading) {
    return (
      <div className="bg-white rounded-3xl border border-[#ECE7F5] shadow-sm overflow-hidden">
        <div className="flex justify-center items-center h-[600px]">
          <span className="text-lg text-[#8F7AAE]">
            Loading...
          </span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-3xl border border-[#ECE7F5] shadow-sm overflow-hidden">
        <div className="flex justify-center items-center h-[600px]">
          <span className="text-red-500">
            Something went wrong
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl border border-[#ECE7F5] shadow-sm overflow-hidden">
      {/* Header */}

      <div className="px-8 py-7 border-b border-[#F2EEF8]">
        <h2 className="text-[34px] font-bold text-[#35264B]">
          Order History
        </h2>

        <p className="text-[#9993A9] mt-2">
          View all your previous orders.
        </p>
      </div>

      {/* Body */}

      <div className="p-8 space-y-5 min-h-[650px]">
        {mappedOrders.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[450px]">
            <div className="text-7xl mb-5">
              📦
            </div>

            <h3 className="text-[28px] font-bold text-[#35264B]">
              No Orders Yet
            </h3>

            <p className="text-[#8F8AA3] mt-3">
              Your orders will appear here after shopping.
            </p>
          </div>
        ) : (
          <>
            {mappedOrders.map((order) => (
              <OrderCard
                key={order.id}
                order={order}
              />
            ))}

            {lastPage > 1 && (
              <div className="flex justify-center gap-3 mt-8">
                {Array.from({
                  length: lastPage,
                }).map((_, index) => (
                  <button
                    key={index}
                    className={`w-10 h-10 rounded-xl transition ${
                      currentPage === index + 1
                        ? "bg-[#8F7AAE] text-white"
                        : "border border-[#ECE7F5]"
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}