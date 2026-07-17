import { toast } from "react-toastify";
import {
  useToggleWishlistMutation,
  useRemoveWishlistMutation,
  useGetWishlistQuery,
} from "../redux/wishlist/wishlistApi";

export const useWishlist = () => {
  const { data, refetch } = useGetWishlistQuery();

  const [toggleWishlist] =
    useToggleWishlistMutation();

  const [removeWishlist] =
    useRemoveWishlistMutation();

  const wishlist =
    data?.data ?? [];
  const token = localStorage.getItem("token");

  const isWishlisted = (id) =>
    token ? wishlist.some((item) => item.prd_id === id) : false;
    const handleWishlist = async (e, id) => {
    e?.preventDefault();
    e?.stopPropagation();

    if (!token) {
      toast.info("Please login to manage your wishlist");
      navigate("/login");
      return;
    }

    try {
      if (isWishlisted(id)) {
        const res = await removeWishlist(id).unwrap();
        toast.success(res.msg || "Removed from wishlist");
      } else {
        const res = await toggleWishlist(id).unwrap();
        toast.success(res.msg || "Added to wishlist");
      }
      refetch();
    } catch (err) {
      if (err?.status === 401) {
        toast.info("Session expired. Please login again.");
        navigate("/login");
      } else {
        toast.error(err?.data?.msg || "Something went wrong");
      }
    }
  };

  return {
    wishlist,
    isWishlisted,
    handleWishlist,
  };
};