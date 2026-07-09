import { useState } from "react";

import CategoryHero from "./CategoryHero";
import CategoryHeader from "./CategoryHeader";
import ProductGrid from "./ProductGrid";
import Pagination from "../common/Pagination";

export default function CategoryPageLayout({
  heroTitle,
  heroDescription,
  heroImage,
  pageTitle,
  products,
  images,
}) { 
  const [isFilterOpen, setIsFilterOpen] =
    useState(false);

  return (
    <div className="bg-[#FAFAFA] pb-16">
      <CategoryHero
        title={heroTitle}
        description={heroDescription}
        image={heroImage}
      />

      <div className="max-w-[1440px] mx-auto px-4">
        <CategoryHeader
          title={pageTitle}
          onFilterClick={() =>
            setIsFilterOpen(!isFilterOpen)
          }
        />

        <ProductGrid
          products={products}
          images={images}
        />

        <Pagination />

         {/* Banner */}
          <div className="mt-10 bg-gradient-to-r from-[#dcf0df] to-[#eef7ee] p-10 rounded-3xl flex justify-between items-center">
            <div>
              <h3 className="text-2xl font-bold text-[#1b4d3e]">
                Healthy Hair Starts Here
              </h3>
              <p className="text-[#3d5a4d]">
                Premium haircare products
              </p>
            </div>

            {images?.[0] && (
              <img src={images[0]} className="h-64 object-contain" />
            )}

            <button className="bg-white px-6 py-2 rounded-lg font-semibold">
              Shop Now
            </button>
          </div>
      </div>
    </div>
  );
}