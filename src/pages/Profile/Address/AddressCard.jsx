import { FiTrash2, FiMapPin } from "react-icons/fi";
import { toast } from "react-toastify";
import { useState } from "react";
import DeleteAddressModal from "./DeleteAddressModal";
import {
  useDeleteAddressMutation,
} from "../../../redux/address/addressApi";

export default function AddressCard({
  address,
  isDefault,
}) {
  const [deleteAddress, { isLoading }] =
    useDeleteAddressMutation();

const [openDelete, setOpenDelete] =
  useState(false)

const handleDelete = async () => {
  try {
    await deleteAddress(address.id).unwrap();

    toast.success(
      "Address deleted successfully"
    );

    setOpenDelete(false);

  } catch (err) {

    toast.error(
      err?.data?.msg || "Delete failed"
    );

  }
};
;
  return (
    <div
      className="
      bg-white
      rounded-3xl
      border
      border-[#ECE7F5]
      p-7
      shadow-sm
      transition
      hover:shadow-md
    "
    >
      {/* Top */}

      <div className="flex justify-between items-start">

        <div>

          <div className="flex items-center gap-3">

            <FiMapPin
              className="text-[#8F7AAE]"
              size={22}
            />

            <h3 className="text-[22px] font-bold text-[#35264B]">
              {address.full_name}
            </h3>

            {isDefault && (
              <span
                className="
                bg-[#F3EEF9]
                text-[#8F7AAE]
                text-xs
                font-semibold
                px-3
                py-1
                rounded-full
              "
              >
                Default
              </span>
            )}

          </div>

          <p className="text-[#7C7692] mt-4 leading-7">
            {address.address}
          </p>

        </div>

   <button
  onClick={() => setOpenDelete(true)}
  className="
    text-red-500
    hover:text-red-600
    transition
  "
>
  Delete
</button>

      </div>

      {/* Divider */}

      <div className="border-t border-[#F3EEF9] my-6" />

      {/* Bottom */}

      <div className="grid grid-cols-2 gap-5">

        <div>

          <p className="text-[#A29CB2] text-sm">
            Email
          </p>

          <p className="font-medium text-[#35264B] mt-1">
            {address.email}
          </p>

        </div>

        <div>

          <p className="text-[#A29CB2] text-sm">
            Phone
          </p>

          <p className="font-medium text-[#35264B] mt-1">
            {address.phone}
          </p>

        </div>

        <div>

          <p className="text-[#A29CB2] text-sm">
            Country
          </p>

          <p className="font-medium text-[#35264B] mt-1">
            {address.country?.name}
          </p>

        </div>

        <div>

          <p className="text-[#A29CB2] text-sm">
            State
          </p>

          <p className="font-medium text-[#35264B] mt-1">
            {address.state?.name}
          </p>

        </div>

      </div>
      <DeleteAddressModal
  open={openDelete}
  onClose={() => setOpenDelete(false)}
  onConfirm={handleDelete}
  loading={isLoading}
/>
    </div>
  );
}