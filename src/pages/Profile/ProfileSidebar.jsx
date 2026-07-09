import {
  FaUser,
  FaBoxOpen,
  FaMapMarkerAlt,
  FaCreditCard,
  FaBell,
  FaCog,
  FaSignOutAlt,
  FaThLarge,
} from "react-icons/fa";

import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FiPackage, FiRotateCcw } from "react-icons/fi";
// import { logoutUser } from "../../redux/auth/authThunk";

export default function ProfileSidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const menus = [
    {
      name: "Dashboard",
      icon: <FaThLarge />,
      path: "/profile-layout",
      end: true,
    },

    {
      name: "Profile",
      icon: <FaUser />,
      path: "/profile-layout/profile",
    },

    {
      name: "Orders",
      icon: <FaBoxOpen />,
      path: "/profile-layout/orders",
    },
{
  name: "Refunds",
  icon: <FiRotateCcw/>,
  path: "/profile-layout/refunds",
},
    {
      name: "Addresses",
      icon: <FaMapMarkerAlt />,
      path: "/profile-layout/address",
    },

    {
      name: "Payment Method",
      icon: <FaCreditCard />,
      path: "/profile-layout/payment",
    },

    {
      name: "Notification",
      icon: <FaBell />,
      path: "/profile-layout/notification",
    },

    {
      name: "Setting",
      icon: <FaCog />,
      path: "/profile-layout/setting",
    },

  ];

//   const handleLogout = async () => {
//     await dispatch(logoutUser());

//     navigate("/login");
//   };

  return (
    <div className="w-[270px] bg-white rounded-3xl shadow-sm overflow-hidden border border-[#ECE7F5]">
      {/* Profile Card */}

      <div className="flex flex-col items-center py-8 border-b">
        <img
          src="https://i.pravatar.cc/120"
          alt=""
          className="w-24 h-24 rounded-full object-cover"
        />

        <h3 className="mt-4 text-[20px] font-semibold text-[#302245]">
          Tamara Omar
        </h3>

        <p className="text-sm text-[#777]">
          tamara2omar@gmail.com
        </p>
      </div>

      {/* Menu */}

      <div className="py-4">
        {menus.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.end}
            className={({ isActive }) =>
              `flex items-center gap-4 h-14 px-6 text-[15px] font-medium transition

              ${
                isActive
                  ? "bg-[#F3EEF9] text-[#8F7AAE] border-l-4 border-[#8F7AAE]"
                  : "text-[#555] hover:bg-[#F9F7FD]"
              }
            `
            }
          >
            <span className="text-lg">
              {item.icon}
            </span>

            {item.name}
          </NavLink>
        ))}

        <button
        //   onClick={handleLogout}
          className="
          w-full
          flex
          items-center
          gap-4
          h-14
          px-6
          text-red-500
          hover:bg-red-50
          transition
        "
        >
          <FaSignOutAlt />

          Log Out
        </button>
      </div>
    </div>
  );
}