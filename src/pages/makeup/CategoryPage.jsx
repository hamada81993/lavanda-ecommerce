import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CategoryFilterSidebar from "../../components/CategoryFilterSidebar";
import { fetchCategoryProducts } from "../../redux/products/productsThunk";
import { useSelector } from "react-redux";

const filters = {
  makeup: [
    {
      title: "Sub Categories",
      options: [
        { label: "Face" },
        { label: "Eye" },
        { label: "Lip" },
        { label: "Nails" },
      ],
    },
    {
      title: "Skin Tone",
      options: [
        { label: "Fair", color: "#fcece4" },
        { label: "Medium", color: "#d59e81" },
        { label: "Deep", color: "#61311b" },
      ],
    },
  ],

  skincare: [
    {
      title: "Skin Type",
      options: [
        { label: "Oily" },
        { label: "Dry" },
        { label: "Sensitive" },
      ],
    },
  ],

  haircare: [
    {
      title: "Hair Type",
      options: [
        { label: "Curly" },
        { label: "Straight" },
        { label: "Wavy" },
      ],
    },
  ],
};

export default function CategoryPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // const { category, type } = useParams();

  // const getTitle = () => {
  //   switch (type) {
  //     case "face":
  //       return "Face Makeup";
  //     case "eye":
  //       return "Eye Makeup";
  //     case "lips":
  //       return "Lipstick";
  //     case "skincare":
  //       return "Skincare";
  //     case "hair":
  //       return "Hair Care";
  //     default:
  //       return "Category";
  //   }
  // };
const {

categoryProducts

}

=

useSelector(
state=>state.products
);

useEffect(()=>{

dispatch(
fetchCategoryProducts(id)
);

},[]);
  return (
    <div className="bg-[#FAFAFA] min-h-screen relative">

      {/* SIDEBAR */}
      <CategoryFilterSidebar
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        title="Filters"
        sections={filters[category] || []}
      />

      {/* HERO */}
      <section className="flex h-[380px] bg-gradient-to-br from-[#FFF1F5] to-[#F5F0F8] overflow-hidden">
        <div className="flex-1 flex flex-col justify-center px-[8%]">
          <h1 className="text-4xl font-bold mb-3">{getTitle()}</h1>
          <p className="text-[#555]">
            Explore our premium collection of {type} products.
          </p>
        </div>

        <div className="flex-1 bg-gray-200" />
      </section>

      {/* CONTENT */}
      <div className="max-w-[1400px] mx-auto px-4">

        <div className="flex justify-between items-center py-4 border-b">

          <button
            onClick={() => {
              console.log("clicked");
              setIsFilterOpen(true);
            }}
            className="font-semibold"
          >
            Filter By
          </button>

          <select>
            <option>Newest</option>
            <option>Price Low to High</option>
            <option>Price High to Low</option>
          </select>

        </div>

      </div>
    </div>
  );
}






