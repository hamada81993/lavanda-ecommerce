// Logo.jsx

import { Link } from "react-router-dom";
import { siteSettings } from "../../config/siteSettings";


export default function Logo() {
  return (
    <Link to="/" className="flex items-center">
      
      <img
        src={siteSettings.brand.logo}
        alt={siteSettings.brand.logo}
       className="block h-[28px] sm:h-[32px] lg:h-[38px] w-auto"
      />
    </Link>
  );
}