import { useState } from "react";
import { FiBell, FiGlobe, FiHeart, FiMenu, FiShoppingBag, FiUser } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function HeaderActions({
  cartCount,
  wishlistCount,
}){
const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] =
  useState(false);
    return(
 <>
  {/* Icons */}
<div
  className="
    flex
    items-center
    justify-center
    gap-5
    sm:gap-6
    lg:gap-4
    shrink-0
    w-full
    lg:w-auto
    mt-3
    lg:mt-0
   cursor-pointer
  "
> <div
   className="relative cursor-pointer"
   onClick={() => navigate("/cart")}
 >
  <FiShoppingBag className="w-5 h-5 lg:w-5 lg:h-5" />
 
   {cartCount > 0 && (
     <span
       className="
         absolute -top-2 -right-2
         bg-primary
         text-white
         text-[10px] font-bold
         w-5 h-5
         flex items-center justify-center
         rounded-full
       "
     >
       {cartCount}
     </span>
   )}
 </div>
 <div className="relative cursor-pointer" onClick={() => navigate("/wishlist")}>
   <FiHeart className="w-5 h-5 lg:w-5 lg:h-5" />
 
   {wishlistCount > 0 && (
     <span className="
   absolute -top-2 -right-2
bg-primary
   text-white
   text-[10px] font-bold
   w-5 h-5
   flex items-center justify-center
   rounded-full
 ">
   {wishlistCount}
 </span>
   )} 
 </div>            
 <FiGlobe className="w-5 h-5 lg:w-5 lg:h-5" />
             < FiBell className="w-5 h-5 lg:w-5 lg:h-5"/>
             <FiUser onClick={() => navigate("/register")} className="w-5 h-5 lg:w-5 lg:h-5" />
             <button
  onClick={() => setMobileMenuOpen(true)}
  className="lg:hidden flex items-center"
>
  <FiMenu className="w-6 h-6" />
</button>
             
             </div>
     
 </>
    )
}