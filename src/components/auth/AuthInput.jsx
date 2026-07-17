import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { FiLock } from "react-icons/fi";
import { FiEye } from "react-icons/fi";

export default function AuthInput({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  error,
}) {
   const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";
  const renderIcon = () => {
    if (name?.includes("email"))
      return <FiMail size={18} />;

    if (
      name?.includes("password")
    )
      return <FiLock size={18} />;

    return <FiUser size={18} />;
  };

  return (
    <div className="space-y-2">
      <label
        className="
        text-[14px]
        font-medium
        text-[#302245]
      "
      >
        {label}
      </label>

      <div className="relative">
        <span
          className="
          absolute
          left-4
          top-1/2
          -translate-y-1/2
          text-[#A4A0B1]
        "
        >
          {renderIcon()}
        </span>

        <input
          id={name}
             type={
            isPassword
              ? showPassword
                ? "text"
                : "password"
              : type
          }
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="
          w-full
          h-[52px]

          rounded-xl

          border
          border-[#E6E6EF]

          pl-12
          pr-12

          text-[15px]

          outline-none

          transition

          focus:border-[#8F7AAE]
          focus:ring-2
          focus:ring-[#8F7AAE]/20
        "
        />

        {isPassword && (
          <button
            type="button"
            onClick={() =>
              setShowPassword(!showPassword)
            }
            className="
              absolute
              right-5
              top-1/2
              -translate-y-1/2
              text-[#9B94A8]
              hover:text-[#8F7AAE]
            "
          >
            {showPassword ? (
              <FaEyeSlash size={18} />
            ) : (
              <FaEye size={18} />
            )}
          </button>
        )}
      </div>

      {error && (
        <p className="text-red-500 text-xs">
          {error}
        </p>
      )}
    </div>
  );
}