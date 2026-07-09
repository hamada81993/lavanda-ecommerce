export default function CategoryHeader({
  title,
  onFilterClick,
}) {
  return ( 
    <div className="mb-6">
      <h2 className="text-3xl font-bold mb-4">
        {title}
      </h2>

      <div className="flex flex-col sm:flex-row justify-between gap-4 border-b pb-4">
        <button
          onClick={onFilterClick}
          className="font-semibold"
        >
          Filter By
        </button>

        <select className="outline-none">
          <option>Newest</option>
          <option>Price Low</option>
          <option>Price High</option>
        </select>
      </div>
    </div>
  );
}