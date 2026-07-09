import CheckoutSteps from "./CheckoutSteps";

export default function CheckoutLayout({
  children,
  summary,
  step,
}) {
  return (
    <div className="bg-[#FAF9FD] min-h-screen py-10">

      <div className="container mx-auto px-4">

        <CheckoutSteps step={step} />

        <div className="grid lg:grid-cols-[2fr_1fr] gap-8">

          <div>
            {children}
          </div>

          <div>
            {summary}
          </div>

        </div>

      </div>

    </div>
  );
}