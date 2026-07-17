import { useState } from "react";
import { Link } from "react-router-dom";

export default function TabbedMegaMenu({ tabs = [] }) {
  const [activeTab, setActiveTab] = useState(0);

  if (!tabs.length) return null;

  const currentTab = tabs[activeTab] || tabs[0];

  return (
<div
  className="
    absolute
    top-full
    left-1/2
    -translate-x-1/2

    mt-0

    w-[1080px]
    max-w-[90vw]

    bg-white

    rounded-[24px]

    px-6
    py-5

    shadow-[0_20px_40px_rgba(48,34,69,0.08)]

    z-[1020]

    opacity-0
    invisible

    translate-y-[20px]

    group-hover:opacity-100
    group-hover:visible
    group-hover:translate-y-0

    transition-all
    duration-300
  "
>
      {/* Tabs */}
      <div className="flex gap-2 mb-8">
        {tabs.map((tab, index) => (
          <button
            key={tab.label}
            onMouseEnter={() => setActiveTab(index)}
            className={`px-4 py-2 rounded-full text-sm transition ${
              activeTab === index
                ? "bg-primaryLight text-primary"
                : "text-gray-500 hover:bg-gray-100"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="grid grid-cols-[1fr_1fr_1fr_250px] gap-8">
        {currentTab?.columns?.map((column, index) => (
          <div
            key={column.title}
            className={`${
              index !== currentTab.columns.length - 1
                ? "border-r border-gray-200 pr-6"
                : ""
            }`}
          >
            <h3 className="font-bold text-[15px] text-[#302245] mb-4">
              {column.title}
            </h3>

            <ul className="space-y-3">
              {column.links?.map((link, idx) => (
                <li key={idx}>
                  <Link to={link.path ?? "#"} className="text-sm text-gray-500 hover:text-primary transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Promo */}
        {currentTab?.promo && (
          <div className="bg-[#F6EFE7] rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-xl text-[#302245] mb-3">
                {currentTab.promo.title}
              </h3>

              <p className="text-sm text-gray-500">
                {currentTab.promo.text}
              </p>
            </div>

            <Link
              to={currentTab.promo.path ?? "#"}
              className="mt-8 h-11 flex items-center justify-center rounded-xl bg-primary text-white font-medium hover:bg-primaryDark transition"
            >
              Shop Now
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}