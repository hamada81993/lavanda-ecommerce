import { useState } from "react";
import AuthInput from "./AuthInput";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaApple, FaFacebookF, FaGoogle } from "react-icons/fa6";
import { useRegisterMutation } from "../../redux/auth/authApi";
import { handleApiError } from "../../utils/handleApiError";
// import { GoogleLogin } from "@react-oauth/google";


export default function RegisterForm() {

  const [register, { isLoading }] =useRegisterMutation();

const navigate = useNavigate();


  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    username: "",
    password: "",

    country_code: "",
    mobile: "",

    country_id: 1,
    state_id: 1,
    city_id: null,
    postal_code: null,

    terms_conditions: true,
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };


const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await register(formData).unwrap();

    localStorage.setItem(
      "token",
      res.token || res.data.token
    );

    toast.success(
      "Account Created Successfully"
    );

    navigate("/login");
  }catch (err) {
   handleApiError(err);
}
};



// const loginWithApple = async () => {

//   window.AppleID.auth.init({
//     clientId: "APPLE_CLIENT_ID",
//     scope: "name email",
//     redirectURI: "http://localhost:5173",
//     usePopup: true,
//   });

//   try {

//     const response =
//       await window.AppleID.auth.signIn();

//     dispatch(
//       socialLogin({
//         email: response.user.email,
//       })
//     );

//   } catch (err) {
//     console.log(err);
//   }

// };
// const loginWithFacebook = () => {
//   window.FB.login(
//     (response) => {
//       if (response.authResponse) {
//         window.FB.api(
//           "/me",
//           { fields: "name,email" },
//           (user) => {
//             dispatch(
//               socialLogin({
//                 email: user.email,
//               })
//             );
//           }
//         );
//       } else {
//         toast.error("Facebook Login Failed");
//       }
//     },
//     {
//       scope: "public_profile,email",
//     }
//   );
// };
  return (
    <>

    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <AuthInput
        label="Full Name"
        placeholder="Enter Name"
        name="full_name"
        value={formData.full_name}
        onChange={handleChange}
      />

      <AuthInput
        label="Email Address"
        placeholder="Enter Email Address"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />

      <AuthInput
        label="Username"
        placeholder="Enter Username"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />

      <AuthInput
        label="Password"
        placeholder="Enter Password"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />

      <div className="flex items-start gap-3 mt-2">
        <input
          type="checkbox"
          name="terms_conditions"
          checked={formData.terms_conditions}
          onChange={handleChange}
          className="
            mt-1
            h-4
            w-4
            accent-[var(--primaryText)]
            rounded
          "
        />

        <p className="text-[14px] leading-6 text-[#777]">
          I agree to{" "}
          <span className="text-[var(--primaryText)] font-medium cursor-pointer">
            Terms of Services
          </span>{" "}
          &{" "}
          <span className="text-[var(--primaryText)] font-medium cursor-pointer">
            Privacy Policy
          </span>
        </p>
      </div>

      <button
        type="submit"
        className="
          w-full
          h-[54px]
          rounded
       btn-primary
          text-white
          text-[18px]
          font-semibold
          transition
          hover:opacity-90
        "
      >
        Register
      </button>
{/* Divider */}

<div className="flex items-center mt-6 mb-4">
  <div className="flex-1 h-px bg-[#E9E4F3]" />

  <span className="px-4 text-sm text-[#9B94A8]">
    Or continue with
  </span>

  <div className="flex-1 h-px bg-[#E9E4F3]" />
</div>

{/* Social Login */}

<div className="flex justify-center gap-4 mb-2">

  <div className="flex justify-center">
  {/* <GoogleLogin
    onSuccess={(credentialResponse) => {
      const user = jwtDecode(
        credentialResponse.credential
      );

      dispatch(
        socialLogin({
          email: user.email,
        })
      );
    }}
    onError={() => {
      toast.error("Google Login Failed");
    }}
  /> */}
</div>
{/* <button
  type="button"
  onClick={loginWithFacebook}
  className="
    w-14
    h-14
    rounded-2xl
    border
    border-[#E9E4F3]
    flex
    items-center
    justify-center
  "
>
  <FaFacebookF
    size={22}
    className="text-[#1877F2]"
  />
</button> */}

{/* <button
  type="button"
  onClick={loginWithApple}
  className="
    w-14
    h-14
    rounded-2xl
    border
    border-[#E9E4F3]
    flex
    items-center
    justify-center
  "
>
  <FaApple
    size={24}
    className="text-black"
  />
</button> */}


</div>
      <p className="text-center text-[15px] text-[#666] mt-2 ">
        Already have an account?{" "}
        <span
          onClick={() => navigate("/login")}
          className="text-[var(--primaryText)]  font-semibold cursor-pointer"
        >
          Login
        </span>
      </p>
    </form>
    </>
  );
}