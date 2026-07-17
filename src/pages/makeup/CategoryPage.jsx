import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CategoryFilterSidebar from "../../components/CategoryFilterSidebar";
import { fetchCategoryProducts } from "../../redux/products/productsThunk";
import { useSelector } from "react-redux";




import ProductCard from "../../components/common/ProductCard";
import { useGetBrandsQuery, useGetCategoryProductsQuery, useGetChildCategoriesQuery, useGetSubCategoriesQuery } from "../../redux/categories/categoriesApi";
import CategoryHeader from "../../components/Category/CategoryHeader";



export default function CategoryPage() {
  const { id } = useParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
  category_id: id,
});
  const { data: subCategoriesData } =
  useGetSubCategoriesQuery(id);
  const { data: childCategoriesDate } =
  useGetChildCategoriesQuery(id);
 const subCategories = subCategoriesData || [];
  const childCategories = childCategoriesDate || [];
  const { data: brandsData } = useGetBrandsQuery();

const brands = brandsData || [];
const sections = [
  {
    title: "Product Categories",
    options: subCategories.map(item => ({
      id: item.id,
      label: item.name,
    })),
  },
  {
    title: "Child Categories",
    options: childCategories.map(item => ({
      id: item.id,
      label: item.name,
    })),
  },
  {
    title: "Brand",
    options: brands.map(item => ({
      id: item.id,
      label: item.name,
    })),
  },
];
  // const { data } = useGetFilteredProductsQuery(filters);




  const {
 data,
    isLoading,
  } = useGetCategoryProductsQuery(id);

  if (isLoading)
    return (
      <div className="py-20 text-center">
        Loading...
      </div>
    );

const handleApplyFilters = (selectedFilters) => {
  const newFilters = {
    category_id: id,
  };

  // Product Categories
  if (selectedFilters["Product Categories"]) {
    const ids = Object.keys(
      selectedFilters["Product Categories"]
    ).filter(
      (key) => selectedFilters["Product Categories"][key]
    );

    if (ids.length) {
      newFilters.sub_category_id = ids.join(",");
    }
  }

  // Child Categories
  if (selectedFilters["Child Categories"]) {
    const ids = Object.keys(
      selectedFilters["Child Categories"]
    ).filter(
      (key) => selectedFilters["Child Categories"][key]
    );

    if (ids.length) {
      newFilters.child_category_id = ids.join(",");
    }
  }

  // Brands
  if (selectedFilters["Brand"]) {
    const ids = Object.keys(
      selectedFilters["Brand"]
    ).filter(
      (key) => selectedFilters["Brand"][key]
    );

    if (ids.length) {
      newFilters.brand_id = ids.join(",");
    }
  }

  setFilters(newFilters);
  setIsFilterOpen(false);
};
  return (
<>

      <CategoryFilterSidebar
      sections={sections}
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        onApply={handleApplyFilters}
      />

      {/* HERO */}
      <section className="flex h-[380px] bg-gradient-to-br from-[#FFF1F5] to-[#F5F0F8] overflow-hidden">
        <div className="flex-1 flex flex-col justify-center px-[8%]">
          <h1 className="text-4xl font-bold mb-3"></h1>
          <p className="text-[#555]">
            Explore our premium collection of products.
          </p>
        </div>
 
      </section>
<div className="container mx-auto max-w-[1320px] px-4 py-8">

        <CategoryHeader
          title={data?.title}
          onFilterClick={() =>
            setIsFilterOpen(true)
          }
        />

        <div
          className="
          grid
          grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          gap-6
        "
        >
{data.products.map((product) => (
  <ProductCard
    key={product.prd_id}
    product={product}
  />
))}   </div>

      </div>
     
</>
  );
}






