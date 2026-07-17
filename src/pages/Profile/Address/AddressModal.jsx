
import { useState } from "react";
import { FiX } from "react-icons/fi";
import { toast } from "react-toastify";

import {
  useAddAddressMutation,

   useGetCountriesQuery,
  useGetStatesQuery,
  useGetCitiesQuery,
} from "../../../redux/address/addressApi";

export default function AddressModal({
  open,
  onClose,
}) {
  const [addAddress, { isLoading }] =
    useAddAddressMutation();

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    address: "",
    country_id: 1,
    state_id: 1,
    city_id: null,
    postal_code: "",
    shipping_address_name: "Home",
  });

const {
  data: countriesData,
} = useGetCountriesQuery();

const {
  data: statesData,
} = useGetStatesQuery(formData.country_id,{
        skip: !formData.country_id,

});

const {
  data: citiesData,
} = useGetCitiesQuery(formData.state_id ,{
        skip: !formData.state_id,

});

  if (!open) return null;

const handleChange = (e) => {
  const { name, value } = e.target;

  switch (name) {
    case "country_id":
      setFormData((prev) => ({
        ...prev,
        country_id: Number(value),
        state_id: "",
        city_id: "",
      }));
      break;

    case "state_id":
      setFormData((prev) => ({
        ...prev,
        state_id: Number(value),
        city_id: "",
      }));
      break;

    case "city_id":
      setFormData((prev) => ({
        ...prev,
        city_id: Number(value),
      }));
      break;

    default:
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
  }
};

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
const payload = {
  ...formData,
  city_id: formData.city_id || null,
};

await addAddress(payload).unwrap();
      toast.success("Address Added Successfully");

      onClose();

      setFormData({
        full_name: "",
        email: "",
        phone: "",
        address: "",
        country_id: 1,
        state_id: 1,
        city_id: null,
        postal_code: "",
        shipping_address_name: "Home",
      });

    } catch (err) {
      toast.error(
        err?.data?.msg ||
          "Something went wrong"
      );
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-6">

      <div className="bg-white rounded-3xl w-full max-w-3xl shadow-xl">

        {/* Header */}

        <div className="flex justify-between items-center px-8 py-6 border-b">

          <h2 className="text-3xl font-bold text-[#35264B]">
            Add New Address
          </h2>

          <button onClick={onClose}>
            <FiX size={26} />
          </button>

        </div>

        <form
          onSubmit={handleSubmit}
          className="p-8 space-y-6"
        >

          <div className="grid grid-cols-2 gap-5">

            <div>
              <label className="block mb-2 font-medium">
                Full Name
              </label>

              <input
                name="full_name"
                value={formData.full_name}
                onChange={handleChange}
                className="w-full h-14 border rounded-2xl px-5"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Email
              </label>

              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full h-14 border rounded-2xl px-5"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Phone
              </label>

              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full h-14 border rounded-2xl px-5"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium">
                Country
              </label>

           <select
  name="country_id"
  value={formData.country_id}
  onChange={handleChange}
  className="w-full h-14 border rounded-2xl px-5"
>
  <option value="">
    Select Country
  </option>

  {countriesData?.countries?.data?.map(
    (country) => (
      <option
        key={country.id}
        value={country.id}
      >
        {country.name}
      </option>
    )
  )}
</select>
            </div>

            <div>
              <label className="block mb-2 font-medium">
                State
              </label>

              <select
  name="state_id"
  value={formData.state_id}
  onChange={handleChange}
  className="w-full h-14 border rounded-2xl px-5"
>
  <option value="">
    Select State
  </option>

  {statesData?.state?.data?.map(
    (state) => (
      <option
        key={state.id}
        value={state.id}
      >
        {state.name}
      </option>
    )
  )}
</select>
            </div>
<div>
  <label className="block mb-2 font-medium">
    City
  </label>

  <select
    name="city_id"
    value={formData.city_id || ""}
    onChange={handleChange}
    className="w-full h-14 border rounded-2xl px-5"
  >
    <option value="">
      Select City
    </option>

    {citiesData?.cities?.data?.map((city) => (
      <option
        key={city.id}
        value={city.id}
      >
        {city.name}
      </option>
    ))}
  </select>
</div>
            <div>
              <label className="block mb-2 font-medium">
                Postal Code
              </label>

              <input
                name="postal_code"
                value={formData.postal_code}
                onChange={handleChange}
                className="w-full h-14 border rounded-2xl px-5"
              />
            </div>

          </div>

          <div>

            <label className="block mb-2 font-medium">
              Address
            </label>

            <textarea
              rows={4}
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full border rounded-2xl p-5 resize-none"
            />

          </div>

          <div className="flex justify-end gap-4 pt-4">

            <button
              type="button"
              onClick={onClose}
              className="h-12 px-8 rounded-full border"
            >
              Cancel
            </button>

           <button
  type="submit"
  disabled={isLoading}
  className="
    h-12
    px-10
    rounded-full
    bg-[#8F7AAE]
    text-white
    font-semibold
    hover:opacity-90
    disabled:opacity-50
  "
>
  {isLoading ? "Saving..." : "Save Address"}
</button>
          </div>

        </form>

      </div>

    </div>
  );
}

