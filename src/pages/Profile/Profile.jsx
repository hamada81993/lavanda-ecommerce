import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProfileForm from "./ProfileForm";
import { useGetProfileQuery } from "../../redux/profile/profileApi";


export default function Profile() {

 const {
   data,
   isLoading
}=useGetProfileQuery();
const profile = data?.user_details;
  if (isLoading) {
    return (
      <div className="bg-white rounded-3xl h-[700px] flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl border border-[#ECE7F5] shadow-sm overflow-hidden">
      <div className="px-8 py-7 border-b border-[#F0ECF7]">
        <h2 className="text-[34px] font-bold text-[#35264B]">
          My Profile
        </h2>

        <p className="text-[#9B94A8] mt-1">
          Manage your personal information
        </p>
      </div>

      <ProfileForm profile={profile} />
    </div>
  );
}