import { useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AuthLayout from "./AuthLayout";
import { useVerifyOtpMutation } from "../../redux/auth/authApi";
import { handleApiError } from "../../utils/handleApiError";
import { toast } from "react-toastify";

export default function OTPVerification() {
  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email;
  const userId = location.state?.userId;

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const inputs = useRef([]);
const [verifyOtp, { isLoading }] =
  useVerifyOtpMutation();

  
  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputs.current[index + 1].focus();
    }
  };

  const handleBackspace = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const handleSubmit = async () => {
  const code = otp.join("");

  if (code.length !== 6) {
    toast.error("Enter OTP");
    return;
  }

  try {
    await verifyOtp({
      email_verified: userId,
      otp: code,
      user_id: userId,
    }).unwrap();

    toast.success("OTP Verified");

    navigate("/reset-password", {
      state: {
        email,
      },
    });

  } catch (err) {
    handleApiError(err);
  }
};
  return (
    <AuthLayout>
      <div className="text-center">

        <h2 className="text-3xl font-bold text-[#302245]">
          Email OTP Verification
        </h2>

        <p className="mt-2 text-[#888] text-sm">
          We sent a code to
        </p>

        <p className="font-semibold text-[#302245]">
          {email}
        </p>

        <div className="flex justify-center gap-3 mt-8">

          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputs.current[index] = el)}
              value={digit}
              onChange={(e) =>
                handleChange(e.target.value, index)
              }
              onKeyDown={(e) =>
                handleBackspace(e, index)
              }
              maxLength={1}
              className="
                w-14
                h-14
                rounded-xl
                border
                border-[#D8CFF1]
                text-center
                text-xl
                font-bold
                focus:outline-none
                focus:border-[#8F7AAE]
              "
            />
          ))}

        </div>

        <div className="flex justify-center gap-2 mt-6 text-sm">

          <span className="text-gray-500">
            Didn't receive code?
          </span>

          <button className="text-[#8F7AAE] font-semibold">
            Resend Code
          </button>

          <span className="text-red-500">
            00:45
          </span>

        </div>

        <button
          onClick={handleSubmit}
          disabled={isLoading}
          className="
            mt-8
            w-full
            h-12
            rounded-xl
            bg-[#8F7AAE]
            text-white
            font-semibold
          "
        >

{isLoading
  ? "Verifying..."
  : "Verify & Proceed"}
        </button>

      </div>
    </AuthLayout>
  );
}