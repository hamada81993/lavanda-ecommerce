import { FiAlertTriangle } from "react-icons/fi";

export default function DeleteAddressModal({
  open,
  onClose,
  onConfirm,
  loading,
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/40 flex items-center justify-center">

      <div className="bg-white rounded-3xl w-[430px] p-8 shadow-xl">

        <div className="flex justify-center">

          <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">

            <FiAlertTriangle
              size={32}
              className="text-red-500"
            />

          </div>

        </div>

        <h2 className="text-center text-2xl font-bold text-[#35264B] mt-6">
          Delete Address?
        </h2>

        <p className="text-center text-[#8F8AA3] mt-3">
          This address will be permanently deleted.
        </p>

        <div className="flex gap-4 mt-8">

          <button
            onClick={onClose}
            className="flex-1 h-12 rounded-full border border-[#ECE7F5]"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            disabled={loading}
            className="flex-1 h-12 rounded-full bg-red-500 text-white"
          >
            {loading ? "Deleting..." : "Delete"}
          </button>

        </div>

      </div>

    </div>
  );
}