import { useParams, useNavigate } from "react-router-dom";
import {
  FiArrowLeft,
  FiMapPin,
  FiCreditCard,
  FiTruck,
} from "react-icons/fi";

import { useGetOrderDetailsQuery } from "../../../redux/orders/ordersApi";
import { toast } from "react-toastify";

import {
  useRefundOrderMutation,
} from "../../../redux/orders/ordersApi";

export default function OrderDetails() {
  const { id } = useParams();

  const navigate = useNavigate();

  const {
    data,
    isLoading,
    error,
  } = useGetOrderDetailsQuery(id);
const [refundOrder] =
  useRefundOrderMutation();
  const handleRefund = async (productId) => {
  try {

    await refundOrder({
      order_id: order.id,
      refund_products: String(productId),
    }).unwrap();

    toast.success(
      "Refund Request Sent"
    );

  } catch (err) {

    toast.error(
      err?.data?.msg || "Refund Failed"
    );

  }
};
  const order = data?.data;

  if (isLoading) {
    return (
      <div className="bg-white rounded-3xl p-10">
        Loading...
      </div>
    );
  }

  if (error || !order) {
    return (
      <div className="bg-white rounded-3xl p-10">
        Order not found
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl border border-[#ECE7F5] shadow-sm">

      {/* Header */}

      <div className="px-8 py-6 border-b flex items-center justify-between">

        <div>

          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-[#8F7AAE] mb-4"
          >
            <FiArrowLeft />
            Back
          </button>

          <h2 className="text-[34px] font-bold text-[#35264B]">
            Order #{order.id}
          </h2>

          <p className="text-[#999] mt-2">
            {order.created_at.split("T")[0]}
          </p>

        </div>

        <span className="px-5 py-2 rounded-full bg-yellow-100 text-yellow-700 font-semibold capitalize">
          {order.status}
        </span>

      </div>

      {/* Body */}

      <div className="grid grid-cols-3 gap-8 p-8">

        {/* Left */}

        <div className="col-span-2">

          <h3 className="font-semibold text-xl mb-6">
            Products
          </h3>

          <div className="space-y-5">

            {order.order_details.map((product) => (

              <div
                key={product.id}
                className="border rounded-2xl p-5 flex gap-5"
              >

                <img
                  src={
                    product.options.image ||
                    "https://placehold.co/120x120"
                  }
                  className="w-24 h-24 rounded-xl object-cover"
                />

                <div className="flex-1">

                  <h4 className="font-semibold text-lg">
                    {product.name}
                  </h4>

                  <p className="text-[#777] mt-2">
                    Qty : {product.qty}
                  </p>

                  <h3 className="text-[#8F7AAE] text-xl font-bold mt-3">
                    ${product.price}
                  </h3>
      <button
        onClick={() => handleRefund(product.id)}
        className="
          mt-5
          px-5
          py-2
          rounded-full
          bg-[#8F7AAE]
          text-white
        "
      >
        Refund
      </button>
                </div>

              </div>

            ))}

          </div>

        </div>

        {/* Right */}

        <div className="space-y-6">

          <div className="border rounded-2xl p-5">

            <h3 className="font-semibold mb-4 flex items-center gap-2">

              <FiCreditCard />

              Payment

            </h3>

            <p className="capitalize">
              {order.payment_gateway.replaceAll(
                "_",
                " "
              )}
            </p>

            <p className="mt-2 capitalize">
              {order.payment_status}
            </p>

          </div>

          <div className="border rounded-2xl p-5">

            <h3 className="font-semibold mb-4 flex items-center gap-2">

              <FiTruck />

              Shipping

            </h3>

            <p>
              {order.get_country?.name}
            </p>

            <p>
              {order.get_state?.name}
            </p>

            <p>
              {order.address}
            </p>

          </div>

          <div className="border rounded-2xl p-5">

            <h3 className="font-semibold mb-4 flex items-center gap-2">

              <FiMapPin />

              Customer

            </h3>

            <p>{order.name}</p>

            <p>{order.email}</p>

            <p>{order.phone}</p>

          </div>

          <div className="bg-[#F7F5FB] rounded-2xl p-6">

            <div className="flex justify-between">

              <span>Total</span>

              <span className="font-bold text-[#8F7AAE]">
                ${order.total_amount}
              </span>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}