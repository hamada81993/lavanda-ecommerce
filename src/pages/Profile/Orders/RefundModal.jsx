import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { refundOrder } from "../../../redux/orders/ordersThunk";

export default function RefundModal({
  order,
  onClose,
}) {
  const dispatch = useDispatch();

  const [selectedProduct, setSelectedProduct] =
    useState("");

  const handleRefund = async () => {
    if (!selectedProduct) {
      toast.error("Select product");

      return;
    }

    try {
      await dispatch(
        refundOrder({
          order_id: order.id,
          refund_products: selectedProduct,
        })
      ).unwrap();

      toast.success(
        "Refund Request Sent Successfully"
      );

      onClose();
    } catch (err) {
      toast.error("Refund Failed");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white rounded-3xl w-[550px] p-8">

        <h2 className="text-2xl font-bold mb-6">
          Refund Request
        </h2>

        <label className="font-medium">
          Choose Product
        </label>

        <select
          className="w-full border rounded-xl h-12 px-4 mt-3"
          value={selectedProduct}
          onChange={(e) =>
            setSelectedProduct(e.target.value)
          }
        >
          <option value="">
            Select Product
          </option>

          {order.order_details.map((item) => (
            <option
              key={item.id}
              value={item.id}
            >
              {item.name}
            </option>
          ))}
        </select>

        <div className="flex justify-end gap-4 mt-8">
          <button
            onClick={onClose}
            className="px-6 h-11 rounded-full border"
          >
            Cancel
          </button>

          <button
            onClick={handleRefund}
            className="px-8 h-11 rounded-full bg-[#8F7AAE] text-white"
          >
            Send Request
          </button>
        </div>
      </div>
    </div>
  );
}