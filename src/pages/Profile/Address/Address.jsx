import { useState } from "react";

import {
  useGetAddressesQuery,
} from "../../../redux/address/addressApi";

import AddressCard from "./AddressCard";
import AddressModal from "./AddressModal";
// import AddressModal from "./AddressModal";

export default function Address() {
  const [open, setOpen] = useState(false);

  const {
    data,
    isLoading,
  } = useGetAddressesQuery();

  const addresses = data?.data || [];

  return (
    <div className="bg-white rounded-3xl border border-[#ECE7F5] shadow-sm overflow-hidden">

      {/* Header */}

      <div className="px-8 py-7 border-b border-[#F3EEF9] flex items-center justify-between">

        <div>

          <h2 className="text-[34px] font-bold text-[#35264B]">
            My Address
          </h2>

          <p className="text-[#8F8AA3] mt-2">
            Manage your shipping addresses
          </p>

        </div>

        <button
          onClick={() => setOpen(true)}
          className="
            h-11
            px-6
            rounded-xl
            bg-[#8F7AAE]
            text-white
            font-medium
            hover:opacity-90
          "
        >
          + Add Address
        </button>

      </div>

      {/* Body */}

      <div className="p-8 bg-[#F8F6FC] min-h-[650px]">

        {isLoading ? (

          <div className="h-[400px] flex items-center justify-center">
            Loading...
          </div>

        ) : addresses.length === 0 ? (

          <div className="h-[450px] flex items-center justify-center">

            <div className="text-center">

              <div className="text-6xl mb-5">
                📍
              </div>

              <h3 className="text-2xl font-bold text-[#35264B]">
                No Addresses
              </h3>

              <p className="text-[#8F8AA3] mt-3">
                Add your first shipping address.
              </p>

            </div>

          </div>

        ) : (

          <div className="space-y-5">

            {addresses.map((address, index) => (

              <AddressCard
                key={address.id}
                address={address}
                isDefault={index === 0}
              />

            ))}

          </div>

        )}

      </div>

      <AddressModal
        open={open}
        onClose={() => setOpen(false)}
      />

    </div>
  );
}