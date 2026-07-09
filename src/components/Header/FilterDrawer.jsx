import { filterDrawerData } from "../../config/filterDrawerData";

export default function FilterDrawer({
  isOpen,
  onClose,
  selectedFilters,
  handleToggleFilter,
  handleResetFilters,
  handleApplyFilters,
}) {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
    <div
  onClick={onClose}
  className="
    fixed
    inset-0

    bg-[rgba(48,34,69,0.4)]

    z-[2999]

    transition-opacity
    duration-300
  "
/>

      {/* Sidebar */}
    <div
  className="
    fixed
    top-0
    right-0

    h-screen

    w-full
    sm:w-[380px]

    bg-white

    z-[3000]

    flex
    flex-col

    rounded-none
    sm:rounded-l-[32px]

    shadow-[-10px_0_40px_rgba(48,34,69,0.12)]
  "
>
        {/* Header */}
        <div
          className="
            flex
            items-center
            justify-between

            p-5
            border-b
          "
        >
          <h2 className="text-xl font-semibold text-[text]">
            Filters
          </h2>

          <button
            onClick={onClose}
            className="text-2xl"
          >
            ×
          </button>
        </div>

        {/* Body */}
      <div
  className=" 
    flex-1
    overflow-y-auto
    px-5
    py-4
    space-y-6
  "
>
  {filterDrawerData.map((section) => (
    <div key={section.title}>
      <h3
        className="
          text-[11px]
          uppercase
          tracking-wide
          font-semibold
          text-muted
          mb-3
        "
      >
        {section.title}
      </h3>

      <div className="space-y-2">
        {section.items.map((item) => (
          <button
            key={item.id}
            onClick={() => handleToggleFilter(item.id)}
            className={`
              w-full
              text-left
              px-4
              py-3

              rounded-xl
              border

              transition

              ${
                selectedFilters.includes(item.id)
                  ? "border-primary bg-primaryLight text-primary font-medium"
                  : "border-gray-200 bg-white hover:border-primary"
              }
            `}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  ))}
</div>

        {/* Footer */}
 <div
  className="
    px-7
    py-6

    flex
    flex-col
    gap-3

    border-t
  "
>
         <button
  onClick={handleResetFilters}
  className="
    w-full

    h-12

    rounded-full

    border
    border-primary

    text-primary
    font-semibold

    hover:bg-primaryLight

    transition
  "
>
  Reset Filters
</button>

         <button
  onClick={handleApplyFilters}
  className="
    w-full

    h-12

    rounded-full

    bg-primary
    text-white

    font-semibold

    hover:opacity-90

    transition
  "
>
  Apply Filters
</button>
        </div>
      </div>
    </>
  );
}