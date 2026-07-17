
import { Link } from 'react-router-dom';
import logoImage from '../../assets/img/headerLogo.png';
import { siteSettings, socialLinks } from "../../config/siteSettings";

export default function Footer() { 
  return (
    <footer className="bg-gradient-to-b from-[#111827] to-[#030712] text-[#e2e8f0] pt-16">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* TOP */}
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_4fr_2fr] gap-12 pb-12 border-b border-white/10">

          {/* BRAND */}
          <div className="flex flex-col gap-5 max-w-sm">
          
       <div className="flex items-center">
 <Link to="/" > 
   <img
  src={siteSettings.brand.logo}
  alt={siteSettings.brand.logo}
        className="h-[38px] w-auto block"

/>
</Link>
</div>        

<p
  className="
    font-['Segoe_UI_Symbol']
    text-[14.05px]
    leading-[18.075px]
    font-normal
    text-[#9CA3AF]
  "
>
  Your destination for premium beauty products.
  <br />
  Discover the best in makeup, skincare, and more.
</p>

            <div className="flex flex-col gap-3">
             <h4
  className="
    font-['Segoe_UI_Symbol']
    text-[14.05px]
    leading-[18.075px]
    font-normal
    text-white
  "
>
  Subscribe to our Newsletter
</h4>

<div
  className="
    flex
    items-start
    gap-[6px]
    w-full
  "
>
  <input
    type="email"
    placeholder="Enter email"
    className="
      flex-1
      rounded-[8px]
      bg-[#1F2937]
      px-[12px]
      pt-[8px]
      pb-[7px]
      text-white
      text-[14px]
      outline-none
      placeholder:text-[#64748B]
    "
  />

  <button
    className="
      rounded-[8px]
      bg-primary
      px-5
      py-[8px]
      text-sm
      font-medium
      text-white
      hover:opacity-90
      transition
    "
  >
    Subscribe
  </button>
</div>
            </div>

            {/* SOCIAL */}
  <div className="flex gap-3 mt-2">
  {socialLinks.map((item, index) => {
    
    

    return (
      <a
        key={index}
        href={item.url}
        target="_blank"
        rel="noreferrer"
        className="
          w-[36px]
          h-[36px]
          p-2
          flex
          items-center
          justify-center
          rounded-[10px]
          bg-[#1F2937]
          text-[#9CA3AF]
          hover:bg-primary
          hover:text-white
          transition-all
          duration-300
        "
      >
 {item.icon}      
 </a>
    );
  })}
</div>
          </div>

          {/* LINKS */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

            <div>
              <h3 className="text-white font-semibold mb-5">Shop</h3>
              <ul className="space-y-3 text-sm text-[#94a3b8]">
                <li>Makeup</li>
                <li>Skincare</li>
                <li>Hair Care</li>
                <li>Body Care</li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-5">Help</h3>
              <ul className="space-y-3 text-sm text-[#94a3b8]">
                <li>Contact</li>
                <li>FAQ</li>
                <li>Shipping</li>
                <li>Returns</li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-5">Company</h3>
              <ul className="space-y-3 text-sm text-[#94a3b8]">
                <li>About</li>
                <li>Careers</li>
                <li>Blog</li>
              </ul>
            </div>

          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-white font-semibold mb-5">Contact</h3>

            <ul className="space-y-4 text-sm text-[#94a3b8]">
              <li className="flex gap-3">
                📧 {siteSettings.contact.email}
              </li>
              <li className="flex gap-3">
                📞{siteSettings.contact.phone}
              </li>
              <li className="flex gap-3">
                📍 123 Beauty Street, NY
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-6 text-sm text-[#64748b]">

          <p>© 2026 Lavanda. All rights reserved</p>

          <div className="flex items-center gap-3 flex-wrap">
            <span>We accept:</span>
            {["Visa", "MasterCard", "PayPal", "Apple Pay"].map((p) => (
              <span
                key={p}
                className="px-2 py-1 text-xs rounded border border-white/10 bg-white/5"
              >
                {p}
              </span>
            ))}
          </div>

        </div>

      </div>
    </footer>
  );
}