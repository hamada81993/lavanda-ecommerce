import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import AuthLayout from "./AuthLayout";
import AuthInput from "./AuthInput";

import { useSendOtpMutation } from "../../redux/auth/authApi";
import { handleApiError } from "../../utils/handleApiError";

export default function ForgotPassword() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [sendOtp, { isLoading }] =
    useSendOtpMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      toast.error("Please enter your email");
      return;
    }

    try {
      await sendOtp({
        email,
      }).unwrap();

      toast.success("OTP Sent Successfully");

      navigate("/email-sent", {
        state: { email },
      });

    } catch (err) {
      handleApiError(err);
    }
  };

  return (
    <AuthLayout>
      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <div className="text-center">
          <h2 className="text-[34px] font-bold text-[#302245]">
            Forgot Password
          </h2>

          <p className="mt-2 text-[#9B94A8] text-[15px]">
            Please enter your email address to receive password reset instructions.
          </p>
        </div>

        <AuthInput
          label="Email Address"
          type="email"
          placeholder="Enter Email Address"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <button
          type="submit"
          disabled={isLoading}
          className="
            w-full
            h-[54px]
            rounded-full
            bg-[#8F7AAE]
            text-white
            font-semibold
            text-[17px]
            hover:opacity-90
            disabled:opacity-50
            transition
          "
        >
          {isLoading
            ? "Sending..."
            : "Send Reset Link"}
        </button>

        <p
          onClick={() => navigate("/login")}
          className="
            text-center
            text-[#8F7AAE]
            font-medium
            cursor-pointer
          "
        >
          Back to Login
        </p>
      </form>
    </AuthLayout>
  );
}