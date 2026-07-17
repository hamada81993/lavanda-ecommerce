import { useGetAllCategoriesQuery } from "../../redux/categories/categoriesApi";
import DesktopCategoryMenu from "./DesktopCategoryMenu";
import MobileCategoryMenu from "./MobileCategoryMenu";

export default function CategoryMenu({
  mobile = false,
  onClose,
}) {
  const { data: categories = [], isLoading } =
    useGetAllCategoriesQuery();

  if (isLoading) return null;

  if (mobile) {
    return (
      <MobileCategoryMenu
        categories={categories}
        onClose={onClose}
      />
    );
  }

  return (
    <DesktopCategoryMenu
      categories={categories}
    />
  );
}