import logo from "../assets/img/headerLogo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa6";
export const socialLinks = [
  {
    icon: FaFacebookF,
    url: "https://facebook.com",
  },
  {
    icon: FaInstagram,
    url: "https://instagram.com",
  },
  {
    icon: FaTiktok,
    url: "https://tiktok.com",
  },
  {
    icon: FaYoutube,
    url: "https://youtube.com",
  },
];
export const siteSettings = {
  brand: {
     name: "Lavanda",

  logo,

  colors: {
    primary: "text-primary",
    primaryLight: "#e6dfee",
    primaryDark: "#6d5b8c",
  },
  },

  theme: {
    primary: "#8A77A9",

    primaryLight: "#E6DFEE",

    primaryDark: "#6D5B8C",

    text: "#302245",

    muted: "#757575",

    background: "#F5F5FA",
  },

  contact: {
    phone: "+20 1000000000",

    email: "info@lavanda.com",

    address: "Cairo, Egypt",
  },

//  socials: {
//   facebook: "https://facebook.com/lavanda",
//   instagram: "https://instagram.com/lavanda",
//   tiktok: "https://tiktok.com/@lavanda",
//   youtube: "https://youtube.com",
//   twitter: "https://x.com/lavanda",
// },

  navigation: [
    {
    label: "Home",
    path: "/",
  },
  {
    label: "Makeup",
    megaMenu: {
      columns: [
        {
          title: "All Products",
          links: [
            { label: "Face", path: "/makeup/face" },
            { label: "Lips", path: "/makeup/lips" },
          ],
        },
        {
          title: "Korean Makeup",
          links: [
            { label: "Foundation", path: "/foundation" },
          ],
        },
        {
          title: "Essentials",
          links: [
            { label: "Concealer", path: "/concealer" },
          ],
        },
      ],
      promo: {
        title: "New Arrivals",
        text: "Latest Collection",
        path: "/new",
      },
    },
    menuType: "mega",
  },
{
  label: "Care",
  menuType: "tabbed",

  tabs: [
    {
      label: "Skincare",

      columns: [
        {
          title: "Cleansers & Prep",
          links: [
            { label: "Face Wash", path: "/care/face-wash" },
            { label: "Micellar Water", path: "/care/micellar-water" },
            { label: "Cleansing Balm", path: "/care/cleansing-balm" },
          ],
        },

        {
          title: "Toners & Mists",
          links: [
            { label: "Toner", path: "/care/toner" },
            { label: "Facial Mist", path: "/care/facial-mist" },
          ],
        },

        {
          title: "Treatments",
          links: [
            { label: "Sheet Mask", path: "/care/sheet-mask" },
            { label: "Clay Mask", path: "/care/clay-mask" },
          ],
        },
      ],

      promo: {
        title: "Top Skincare Picks",
        text: "Bestselling Products",
        path: "/care",
      },
    },

    {
      label: "Hair Care",

      columns: [
        {
          title: "Shampoo",
          links: [
            { label: "Anti-Dandruff", path: "/hair/anti-dandruff" },
            { label: "Moisturizing", path: "/hair/moisturizing" },
          ],
        },

        {
          title: "Oils & Serums",
          links: [
            { label: "Argan Oil", path: "/hair/argan" },
            { label: "Castor Oil", path: "/hair/castor" },
          ],
        },

        {
          title: "Styling",
          links: [
            { label: "Hair Gel", path: "/hair/gel" },
            { label: "Hair Spray", path: "/hair/spray" },
          ],
        },
      ],

      promo: {
        title: "Hair Essentials",
        text: "Complete Care Routine",
        path: "/hair-care",
      },
    },
  ],
},
  {
    label: "Perfumes",
    megaMenu: {
      columns: [
        {
          title: "Women",
          links: [
            { label: "Floral", path: "/perfumes/floral" },
            { label: "Fresh", path: "/perfumes/fresh" },
          ],
        },
        {
          title: "Men",
          links: [
            { label: "Woody", path: "/perfumes/woody" },
          ],
        },
        {
          title: "Luxury",
          links: [
            { label: "Exclusive", path: "/perfumes/luxury" },
          ],
        },
      ],
      promo: {
        title: "Best Sellers",
        text: "Top Perfume Collection",
        path: "/perfumes",
      },
    },
      
menuType: "mega",

  },
  {
    label: "Devices",
    megaMenu: {
      columns: [
        {
          title: "Face Care",
          links: [
            { label: "Floral", path: "/perfumes/floral" },
            { label: "Fresh", path: "/perfumes/fresh" },
          ],
        },
        {
          title: "Hair Tools",
          links: [
            { label: "Woody", path: "/perfumes/woody" },
          ],
        },
        {
          title: "Body Devices",
          links: [
            { label: "Exclusive", path: "/perfumes/luxury" },
          ],
        },
      ],
      promo: {
        title: "Tech Beauty",
        text: "Lastest Beauty Devices",
        path: "/devices",
      },
    },
      
menuType: "mega",

  },
  {
    label: "Brands",
    megaMenu: {
      columns: [
        {
          title: "K-BEAUTY",
          links: [
            { label: "Floral", path: "/perfumes/floral" },
            { label: "Fresh", path: "/perfumes/fresh" },
          ],
        },
        {
          title: "LUXURY",
          links: [
            { label: "Woody", path: "/perfumes/woody" },
          ],
        },
        {
          title: "POPULAR",
          links: [
            { label: "Exclusive", path: "/perfumes/luxury" },
          ],
        },
      ],
      promo: {
        title: "Brands Foucus",
        text: "Discover Top Brands",
        path: "/devices",
      },
    },
      
menuType: "mega",

  },
  {
    label: "Deals",
    megaMenu: {
      columns: [
        {
          title: "CURRENT DEALS",
          links: [
            { label: "Floral", path: "/perfumes/floral" },
            { label: "Fresh", path: "/perfumes/fresh" },
          ],
        },
        {
          title: "BY CATEGORY",
          links: [
            { label: "Woody", path: "/perfumes/woody" },
          ],
        },
        {
          title: "MEMBERSHIP",
          links: [
            { label: "Exclusive", path: "/perfumes/luxury" },
          ],
        },
      ],
      promo: {
        title: "Limted Time",
        text: "50% Off Everything",
        path: "/deals",
      },
    },
      
menuType: "mega",

  },
       {
    label: "Blogs",
    path: "/blogs",
  },
  ],
};