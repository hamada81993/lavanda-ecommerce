
import { FaCheck } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import AuthLayout from "./AuthLayout";

export default function EmailSent() {
  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email;
  const userId = location.state?.userId;

  return (
    <AuthLayout>
      <div className="text-center py-6">

        <div
          className="
            w-16
            h-16
            rounded
            bg-[#2ECC71]
            mx-auto
            flex
            items-center
            justify-center
          "
        >
          <FaCheck
            className="text-white"
            size={28}
          />
        </div>

        <h2
          className="
            mt-6
            text-[30px]
            font-bold
            text-[#302245]
          "
        >
          Email Sent!
        </h2>

        <p
          className="
            mt-3
            text-[#9B94A8]
            leading-7
            text-[15px]
          "
        >
          Check your email
          <br />

          {email && (
            <span className="font-medium text-[#302245]">
              {email}
            </span>
          )}

          <br />

          and follow the instructions
          to reset your password.
        </p>

        <button
          onClick={() =>
            navigate("/otp", {
              state: {
                email,
                userId,
              },
            })
          }
          className="
            mt-8
            w-full
            h-[54px]
            rounded
         bg-primary-btn
            text-white
            font-semibold
            hover:opacity-90
          "
        >
          Verify OTP
        </button>

        <p
          onClick={() => navigate("/login")}
          className="
            mt-5
          text-[var(--primaryText)]
            cursor-pointer
          "
        >
          Back to Login
        </p>

      </div>
    </AuthLayout>
  );
}

