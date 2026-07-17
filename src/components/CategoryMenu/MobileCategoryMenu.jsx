import { useState } from "react";
import { Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";

export default function MobileCategoryMenu({
  categories = [],
  onClose,
}) {
  const [openedCategory, setOpenedCategory] =
    useState(null);

  const toggleCategory = (id) => {
    setOpenedCategory((prev) =>
      prev === id ? null : id
    );
  };

  return (
    <>
      {categories.map((category) => (
        <div
          key={category.id}
          className="border-b border-gray-100"
        >
          {/* Main Category */}

          <button
            onClick={() =>
              toggleCategory(category.id)
            }
            className="
              w-full
              flex
              justify-between
              items-center
              py-4
              px-6
              text-left
              font-medium
              text-[#302245]
            "
          >
            {category.name}

            <FiChevronDown
              className={`transition-transform ${
                openedCategory === category.id
                  ? "rotate-180"
                  : ""
              }`}
            />
          </button>

          {/* Sub Categories */}

          {openedCategory === category.id && (
            <div className="pb-4">

              {category.sub_categories?.map((sub) => (
                <div key={sub.id}>

                  <Link
                    to={`/subcategory/${sub.id}`}
                    onClick={onClose}
                    className="
                      block
                      py-2
                      pl-10
                      text-sm
                      text-gray-700
                    "
                  >
                    {sub.name}
                  </Link>

                  {sub.child_categories?.length >
                    0 && (
                    <div className="pb-2">

                      {sub.child_categories.map(
                        (child) => (
                          <Link
                            key={child.id}
                            to={`/child-category/${child.id}`}
                            onClick={onClose}
                            className="
                              block
                              py-1
                              pl-16
                              text-[13px]
                              text-gray-500
                            "
                          >
                            {child.name}
                          </Link>
                        )
                      )}

                    </div>
                  )}

                </div>
              ))}

            </div>
          )}
        </div>
      ))}
    </>
  );
}