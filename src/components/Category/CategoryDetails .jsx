import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useGetCategoryProductsQuery } from "../../redux/categories/categoriesApi";

export default function CategoryDetails() {
  const { id } = useParams();

const { data: category, isLoading } =
  useGetCategoryProductsQuery(id);

  if (!category)
    return (
      <div className="text-center py-20 text-gray-500">
        Loading...
      </div>
    );

  return (
    <div className="container mx-auto px-4 py-10">

      {/* TOP SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* IMAGE */}
        <div className="bg-white rounded-2xl shadow-sm p-4 border">
          <img
            src={category.image_url}
            alt={category.name}
            className="w-full h-[450px] object-cover rounded-xl"
          />
        </div>

        {/* INFO */}
        <div>

          {/* TITLE */}
          <h1 className="text-3xl font-bold text-gray-800">
            {category.name}
          </h1>

          {/* SLUG */}
          {category.slug && (
            <p className="text-sm text-gray-400 mt-2">
              / {category.slug}
            </p>
          )}

          {/* DESCRIPTION (optional if exists) */}
          {category.description && (
            <p className="text-gray-600 mt-6 leading-relaxed">
              {category.description}
            </p>
          )}

          {/* BADGE STYLE INFO */}
          <div className="mt-6 flex items-center gap-2">
            <span className="px-4 py-2 bg-[#9b87bd] text-white rounded-full text-sm">
              Category ID: {category.id}
            </span>
          </div>

        </div>
      </div>

    </div>
  );
}