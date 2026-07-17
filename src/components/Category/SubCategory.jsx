import { Link, useParams } from "react-router-dom";
import { useGetChildCategoriesQuery } from "../../redux/categories/categoriesApi";

export default function SubCategory() {
  const { id } = useParams();

  const {
    data: childCategories = [],
    isLoading,
    error,
  } = useGetChildCategoriesQuery(id);

  if (isLoading) {
    return (
      <div className="py-20 text-center">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-20 text-center text-red-500">
        Something went wrong
      </div>
    );
  }

  if (!childCategories.length) {
    return (
      <div className="py-20 text-center">
        No Child Categories Found
      </div>
    );
  }

  return (
    <section className="container mx-auto px-4 py-10">

      <h1 className="text-3xl font-bold mb-10 text-[#302245]">
        Shop By Collection
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {childCategories.map((child) => (
          <Link
            key={child.id}
            to={`/child-category/${child.id}`}
            className="group"
          >
            <div className="rounded-2xl overflow-hidden border bg-white shadow-sm hover:shadow-lg transition">

              <img
                src={child.image_url}
                alt={child.name}
                className="w-full h-72 object-cover group-hover:scale-105 transition duration-300"
              />

              <div className="p-4">

                <h2 className="font-semibold text-[#302245] text-center">
                  {child.name}
                </h2>

              </div>

            </div>
          </Link>
        ))}

      </div>

    </section>
  );
}