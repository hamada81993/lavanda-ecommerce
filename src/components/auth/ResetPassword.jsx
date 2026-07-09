
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

import AuthLayout from "./AuthLayout";
import AuthInput from "./AuthInput";

import { useResetPasswordMutation } from "../../redux/auth/authApi";
import { handleApiError } from "../../utils/handleApiError";

export default function ResetPassword() {
  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email;

  const [formData, setFormData] = useState({
    password: "",
    password_confirmation: "",
  });

  const [resetPassword, { isLoading }] =
    useResetPasswordMutation();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      formData.password !==
      formData.password_confirmation
    ) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      await resetPassword({
        email,
        password: formData.password,
        password_confirmation:
          formData.password_confirmation,
      }).unwrap();

      toast.success(
        "Password Reset Successfully"
      );

      navigate("/login");
    } catch (err) {
      handleApiError(err);
    }
  };

  return (
    <AuthLayout>
      <form onSubmit={handleSubmit}>
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#302245]">
            Reset Password
          </h2>

          <p className="text-sm text-[#888] mt-2">
            Your new password must be different
            from previous used passwords.
          </p>
        </div>

        <div className="mt-8 space-y-6">
          <AuthInput
            label="Password"
            name="password"
            type="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
          />

          <AuthInput
            label="Confirm Password"
            name="password_confirmation"
            type="password"
            placeholder="Confirm Password"
            value={formData.password_confirmation}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="
            mt-8
            w-full
            h-12
            rounded-xl
            bg-[#8F7AAE]
            text-white
            font-semibold
            disabled:opacity-50
          "
        >
          {isLoading
            ? "Submitting..."
            : "Submit"}
        </button>

        <button
          type="button"
          onClick={() => navigate("/login")}
          className="
            mt-5
            w-full
            text-center
            text-[#302245]
            font-medium
          "
        >
          Return to Login
        </button>
      </form>
    </AuthLayout>
  );
}

