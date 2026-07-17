import {
  FiX,
  FiUser,
  FiGlobe,
  FiBell,
} from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import CategoryMenu from "../CategoryMenu/CategoryMenu";


export default function MobileMenu({
  isOpen,
  onClose,
}) {
    const navigate = useNavigate();
  return (
    <>
      {/* Overlay */}

      <div
        onClick={onClose}
        className={`
          fixed
          inset-0
          bg-black/30
          backdrop-blur-sm
          z-40
          transition-all
          duration-300

          ${
            isOpen
              ? "opacity-100"
              : "opacity-0 pointer-events-none"
          }
        `}
      />

      {/* Drawer */}

      <div
        className={`
          fixed
          top-0
          right-0
          h-screen
          w-[360px]
          max-w-[90vw]
          bg-white
          z-50
          shadow-2xl
          overflow-y-auto

          transition-transform
          duration-300

          ${
            isOpen
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >
        {/* Header */}

        <div
  className="
    px-6
    py-5
    border-b
    border-[#EEE8F5]
    flex
    items-center
    justify-between
  "
>
  <div
    onClick={() => {
      navigate("/profile-layout");
      onClose();
    }}
    className="
      flex
      items-center
      gap-4
      cursor-pointer
      flex-1
    "
  >
    <div
      className="
        w-12
        h-12
        rounded-full
        bg-[#F5F1FA]
        flex
        items-center
        justify-center
      "
    >
      <FiUser    
        size={20}
        className="text-[#8F7AAE]"
      />
    </div>

    <div>
      <p
        className="
          text-[10px]
          uppercase
          tracking-[2px]
          text-[#A79AB8]
        "
      >
        Welcome
      </p>

      <h3
        className="
          text-lg
          font-semibold
          text-[#302245]
        "
      >
        View Profile
      </h3>
    </div>
  </div>

  <button
    onClick={onClose}
    className="
      w-10
      h-10
      rounded-full
      bg-[#F5F1FA]
      flex
      items-center
      justify-center
    "
  >
    <FiX />
  </button>
</div>

        {/* Home */}

        <Link
          to="/"
          onClick={onClose}
          className="
            flex
            items-center
            h-[58px]
            px-6
            border-b
            border-gray-100
            font-medium
          "
        >
          Home
        </Link>

        {/* Categories */}

        <CategoryMenu
          mobile
          onClose={onClose}
        />

        {/* Blogs */}

        <Link
          to="/blogs"
          onClick={onClose}
          className="
            flex
            items-center
            h-[58px]
            px-6
            border-b
            border-gray-100
            font-medium
          "
        >
          Blogs
        </Link>

 

          {/* Footer */}

        <div
          className="
            sticky
            bottom-0
            bg-white
            border-t
            border-[#F1EDF5]
            p-4
            flex
            gap-3
          "
        >
          <button
            className="
              flex-1
              h-12
              rounded-2xl
              border
              border-[#ECE6F4]
              bg-[#FAF8FC]
              text-[#4B4260]
              text-sm
              font-medium
              flex
              items-center
              justify-center
              gap-2
            "
          >
            <FiGlobe />
            العربية
          </button>

          <button
            className="
              flex-1
              h-12
              rounded-2xl
              border
              border-[#ECE6F4]
              bg-[#FAF8FC]
              text-[#4B4260]
              text-sm
              font-medium
              flex
              items-center
              justify-center
              gap-2
            "
          >
            <FiBell />
            Notifications
          </button>
        </div>

      </div>
    </>
  );
}