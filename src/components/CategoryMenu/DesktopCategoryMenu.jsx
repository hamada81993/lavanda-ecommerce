import { Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import DropdownRenderer from "../sections/DropdownRenderer";
import { menuThemes } from "../../theme/megaMenuThemes";

export default function DesktopCategoryMenu({
  categories = [],
}) {
  return (
    <>
      {categories.map((category, index) => (
        <li
          key={category.id}
          className="relative group static"
        >
          <Link
            to={`/category/${category.id}`}
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
          </Link>

          <DropdownRenderer
            category={category}
            theme={
              menuThemes[index % menuThemes.length]
            }
          />
        </li>
      ))}
    </>
  );
}