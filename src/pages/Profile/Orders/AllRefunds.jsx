import { useGetRefundHistoryQuery } from "../../../redux/orders/ordersApi";

export default function AllRefunds() {
  const { data, isLoading } =
    useGetRefundHistoryQuery();

  const refunds = data?.data || [];

  if (isLoading) {
    return (
      <div className="bg-white rounded-3xl p-10">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl border border-[#ECE7F5] shadow-sm overflow-hidden">
      <div className="px-8 py-7 border-b">
        <h2 className="text-[34px] font-bold text-[#35264B]">
          Refund History
        </h2>

        <p className="text-[#9993A9] mt-2">
          View your refund requests.
        </p>
      </div>

      <div className="p-8">

        {refunds.length === 0 ? (
          <div className="text-center py-24">
            <h3 className="text-2xl font-semibold">
              No Refund Requests
            </h3>
          </div>
        ) : (
          <div className="space-y-5">

            {refunds.map((refund) => (

              <div
                key={refund.id}
                className="border rounded-2xl p-6 flex justify-between"
              >
                <div>

                  <h3 className="font-bold">
                    Refund #{refund.id}
                  </h3>

                  <p className="text-[#777] mt-2">
                    Order #{refund.order_id}
                  </p>

                  <p className="text-[#777]">
                    Product #{refund.product_id}
                  </p>

                </div>

                <div>

                  <span
                    className={`px-4 py-2 rounded-full ${
                      refund.status === 0
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {refund.status === 0
                      ? "Pending"
                      : "Approved"}
                  </span>

                </div>
              </div>

            ))}

          </div>
        )}

      </div>
    </div>
  );
}