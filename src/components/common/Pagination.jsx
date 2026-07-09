export default function Pagination() {
  return (
    <div className="flex justify-center gap-2 mt-12">
      {[1, 2, 3, 4, 5].map((page) => (
        <button
          key={page}
          className={`
            w-10
            h-10
            rounded-full
            ${
              page === 1
                ? "bg-primary text-white"
                : "hover:bg-gray-100"
            }
          `}
        >
          {page}
        </button>
      ))}
    </div>
  );
}