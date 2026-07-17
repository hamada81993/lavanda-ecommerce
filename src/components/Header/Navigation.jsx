
import {  NavLink } from "react-router-dom";


import CategoryMenu from "../CategoryMenu/CategoryMenu";

export default function Navigation() {



  return (
    <nav className="hidden lg:block bg-white relative">
      <ul className="flex justify-center gap-10 py-4 text-sm font-medium">

      {/* Home */}
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? "text-primary font-semibold"
                : "text-[#302245] hover:text-primary"
            }
          >
            Home
          </NavLink>
        </li>

        {/* Categories */}
              <CategoryMenu/>

        {/* Blogs */}
        <li>
          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              isActive
                ? "text-primary font-semibold"
                : "text-[#302245] hover:text-primary"
            }
          >
            Blogs
          </NavLink>
        </li>

      </ul>
    </nav>
  );
}