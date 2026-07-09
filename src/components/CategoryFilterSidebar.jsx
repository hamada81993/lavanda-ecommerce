import { useState } from "react";
import { X, ChevronUp, Search, RotateCcw } from "lucide-react";

export default function CategoryFilterSidebar({
isOpen,
onClose,
sections = [],
title = "Filters",
}) {
const [openSections, setOpenSections] = useState({});
const [search, setSearch] = useState("");

// selected filters
const [selectedFilters, setSelectedFilters] = useState({});

const toggleSection = (section) => {
setOpenSections((prev) => ({
...prev,
[section]: !prev[section],
}));
};

const handleCheckboxChange = (sectionTitle, optionLabel) => {
setSelectedFilters((prev) => ({
...prev,
[sectionTitle]: {
...prev[sectionTitle],
[optionLabel]: !prev[sectionTitle]?.[optionLabel],
},
}));
};

const handleReset = () => {
setSelectedFilters({});
setSearch("");
};

return (
<>
{/* Overlay Mobile */}
{isOpen && ( <div
       onClick={onClose}
       className="fixed inset-0 bg-black/30 z-[1999] md:hidden"
     />
)}


  <aside
    className={`
      fixed md:absolute top-0 left-0
      w-full md:w-[320px]
      h-screen md:h-auto
      bg-white
      shadow-[0_4px_24px_rgba(0,0,0,0.08)]
      md:shadow-[4px_0_24px_rgba(0,0,0,0.04)]
      z-[2000]

      flex flex-col

      transition-all duration-300 ease-in-out
      ${
        isOpen
          ? "translate-x-0 opacity-100"
          : "-translate-x-full opacity-0"
      }
    `}
  >
    {/* Header */}
    <div className="flex justify-between items-center px-6 pt-5 pb-3">
      <h3 className="text-[15px] font-bold text-[#111]">{title}</h3>

      <button
        onClick={onClose}
        className="
          w-8 h-8
          rounded-full
          bg-[#f7f3fb]
          text-border-primary
          flex items-center justify-center
          hover:bg-[#eee6f5]
          hover:scale-105
          transition
        "
      >
        <X size={14} />
      </button>
    </div>

    {/* Content */}
    <div
      className="
        flex-1
        px-6 py-2
        flex flex-col gap-5
        overflow-y-auto
      "
    >
      {sections.map((section) => (
        <div key={section.title}>
          {/* Section Title */}
          <button
            onClick={() => toggleSection(section.title)}
            className="
              flex justify-between items-center
              w-full
              text-[12px]
              font-bold
              text-[#111]
              mb-3
            "
          >
            {section.title}

            <ChevronUp
              size={14}
              className={`transition-transform duration-300 ${
                openSections[section.title] === false
                  ? "rotate-180"
                  : ""
              }`}
            />
          </button>

          {/* Search Input */}
          {section.searchable && (
            <div className="relative mb-3">
              <Search
                size={13}
                className="
                  absolute
                  left-3
                  top-1/2
                  -translate-y-1/2
                  text-gray-400
                "
              />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={section.placeholder || "Search..."}
                className="
                  w-full
                  bg-[#f5f5f5]
                  rounded-md
                  text-[12px]
                  pl-8
                  pr-3
                  py-2
                  outline-none
                "
              />
            </div>
          )}

          {/* Options */}
          {openSections[section.title] !== false && (
            <div className="flex flex-col gap-2.5">
              {section.options
                .filter((item) =>
                  item.label
                    .toLowerCase()
                    .includes(search.toLowerCase())
                )
                .map((item) => (
                  <label
                    key={item.label}
                    className="
                      flex items-center gap-2.5
                      text-[12px]
                      text-[#555]
                      cursor-pointer
                    "
                  >
                    {item.color && (
                      <span
                        className="w-3 h-3 rounded-full border"
                        style={{ backgroundColor: item.color }}
                      />
                    )}

                    <input
                      type="checkbox"
                      checked={
                        selectedFilters[section.title]?.[
                          item.label
                        ] || false
                      }
                      onChange={() =>
                        handleCheckboxChange(
                          section.title,
                          item.label
                        )
                      }
                      className="
                        w-[14px]
                        h-[14px]
                        bg-primary
                      "
                    />

                    {item.label}
                  </label>
                ))}
            </div>
          )}
        </div>
      ))}
    </div>

    {/* Footer */}
    <div className="p-5">
      <button
        onClick={handleReset}
        className="
          w-full
          border
          border-bg-primary
          text-bg-primary
          rounded-md
          py-2
          text-[13px]
          font-semibold

          flex
          items-center
          justify-center
          gap-2

          hover:bg-[#fdfbfd]
          transition
        "
      >
        <RotateCcw size={14} />
        Reset All Filters
      </button>
    </div>
  </aside>
</>


);
}
