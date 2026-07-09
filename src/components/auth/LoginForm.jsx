import { useState } from "react";
import AuthInput from "./AuthInput";
import { useNavigate } from "react-router-dom";

import {
  FaGoogle,
  FaFacebookF,
  FaApple,
} from "react-icons/fa6";
import { useLoginMutation } from "../../redux/auth/authApi";
import { toast } from "react-toastify";
import { handleApiError } from "../../utils/handleApiError";

export default function LoginForm() {
const [login, { isLoading }] = useLoginMutation();

const navigate = useNavigate();

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await login(formData).unwrap();

    localStorage.setItem(
      "token",
      res.token || res.data.token
    );

    toast.success("Login Successfully");

    navigate("/");
  }catch (err) {
   handleApiError(err);
}
};

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    remember: true,
  });

  const handleChange = (e) => {
    const { name, value, checked, type } =
      e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    }));
  };


  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      {/* Email */}

      <AuthInput
        label="Email Address"
        placeholder="Enter Email Address"
        type="email"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />

      {/* Password */}

      <AuthInput
        label="Password"
        placeholder="Enter Password"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />

      {/* Remember */}

      <div className="flex items-center justify-between -mt-2">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="remember"
            checked={formData.remember}
            onChange={handleChange}
            className="accent-[#8F7AAE]"
          />

          <span className="text-sm text-[#666]">
            Remember Me
          </span>
        </label>

        <button
        onClick={() => navigate("/forgot-password")}
          type="button"
          className="text-sm text-red-500 hover:underline"
        >
          Forgot password?
        </button>
      </div>

      {/* Login Button */}

      <button
        type="submit"
        className="
          w-full
          h-[54px]
          rounded-full
          bg-[#8F7AAE]
          text-white
          text-[17px]
          font-semibold
          hover:opacity-90
          transition
        "
      >
        Login
      </button>

      {/* Divider */}

      <div className="flex items-center my-5">
        <div className="flex-1 h-px bg-[#ECE8F3]" />

        <span className="px-4 text-sm text-[#999]">
          OR
        </span>

        <div className="flex-1 h-px bg-[#ECE8F3]" />
      </div>

      {/* Social */}

      <div className="flex justify-center gap-4">
        <button
          type="button"
          className="
            w-16
            h-12
            rounded-xl
            border
            border-[#ECE8F3]
            flex
            items-center
            justify-center
            hover:border-primary
            transition
          "
        >
          <FaFacebookF
            className="text-[#1877F2]"
            size={20}
          />
        </button>

        <button
          type="button"
          className="
            w-16
            h-12
            rounded-xl
            border
            border-[#ECE8F3]
            flex
            items-center
            justify-center
            hover:border-primary
            transition
          "
        >
          <FaGoogle
            className="text-[#EA4335]"
            size={20}
          />
        </button>

        <button
          type="button"
          className="
            w-16
            h-12
            rounded-xl
            border
            border-[#ECE8F3]
            flex
            items-center
            justify-center
            hover:border-primary
            transition
          "
        >
          <FaApple
            className="text-black"
            size={22}
          />
        </button>
      </div>

      {/* Register */}

      <p className="text-center text-[14px] text-[#777] pt-2">
        Don't have an account yet?{" "}
        <span
          onClick={() =>
            navigate("/register")
          }
          className="
            text-[#8F7AAE]
            font-semibold
            cursor-pointer
          "
        >
          Register
        </span>
      </p>
    </form>
  );
}