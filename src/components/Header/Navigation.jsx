// import { Link } from "react-router-dom";
// import { FiChevronDown } from "react-icons/fi";
// import { navigation } from "../../config/navigation";
// import MegaMenu from "../sections/MegaMenu";
// import TabbedMegaMenu from "../sections/TabbedMegaMenu";
// import DropdownRenderer from "../sections/DropdownRenderer";
// export default function Navigation() {
//   return (
//     <nav className="hidden lg:block bg-white relative">
//       <ul className="flex justify-center gap-10 py-4 text-sm font-medium">
//         {navigation.map((item) => (
//           <li
//             key={item.label}
//             className="relative group static"
//           >
//             {item.path ? (
//               <Link
//                 to={item.path}
//                 className="text-[#302245] hover:text-primary"
//               >
//                 {item.label}
//               </Link>
//             ) : (
//               <>
//                 <button
//                   className="
//                     flex items-center gap-1
//                     text-[#302245]
//                     hover:text-primary
//                   "
//                 >
//                   {item.label}
//                   <FiChevronDown size={14} />
//                 </button>

//                 <DropdownRenderer
//                   type={item.menuType}
//                   data={item}
//                 />

//                 <TabbedMegaMenu
//                   tabs={item.tabs}
//                 />
//               </>
//             )}
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// }



import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";

import { navigation } from "../../config/navigation";
import DropdownRenderer from "../sections/DropdownRenderer";
import TabbedMegaMenu from "../sections/TabbedMegaMenu";

import { useDispatch, useSelector } from "react-redux";
import { useGetAllCategoriesQuery } from "../../redux/categories/categoriesApi";

export default function Navigation() {
  const dispatch =
useDispatch();


const {
  data: allCategories = [],
  isLoading,
} = useGetAllCategoriesQuery();

  return (
    <nav className="hidden lg:block bg-white relative">
      <ul className="flex justify-center gap-10 py-4 text-sm font-medium">

        {navigation.map((item) => (
          
          <li
            key={item.label}
            className="relative"
          >
            <Link
              to={item.path}
              className="
                text-[#302245]
                hover:text-primary
              "
            >
              {item.label}
            </Link>
          </li>
          
        ))}

        {allCategories.map((category) => (
        <li
  key={category.id}
  className="relative group static"
>
  <button
    className="
      flex
      items-center
      gap-1
      text-[#302245]
      hover:text-primary
    "
  >
    {category.name}

    <FiChevronDown size={14} />
  </button>

  <DropdownRenderer
    category={category}
  />
 
</li>
        ))}
      </ul>
    </nav>
  );
}