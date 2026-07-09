import { Outlet } from "react-router-dom";
import ProfileSidebar from "./ProfileSidebar";
import Orders from "./Orders/Orders";
import Profile from "./Profile";
import { useState } from "react";

export default function ProfileLayout() {

  return (
    <div className="bg-[#F7F5FB] min-h-screen py-10">
      <div className="max-w-[1200px] mx-auto flex gap-6 px-4">
 
<ProfileSidebar />
        <div className="flex-1">
          <Outlet/>
        </div>
      </div>
    </div>
  );
}