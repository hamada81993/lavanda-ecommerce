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

  const isWishlisted = (id) =>
    wishlist.some(
      (item) => item.prd_id === id
    );

  const handleWishlist = async (e, id) => {
    e?.preventDefault();
    e?.stopPropagation();

    try {
      if (isWishlisted(id)) {
        const res =
          await removeWishlist(id).unwrap();

        toast.success(res.msg);
      } else {
        const res =
          await toggleWishlist(id).unwrap();

        toast.success(res.msg);
      }

      refetch();
    } catch (err) {
      toast.error(
        err?.data?.msg ||
          "Something went wrong"
      );
    }
  };

  return {
    wishlist,
    isWishlisted,
    handleWishlist,
  };
};