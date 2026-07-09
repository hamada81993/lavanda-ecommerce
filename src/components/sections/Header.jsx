import {
  FiSearch,
  FiHeart,
  FiShoppingBag,
  FiUser,
  FiGlobe,
  FiChevronDown,
  FiSliders,
  FiBell,
   FiMenu,
  FiX,
} from "react-icons/fi";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { brand } from "../../config/brand";
import { navigation } from "../../config/navigation";
import Logo from "../Header/Logo";
import SearchBar from "../SearchBar/SearchBar";
import HeaderActions from "../Header/HeaderActions";
import FilterDrawer from "../Header/FilterDrawer";
import Navigation from "../Header/Navigation";
import MobileMenu from "../Header/MobileMenu";
import { useGetWishlistQuery } from "../../redux/wishlist/wishlistApi";
import { useGetCartQuery } from "../../redux/cart/cartApi";
;
export default function Header() {
   const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const[openMenu,setOpenMenu]=useState();

  const { data: wishlistData } =
  useGetWishlistQuery();

const wishlistItems =
  wishlistData?.data ?? [];

const wishlistCount =
  wishlistItems.length;



  const [mobileMenuOpen, setMobileMenuOpen] =
  useState(false);

const [showMobileSearch, setShowMobileSearch] =
  useState(false);
    const location = useLocation(); 
 const navigate = useNavigate();

const { data: cartData } =
  useGetCartQuery();

const cartCount =
  cartData?.count || 0;
  // const handleNavigate = (path) => {
  //   if (path) navigate(path);
  // };
const handleToggleFilter = (id) => {
  setSelectedFilters((prev) =>
    prev.includes(id)
      ? prev.filter((item) => item !== id)
      : [...prev, id]
  );
};
const handleResetFilters = () => {
  setSelectedFilters([]);
};

const handleApplyFilters = () => {
  console.log(selectedFilters);
  setIsFilterDrawerOpen(false);
};
  const handleNavigate = (category, type) => {
  navigate(`/${category}/${type}`);
};



  return (

  <header className="sticky top-0 z-50 bg-white shadow-sm">

    {/* ================= MOBILE ================= */}
    <div className="lg:hidden border-b border-gray-200">

      <div className="flex items-center justify-between px-4 py-3">

        {/* Left */}
        <div className="flex items-center gap-4">

          <button
            onClick={() =>
              setShowMobileSearch(
                !showMobileSearch
              )
            }
          >
            <FiSearch size={22} />
          </button>

          <div
            className="relative cursor-pointer"
            onClick={() =>
              navigate("/cart")
            }
          >
            <FiShoppingBag size={22} />

            {cartCount > 0 && (
              <span
                className="
                absolute
                -top-2
                -right-2
                bg-primary
                text-white
                text-[10px]
                w-5
                h-5
                rounded-full
                flex
                items-center
                justify-center
              "
              >
                {cartCount}
              </span>
            )}
          </div>
        </div>

        {/* Logo */}
        <Logo />

        {/* Right */}
        <div className="flex items-center gap-4">

          <FiUser
            size={22}
            className="cursor-pointer"
          />

          <button
            onClick={() =>
              setMobileMenuOpen(true)
            }
          >
            <FiMenu size={24} />
          </button>

        </div>
      </div>

      {/* Mobile Search */}

      {showMobileSearch && (
        <div className="px-4 pb-4">

          <SearchBar
            onFilterClick={() =>
              setIsFilterDrawerOpen(true)
            }
          />

        </div>
      )}
    </div>

    {/* ================= DESKTOP ================= */}

    <div className="hidden lg:block">

      <div className="border-b border-gray-200">

        <div
          className="
          mx-auto
          max-w-[1600px]
          px-8
          py-5
          flex
          items-center
          justify-between
          gap-10
        "
        >
          <Logo />

          <SearchBar
            onFilterClick={() =>
              setIsFilterDrawerOpen(true)
            }
          />

          <HeaderActions
            cartCount={cartCount}
            wishlistCount={
              wishlistCount
            }
          />
        </div>
      </div>

     <Navigation onClose={() => setMobileMenuOpen(false)} />

    </div>

    {/* Filter Drawer */}

    <FilterDrawer
      isOpen={isFilterDrawerOpen}
      onClose={() =>
        setIsFilterDrawerOpen(false)
      }
      selectedFilters={
        selectedFilters
      }
      handleToggleFilter={
        handleToggleFilter
      }
      handleResetFilters={
        handleResetFilters
      }
      handleApplyFilters={
        handleApplyFilters
      }
    />

    {/* Mobile Menu */}

    <MobileMenu
      isOpen={mobileMenuOpen}
      onClose={() =>
        setMobileMenuOpen(false)
      }
      wishlistCount={wishlistCount}
      cartCount={cartCount}
    />

    {/* Toast */}

    {showToast && (
      <div
        className="
        fixed
        bottom-5
        right-5
        z-[60]
        bg-[#302245]
        text-white
        px-5
        py-3
        rounded-lg
        shadow-lg
      "
      >
        {toastMessage}
      </div>
    )}

  </header>
);
 
}
