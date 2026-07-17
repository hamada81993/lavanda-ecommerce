export default function CheckoutSteps({ step }) {
  const steps = [
    "Shipping",
    "Payment",
    "Review",
  ];

  return (
    <div className="flex justify-center items-center mb-12">

      {steps.map((item, index) => (
        <div
          key={item}
          className="flex items-center"
        >
          <div className="flex items-center gap-3">

            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition
              ${
                step === index + 1
                  ? "bg-primary text-white"
                  : step > index + 1
                  ? "bg-green-500 text-white"
                  : "bg-[#ECE8F3] text-[#7B7484]"
              }`}
            >
              {index + 1}
            </div>

            <span
              className={`font-medium
              ${
                step === index + 1
                  ? "text-primary"
                  : "text-[#8F879A]"
              }`}
            >
              {item}
            </span>

          </div>

          {index !== steps.length - 1 && (
            <div className="w-28 h-[1px] bg-[#E5E0EC] mx-6"></div>
          )}

        </div>
      ))}

    </div>
  );
}