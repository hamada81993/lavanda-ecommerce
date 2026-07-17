// import { useState } from "react";
// import { X, ChevronUp, Search, RotateCcw } from "lucide-react";

// export default function CategoryFilterSidebar({
// isOpen,
// onClose,
// sections = [],
//  onApply,
// title = "Filters",
// }) {
// const [openSections, setOpenSections] = useState({});
// const [search, setSearch] = useState("");

// // selected filters
// const [selectedFilters, setSelectedFilters] = useState({});

// const toggleSection = (section) => {
// setOpenSections((prev) => ({
// ...prev,
// [section]: !prev[section],
// }));
// };

// const handleCheckboxChange = (sectionTitle, optionLabel) => {
// setSelectedFilters((prev) => ({
// ...prev,
// [sectionTitle]: {
// ...prev[sectionTitle],
// [optionLabel]: !prev[sectionTitle]?.[optionLabel],
// },
// }));
// };

// const handleReset = () => {
// setSelectedFilters({});
// setSearch("");
// };

// return (
// <>
// {/* Overlay Mobile */}
// {isOpen && ( <div
//        onClick={onClose}
//        className="fixed inset-0 bg-black/30 z-[1999] md:hidden"
//      />
// )}


//   <aside
//     className={`
//       fixed md:absolute top-0 left-0
//       w-full md:w-[320px]
//       h-screen md:h-auto
//       bg-white
//       shadow-[0_4px_24px_rgba(0,0,0,0.08)]
//       md:shadow-[4px_0_24px_rgba(0,0,0,0.04)]
//       z-[2000]

//       flex flex-col

//       transition-all duration-300 ease-in-out
//       ${
//         isOpen
//           ? "translate-x-0 opacity-100"
//           : "-translate-x-full opacity-0"
//       }
//     `}
//   >
//     {/* Header */}
//     <div className="flex justify-between items-center px-6 pt-5 pb-3">
//       <h3 className="text-[15px] font-bold text-[#111]">{title}</h3>

//       <button
//         onClick={onClose}
//         className="
//           w-8 h-8
//           rounded-full
//           bg-[#f7f3fb]
//           text-border-primary
//           flex items-center justify-center
//           hover:bg-[#eee6f5]
//           hover:scale-105
//           transition
//         "
//       >
//         <X size={14} />
//       </button>
//     </div>

//     {/* Content */}
//     <div
//       className="
//         flex-1
//         px-6 py-2
//         flex flex-col gap-5
//         overflow-y-auto
//       "
//     >
//       {sections.map((section) => (
//         <div key={section.title}>
//           {/* Section Title */}
//           <button
//             onClick={() => toggleSection(section.title)}
//             className="
//               flex justify-between items-center
//               w-full
//               text-[12px]
//               font-bold
//               text-[#111]
//               mb-3
//             "
//           >
//             {section.title}

//             <ChevronUp
//               size={14}
//               className={`transition-transform duration-300 ${
//                 openSections[section.title] === false
//                   ? "rotate-180"
//                   : ""
//               }`}
//             />
//           </button>

//           {/* Search Input */}
//           {section.searchable && (
//             <div className="relative mb-3">
//               <Search
//                 size={13}
//                 className="
//                   absolute
//                   left-3
//                   top-1/2
//                   -translate-y-1/2
//                   text-gray-400
//                 "
//               />

//               <input
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 placeholder={section.placeholder || "Search..."}
//                 className="
//                   w-full
//                   bg-btn-primary
//                   rounded-md
//                   text-[12px]
//                   pl-8
//                   pr-3
//                   py-2
//                   outline-none
//                 "
//               />
//             </div>
//           )}

//           {/* Options */}
//           {openSections[section.title] !== false && (
//             <div className="flex flex-col gap-2.5">
//               {section.options
//                 .filter((item) =>
//                   item.label
//                  .toLowerCase()
//     .includes(search.toLowerCase())
//                 )
//                 .map((item) => (
//                   <label
//                     key={item.id}
//                     className="
//                       flex items-center gap-2.5
//                       text-[12px]
//                       text-[#555]
//                       cursor-pointer
//                     "
//                   >
//                     {item.color && (
//                       <span
//                         className="w-3 h-3 rounded-full border"
//                         style={{ backgroundColor: item.color }}
//                       />
//                     )}

//                    <input
                 
//   type="checkbox"
//   checked={
//     selectedFilters[section.title]?.[item.id] || false
//   }
//   onChange={() =>
//     handleCheckboxChange(section.title, item.id)
//   }
// />

// <span>{item.label}</span>

              
//                   </label>
//                 ))}
//             </div>
//           )}
//         </div>
//       ))}
//     </div>

//     {/* Footer */}
//     <div className="p-5">
// <button
//   onClick={handleReset}
//   className="
//     w-full
//     h-10
//     rounded-lg
//     border
//     border-[#8F7AAE]
//     bg-white

//     flex
//     items-center
//     justify-center
//     gap-2

//     text-[14px]
//     font-medium
//    text-[var(--primaryText)]

//     hover:bg-[#FAF7FD]
//     transition
//   "
// >


//   {/* Text */}
 
//       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
//   <path d="M14.28 2C14.6998 2.00011 15.1088 2.13229 15.4493 2.37781C15.7898 2.62333 16.0444 2.96975 16.177 3.368L16.72 5H20C20.2652 5 20.5196 5.10536 20.7071 5.29289C20.8946 5.48043 21 5.73478 21 6C21 6.26522 20.8946 6.51957 20.7071 6.70711C20.5196 6.89464 20.2652 7 20 7L19.997 7.071L19.13 19.214C19.0759 19.9706 18.7372 20.6786 18.182 21.1956C17.6269 21.7125 16.8965 21.9999 16.138 22H7.862C7.10346 21.9999 6.37311 21.7125 5.81797 21.1956C5.26283 20.6786 4.92411 19.9706 4.87 19.214L4.003 7.07L4 7C3.73478 7 3.48043 6.89464 3.29289 6.70711C3.10536 6.51957 3 6.26522 3 6C3 5.73478 3.10536 5.48043 3.29289 5.29289C3.48043 5.10536 3.73478 5 4 5H7.28L7.823 3.368C7.9557 2.96959 8.21043 2.62305 8.5511 2.37752C8.89176 2.13198 9.30107 1.9999 9.721 2H14.28ZM17.997 7H6.003L6.865 19.071C6.88295 19.3232 6.99577 19.5592 7.18076 19.7316C7.36574 19.904 7.60916 19.9999 7.862 20H16.138C16.3908 19.9999 16.6343 19.904 16.8192 19.7316C17.0042 19.5592 17.117 19.3232 17.135 19.071L17.997 7ZM10 10C10.2449 10 10.4813 10.09 10.6644 10.2527C10.8474 10.4155 10.9643 10.6397 10.993 10.883L11 11V16C10.9997 16.2549 10.9021 16.5 10.7272 16.6854C10.5522 16.8707 10.313 16.9822 10.0586 16.9972C9.80416 17.0121 9.55362 16.9293 9.35817 16.7657C9.16271 16.6021 9.0371 16.3701 9.007 16.117L9 16V11C9 10.7348 9.10536 10.4804 9.29289 10.2929C9.48043 10.1054 9.73478 10 10 10ZM14 10C14.2652 10 14.5196 10.1054 14.7071 10.2929C14.8946 10.4804 15 10.7348 15 11V16C15 16.2652 14.8946 16.5196 14.7071 16.7071C14.5196 16.8946 14.2652 17 14 17C13.7348 17 13.4804 16.8946 13.2929 16.7071C13.1054 16.5196 13 16.2652 13 16V11C13 10.7348 13.1054 10.4804 13.2929 10.2929C13.4804 10.1054 13.7348 10 14 10ZM14.28 4H9.72L9.387 5H14.613L14.28 4Z" fill="#8F7AAE"/>
// </svg>
//     Reset All Filters
  
// </button>
//       <button
//   onClick={() => onApply(selectedFilters)}
//   className="
//     mt-3
//     w-full
//  btn-primary
//     text-white
//     rounded
//     py-2
//     font-semibold
//     hover:bg-[#7c6b98]
//     transition
//   "
// >
//   Apply Filters
// </button>
//     </div>
//   </aside>
// </>


// );
// }
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
