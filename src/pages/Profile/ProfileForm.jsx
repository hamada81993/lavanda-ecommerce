import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useUpdateProfileMutation } from "../../redux/profile/profileApi";

export default function ProfileForm({ profile }) {
  const [updateProfile, { isLoading }] =
    useUpdateProfileMutation();

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    if (profile) {
      setFormData({
        name: profile.name || "",
        username: profile.username || "",
        email: profile.email || "",
        phone:
          profile.delivery_address?.phone || "",
        address:
          profile.delivery_address?.address || "",
      });
    }
  }, [profile]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateProfile(formData).unwrap();

      toast.success(
        "Profile Updated Successfully"
      );
    } catch (err) {
      toast.error(
        err?.data?.message ||
          "Update Failed"
      );

      console.log(err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8"
    >
      <div className="grid grid-cols-2 gap-6">

        <div>
          <label className="block mb-2 font-medium text-[#35264B]">
            Full Name
          </label>

          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full h-14 rounded-2xl border border-[#ECE7F5] px-5 outline-none focus:border-primary"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium text-[#35264B]">
            Username
          </label>

          <input
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full h-14 rounded-2xl border border-[#ECE7F5] px-5 outline-none focus:border-primary"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium text-[#35264B]">
            Email
          </label>

          <input
            disabled
            value={formData.email}
            className="w-full h-14 rounded-2xl border border-[#ECE7F5] bg-[#F8F6FC] px-5"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium text-[#35264B]">
            Phone Number
          </label>

          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full h-14 rounded-2xl border border-[#ECE7F5] px-5 outline-none focus:border-primary"
          />
        </div>

      </div>

      <div className="mt-6">
        <label className="block mb-2 font-medium text-[#35264B]">
          Address
        </label>

        <textarea
          rows={4}
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="w-full rounded-2xl border border-[#ECE7F5] p-5 resize-none outline-none focus:border-primary"
        />
      </div>

      <div className="flex justify-end mt-8">

        <button
          type="submit"
          disabled={isLoading}
          className="
            px-10
            h-14
            rounded-full
            bg-primary
            text-white
            font-semibold
            hover:opacity-90
            disabled:opacity-50
            disabled:cursor-not-allowed
          "
        >
          {isLoading
            ? "Saving..."
            : "Save Changes"}
        </button>

      </div>
    </form>
  );
}