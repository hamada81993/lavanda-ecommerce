

import {
  useLogoutMutation,
  // useDeleteAccountMutation,
} from "../../redux/auth/authApi";

export default function LogoutButton() {
  const navigate = useNavigate();

const [logout] = useLogoutMutation();

const [deleteAccount] =
  useDeleteAccountMutation();

const handleLogout = async () => {
  try {
    await logout().unwrap();
  } catch (err) {
    console.log(err);
  }

  localStorage.removeItem("token");

  navigate("/login");
};
// const handleDeleteAccount = async () => {
//   try {
//     await deleteAccount(profile.id).unwrap();

//     localStorage.removeItem("token");

//     toast.success("Account deleted");

//     navigate("/");
//   } catch (err) {
//     toast.error(
//       err?.data?.msg || "Delete failed"
//     );
//   }
// };
  return (
    <button
      onClick={handleLogout}
      className="bg-primary text-white rounded-full h-12 px-8"
    >
      Logout
    </button>
//     <button
//   onClick={handleDeleteAccount}
//   className="..."
// >
//   Delete Account
// </button>
  );
}