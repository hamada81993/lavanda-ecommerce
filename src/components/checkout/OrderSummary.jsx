import React from "react";

export default function OrderSummary({
  items = [],
  subtotal = 0,
  shipping = 0,
  tax = 0,
  discount = 0,
  total = 0,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-[#ECE8F3] p-6 sticky top-24">

      <h2 className="text-2xl font-bold text-[#2B213A] mb-6">
        Order Summary
      </h2>

      {/* Products */}

      <div className="space-y-4">

        {items.map((item) => (
          <div
            key={item.rowId}
            className="flex items-center gap-4 border-b border-[#F1EDF7] pb-4"
          >
            <img
              src={item.options.image}
              alt={item.name}
              className="w-16 h-16 rounded-xl object-cover border"
            />

            <div className="flex-1">

              <h4 className="font-semibold text-[#2B213A] text-sm">
                {item.name}
              </h4>

              <p className="text-[#8C8796] text-xs mt-1">
                Qty : {item.qty}
              </p>

            </div>

            <span className="font-semibold text-[#2B213A]">
              ${item.price}
            </span>

          </div>
        ))}

      </div>

      {/* Totals */}

      <div className="mt-6 space-y-4">

        <div className="flex justify-between text-[#6D6875]">
          <span>Subtotal</span>

          <span className="font-medium">
            ${Number(subtotal).toFixed(2)}
          </span>
        </div>

        <div className="flex justify-between text-[#6D6875]">
          <span>Shipping</span>

          <span
            className={
              shipping === 0
                ? "text-green-600 font-semibold"
                : "font-medium"
            }
          >
            {shipping === 0 ? "FREE" : `$${shipping}`}
          </span>
        </div>

        {discount > 0 && (
          <div className="flex justify-between text-green-600">
            <span>Discount</span>

            <span>
              -${Number(discount).toFixed(2)}
            </span>
          </div>
        )}

        {tax > 0 && (
          <div className="flex justify-between text-[#6D6875]">
            <span>Tax</span>

            <span>
              ${Number(tax).toFixed(2)}
            </span>
          </div>
        )}

      </div>

      <hr className="my-6 border-[#ECE8F3]" />

      <div className="flex justify-between items-center">

        <span className="text-xl font-bold text-[#2B213A]">
          Total
        </span>

        <span className="text-2xl font-bold text-primary">
          ${Number(total).toFixed(2)}
        </span>

      </div>

    </div>
  );
}