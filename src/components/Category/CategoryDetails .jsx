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






















////haroun

// import { useParams, Link, useSearchParams } from "react-router-dom";
// import { useState } from "react";
// import { useGetCategoryProductsQuery } from "../../redux/categories/categoriesApi";
// import { useGetFilteredProductsQuery } from "../../redux/products/productsApi";
// import ProductCard from "../common/ProductCard";
// import { FiSliders, FiX } from "react-icons/fi";

// export default function CategoryDetails() {
//   const { id } = useParams();
//   const [searchParams] = useSearchParams();
//   const subId = searchParams.get("sub");
//   const [minPrice, setMinPrice] = useState("");
//   const [maxPrice, setMaxPrice] = useState("");
//   const [page, setPage] = useState(1);
//   const [showFilter, setShowFilter] = useState(false);

//   // Use filtered products if filters are applied, else use category endpoint
//   const hasFilters = minPrice || maxPrice;

//   const { 
//     data: categoryData,
//     isLoading: catLoading,
//     error: catError,
//   } = useGetCategoryProductsQuery(id, { skip: hasFilters });

//   const {
//     data: filteredData,
//     isLoading: filterLoading,
//     isFetching,
//   } = useGetFilteredProductsQuery(
//     {
//       category_id: id,
//       min_price: minPrice,
//       max_price: maxPrice,
//       page,
//     },
//     { skip: !hasFilters }
//   );

//   const isLoading = catLoading || filterLoading || isFetching;

//   // Build products from whichever source is active
//   let products = [];
//   let categoryName = "";
//   let lastPage = 1;
//   let totalItems = 0;

//   if (hasFilters && filteredData) {
//     products = filteredData?.data || [];
//     lastPage = filteredData?.last_page || 1;
//     totalItems = filteredData?.total_items || products.length;
//   } else if (!hasFilters && categoryData) {
//     products = categoryData?.products?.data || categoryData?.products || [];
//     categoryName = categoryData?.category_name || "";
//     totalItems = products.length;
//   }

//   const handleApplyFilters = (e) => {
//     e.preventDefault();
//     setPage(1);
//     setShowFilter(false);
//   };

//   const handleClearFilters = () => {
//     setMinPrice("");
//     setMaxPrice("");
//     setPage(1);
//   };

//   if (isLoading && !hasFilters) {
//     return (
//       <div className="container mx-auto px-4 py-20 flex justify-center items-center">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#8A77A9]" />
//       </div>
//     );
//   }

//   if (catError && !hasFilters) {
//     return (
//       <div className="container mx-auto px-4 py-20 text-center text-red-500 font-medium">
//         Error loading category products.
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto px-4 py-12">
//       {/* Breadcrumb */}
//       <div className="text-sm text-gray-500 mb-2 flex items-center gap-2">
//         <Link to="/" className="hover:text-[#8A77A9] transition-colors">Home</Link>
//         <span>/</span>
//         <span className="text-gray-800 font-semibold">
//           {categoryName || "Category"}
//         </span>
//       </div>

//       {/* Header */}
//       <div className="flex items-center justify-between mb-8">
//         <div>
//           <h1 className="text-4xl font-black text-[#302245] relative inline-block">
//             {categoryName || "Products"}
//             <span className="absolute bottom-0 left-0 w-12 h-1 bg-[#8A77A9] rounded-full" />
//           </h1>
//           <p className="text-sm text-gray-400 mt-3">
//             {totalItems} products found
//           </p>
//         </div>

//         <button
//           onClick={() => setShowFilter(!showFilter)}
//           className="flex items-center gap-2 px-4 py-2 rounded-full border border-purple-100 text-[#8A77A9] hover:bg-purple-50 transition font-semibold text-sm"
//         >
//           <FiSliders size={16} />
//           Filters
//           {(minPrice || maxPrice) && (
//             <span className="w-2 h-2 rounded-full bg-[#8A77A9] inline-block" />
//           )}
//         </button>
//       </div>

//       {/* Filter Panel */}
//       {showFilter && (
//         <div className="mb-8 p-6 bg-white rounded-2xl border border-purple-100 shadow-sm">
//           <div className="flex items-center justify-between mb-4">
//             <h3 className="font-bold text-[#302245]">Filter by Price (EGP)</h3>
//             <button onClick={() => setShowFilter(false)}>
//               <FiX size={18} className="text-gray-400" />
//             </button>
//           </div>
//           <form onSubmit={handleApplyFilters} className="flex flex-wrap gap-4 items-end">
//             <div>
//               <label className="text-xs text-gray-500 mb-1 block">Min Price</label>
//               <input
//                 type="number"
//                 placeholder="0"
//                 value={minPrice}
//                 onChange={(e) => setMinPrice(e.target.value)}
//                 className="h-10 px-4 border border-purple-100 rounded-xl text-sm focus:outline-none focus:border-[#8A77A9] w-32"
//               />
//             </div>
//             <div>
//               <label className="text-xs text-gray-500 mb-1 block">Max Price</label>
//               <input
//                 type="number"
//                 placeholder="9999"
//                 value={maxPrice}
//                 onChange={(e) => setMaxPrice(e.target.value)}
//                 className="h-10 px-4 border border-purple-100 rounded-xl text-sm focus:outline-none focus:border-[#8A77A9] w-32"
//               />
//             </div>
//             <button
//               type="submit"
//               className="h-10 px-6 bg-[#8A77A9] text-white rounded-xl text-sm font-bold hover:bg-[#302245] transition"
//             >
//               Apply
//             </button>
//             {(minPrice || maxPrice) && (
//               <button
//                 type="button"
//                 onClick={handleClearFilters}
//                 className="h-10 px-4 text-[#8A77A9] text-sm font-bold hover:underline"
//               >
//                 Clear
//               </button>
//             )}
//           </form>
//         </div>
//       )}

//       {/* Products Grid */}
//       {isLoading ? (
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {[...Array(8)].map((_, i) => (
//             <div key={i} className="bg-white border rounded-2xl h-80 animate-pulse" />
//           ))}
//         </div>
//       ) : products.length === 0 ? (
//         <div className="bg-white p-16 text-center rounded-3xl border border-purple-50 shadow-sm text-gray-500">
//           No products available in this category yet.
//         </div>
//       ) : (
//         <>
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {products.map((product) => (
//               <ProductCard
//                 key={product.prd_id || product.id}
//                 product={product}
//               />
//             ))}
//           </div>

//           {/* Pagination */}
//           {lastPage > 1 && (
//             <div className="flex items-center justify-center gap-4 pt-10">
//               <button
//                 disabled={page === 1}
//                 onClick={() => setPage(page - 1)}
//                 className="px-4 py-2 rounded-full border border-purple-100 text-sm font-bold text-gray-600 disabled:opacity-50 hover:bg-purple-50 transition"
//               >
//                 Prev
//               </button>
//               <span className="text-sm font-bold text-[#302245]">
//                 Page {page} of {lastPage}
//               </span>
//               <button
//                 disabled={page === lastPage}
//                 onClick={() => setPage(page + 1)}
//                 className="px-4 py-2 rounded-full border border-purple-100 text-sm font-bold text-gray-600 disabled:opacity-50 hover:bg-purple-50 transition"
//               >
//                 Next
//               </button>
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// }