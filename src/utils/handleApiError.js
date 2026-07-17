import { toast } from "react-toastify";

export const handleApiError = (err) => {
  if (err?.data?.validation_errors) {
    Object.values(err.data.validation_errors)
      .flat()
      .forEach((message) => {
        toast.error(message);
      });

    return;
  }

  if (err?.data?.message) {
    toast.error(err.data.message);
    return;
  }

  if (err?.data?.msg) {
    toast.error(err.data.msg);
    return;
  }

  toast.error("Something went wrong");
};