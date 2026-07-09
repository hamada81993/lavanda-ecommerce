import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { deleteAccount } from "../../redux/profile/profileThunk";

export default function DeleteAccount() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleDelete = async () => {
    const ok = window.confirm(
      "Delete your account?"
    );

    if (!ok) return;

    await dispatch(deleteAccount(1));

    localStorage.removeItem("token");

    navigate("/");
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-red-500 text-white px-8 h-12 rounded-full"
    >
      Delete Account
    </button>
  );
}